import { Component, inject, Input } from '@angular/core';
import { InputReutilizable } from "../input-reutilizable/input-reutilizable";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/playerService/player-service';
import { Player } from '../../models/player.model';

export interface ContenidoSubirPlayer {
  long_name: FormControl<string>;
  player_positions: FormControl<string>;
  club_name: FormControl<string>;
  nationality_name: FormControl<string>;
  player_face_url: FormControl<string>;
  fifa_version: FormControl<string>;
  fifa_update: FormControl<string>;
  player_traits: FormControl<string>;

  attacking_finishing: FormControl<number>;
  skill_dribbling: FormControl<number>;
  attacking_short_passing: FormControl<number>;
  power_shot_power: FormControl<number>;
  movement_acceleration: FormControl<number>;
  defending_standing_tackle: FormControl<number>;
  mentality_interceptions: FormControl<number>;
  power_strength: FormControl<number>;

  overall: FormControl<number>;
  potential: FormControl<number>;
  age: FormControl<number>;
 
}

@Component({
  selector: 'app-form-subir-player',
  standalone: true,
  imports: [InputReutilizable, ReactiveFormsModule],
  templateUrl: './form-subir-player.html',
  styleUrl: './form-subir-player.scss'
})
export class FormSubirPlayer {

  private fb = inject(NonNullableFormBuilder);
  private route = inject(ActivatedRoute);
  private playerService = inject(PlayerService);

  idJugador: number | null = null;
backendErrors: { [key: string]: string } = {};


  @Input() jugadorEditado: boolean | null = null;

  formPlayer: FormGroup<ContenidoSubirPlayer> = this.fb.group({
    long_name: this.fb.control('', Validators.required),
    player_positions: this.fb.control('', Validators.required),
    club_name: this.fb.control('', Validators.required),
    nationality_name: this.fb.control('', Validators.required),
    player_face_url: this.fb.control('', Validators.required),
    fifa_version: this.fb.control('', Validators.required),
    fifa_update: this.fb.control('', Validators.required),
    player_traits: this.fb.control('', Validators.required),
    attacking_finishing: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    skill_dribbling: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    attacking_short_passing: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    power_shot_power: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    movement_acceleration: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    defending_standing_tackle: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    mentality_interceptions: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    power_strength: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    overall: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    potential: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
    age: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
  });

  ngOnInit() {
    if (this.jugadorEditado) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.idJugador = +id;
        this.playerService.getPlayerById(this.idJugador).subscribe({
          next: (player) => this.cargarJugadorEnFormulario(player),
          error: (err) => console.error('Error al traer jugador:', err)
        });
      }
    }
  }

  private cargarJugadorEnFormulario(player: Player) {
    this.formPlayer.patchValue({
      long_name: player.long_name,
      player_positions: player.player_positions,
      club_name: player.club_name,
      nationality_name: player.nationality_name,
      player_face_url: player.player_face_url,
      fifa_version: player.fifa_version,
      fifa_update: player.fifa_update,
      player_traits: player.player_traits,
      attacking_finishing: player.attacking_finishing,
      skill_dribbling: player.skill_dribbling,
      attacking_short_passing: player.attacking_short_passing,
      power_shot_power: player.power_shot_power,
      movement_acceleration: player.movement_acceleration,
      defending_standing_tackle: player.defending_standing_tackle,
      mentality_interceptions: player.mentality_interceptions,
      power_strength: player.power_strength,
      overall: player.overall,
      potential: player.potential,
      age: player.age
    });
  }

  subirJugador() {
   const datosJugador : any = this.formPlayer.value;

    if (this.jugadorEditado && this.idJugador !== null) {
      this.playerService.putPlayer(this.idJugador, datosJugador).subscribe({
        next: () => {
          console.log('Jugador actualizado con éxito', datosJugador)
          window.location.href = "/";

         },
        error: (err) => {
          console.log(datosJugador )
          console.error('Error al actualizar jugador:', err) 
        }
      });
    } else {
      this.playerService.postPlayer(datosJugador).subscribe({
        next: () => {
          console.log('Jugador creado con éxito', datosJugador)
          window.location.href = "/";


         },
       error: (err) => {
  if (err.error?.errors) {
    this.backendErrors = {};
    err.error.errors.forEach((e: any) => {
      const field = e.path; // el campo que falló según express-validator
      this.backendErrors[field] = e.msg; // el mensaje del error
    });
  }
}
      });
    }
  }
}
