import { Component } from '@angular/core';
import { SelectFilter } from "../../components/select-filter/select-filter";
import { ListPlayers } from "../../components/list-players/list-players";

@Component({
  selector: 'app-inicio',
  imports: [SelectFilter, ListPlayers],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

}
