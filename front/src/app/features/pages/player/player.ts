import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DataPlayer } from "../../components/data-player/data-player";

@Component({
  selector: 'app-player',
  imports: [RouterLink, DataPlayer],
  templateUrl: './player.html',
  styleUrls: ['./player.scss']
})
export class Player implements OnInit {
  idJugador: number | null = null;
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.idJugador = idParam ? +idParam : null;
    console.log("ID del jugador:", this.idJugador);
  }
}
