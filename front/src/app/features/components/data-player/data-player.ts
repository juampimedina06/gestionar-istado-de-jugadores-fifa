import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/playerService/player-service';
import { Player } from '../../models/player.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-data-player',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './data-player.html',
  styleUrls: ['./data-player.scss']
})
export class DataPlayer implements OnInit {
  idJugador: number | null = null;
  jugador: Player = {} as Player;
  private route = inject(ActivatedRoute);
  private playerService = inject(PlayerService);

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
      },
      error: (err) => {
        console.error('Error al obtener al jugador:', err);
      }
    });
  }
}
