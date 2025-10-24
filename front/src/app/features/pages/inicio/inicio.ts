import { Component } from '@angular/core';
import { ListPlayers } from "../../components/list-players/list-players";

@Component({
  selector: 'app-inicio',
  imports: [ ListPlayers,],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
   
}
