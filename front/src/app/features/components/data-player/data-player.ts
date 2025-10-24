import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/playerService/player-service';
import { Player } from '../../models/player.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Grafico } from "../grafico/grafico";

@Component({
  selector: 'app-data-player',
  imports: [CommonModule, NgOptimizedImage, Grafico],
  templateUrl: './data-player.html',
  styleUrls: ['./data-player.scss']
})
export class DataPlayer implements OnInit {
  idJugador: number | null = null;
  jugador: Player = {} as Player;
  private route = inject(ActivatedRoute);
  private playerService = inject(PlayerService);

 finalizacionAtaque: number = 0;     
  regate: number = 0;                   
  paseCorto: number = 0;              
  potenciaDisparo: number = 0;        
  aceleracion: number = 0;             
  entrada: number = 0;                  
  interceptaciones: number = 0;        
  fuerza: number = 0;                   

  // Títulos en español para el radar chart
  tituloAtaque: string[] = [
    'Finalización', 'Regate', 'Pase corto', 'Potencia de disparo', 'Aceleración'
  ];

  tituloDefensa: string[] = [
    'Entrada', 'Interceptaciones', 'Fuerza'
  ];

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.idJugador = idParam ? +idParam : null;
    console.log("ID del jugador en DataPlayer:", this.idJugador);

    if (this.idJugador !== null) {
      this.obtenerPlayer();
    }
  }

  obtenerPlayer() {
    if (this.idJugador === null) return;

    this.playerService.getPlayerById(this.idJugador).subscribe({
      next: (player) => {
        this.jugador = player; 
        console.log('Jugador obtenido:', this.jugador);
        this.finalizacionAtaque = player.attacking_finishing;
        this.regate = player.skill_dribbling;
        this.paseCorto = player.attacking_short_passing;
        this.potenciaDisparo = player.power_shot_power;
        this.aceleracion = player.movement_acceleration;
        this.entrada = player.defending_standing_tackle;
        this.interceptaciones = player.mentality_interceptions;
        this.fuerza = player.power_strength;

      },
      error: (err) => {
        console.error('Error al obtener al jugador:', err);
      }
    });
  }


  
}
