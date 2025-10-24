import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/playerService/player-service';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InputReutilizable } from "../input-reutilizable/input-reutilizable";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export interface InputFiltrador {
  filtrador: FormControl<string>;
}

@Component({
  standalone: true,
  selector: 'app-list-players',
  imports: [
    RouterLink,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    NgOptimizedImage,
    CommonModule,
    InputReutilizable,
    ReactiveFormsModule
  ],
  templateUrl: './list-players.html',
  styleUrl: './list-players.scss'
})
export class ListPlayers implements OnInit {

  players: Player[] = [];
  filteredPlayers: Player[] = [];

  private playerService = inject(PlayerService);
  fb = inject(NonNullableFormBuilder);

  form: FormGroup<InputFiltrador> = this.fb.group({
    filtrador: this.fb.control('')
  });

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe({
      next: (players) => {
        this.players = players.map((player) => ({
          id: player.id,
          fifa_version: player.fifa_version,
          fifa_update: player.fifa_update,
          long_name: player.long_name,
          club_name: player.club_name,
          nationality_name: player.nationality_name,
          player_positions: player.player_positions,
          player_traits: player.player_traits,
          player_face_url: player.player_face_url,
          attacking_finishing: player.attacking_finishing,
          attacking_short_passing: player.attacking_short_passing,
          defending_standing_tackle: player.defending_standing_tackle,
          mentality_interceptions: player.mentality_interceptions,
          movement_acceleration: player.movement_acceleration,
          power_shot_power: player.power_shot_power,
          power_strength: player.power_strength,
          skill_dribbling: player.skill_dribbling,
          overall: player.overall,
          potential: player.potential,
          age: player.age
        }));

        // Inicializo el array filtrado
        this.filteredPlayers = [...this.players];

        // Escucho los cambios del input
        this.form.get('filtrador')?.valueChanges.subscribe((value) => {
          const filtro = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          this.filteredPlayers = this.players.filter((player) =>
            player.long_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filtro) ||
            player.club_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filtro) ||
            player.nationality_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(filtro)
          );
        });
      },
      error: (err) => {
        console.error('Error al obtener los jugadores:', err);
      }
    });
  }

  trackById(index: number, player: Player): string | number {
    return player.id;
  }

  descargarCSV(): void {
    if (this.filteredPlayers.length === 0) {
      alert("No hay jugadores para exportar ");
      return;
    }

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredPlayers);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Jugadores");

    const csvData = XLSX.utils.sheet_to_csv(ws);

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'jugadores_filtrados.csv');
  }

}
