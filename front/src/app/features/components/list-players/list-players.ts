import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/playerService/player-service';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
  standalone: true,
  selector: 'app-list-players',
  imports: [RouterLink, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll,CdkVirtualForOf,],
  templateUrl: './list-players.html',
  styleUrl: './list-players.scss'
})
export class ListPlayers implements OnInit {

  players: Player[] = []

  private playerService = inject(PlayerService)


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
          defending_marking: player.defending_marking,
          defending_standing_tackle: player.defending_standing_tackle,
          mentality_interceptions: player.mentality_interceptions,
          movement_acceleration: player.movement_acceleration,
          power_shot_power: player.power_shot_power,
          power_strength: player.power_strength,
          skill_dribbling: player.skill_dribbling
        }));
      },
      error: (err) => {
        console.error('Error al obtener a los jugagores:', err);
      }
    })
  }

  trackById(index: number, player: Player): string | number {
    return player.id;
  }


}
