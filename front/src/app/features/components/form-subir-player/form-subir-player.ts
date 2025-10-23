import { Component, inject, Input } from '@angular/core';
import { InputReutilizable } from "../input-reutilizable/input-reutilizable";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface ContenidoSubirPlayer{
  name: FormControl<string>;
  position: FormControl<string>;
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
  defending_marking: FormControl<number>;

}

@Component({
  selector: 'app-form-subir-player',
  imports: [InputReutilizable, ReactiveFormsModule],
  templateUrl: './form-subir-player.html',
  styleUrl: './form-subir-player.scss'
})
export class FormSubirPlayer {
  private fb = inject(NonNullableFormBuilder);
  /*IMPLEMENTAR EL SERVICIO DESPUES*/

    private route = inject(ActivatedRoute);


    @Input() jugadorEditado: any = null; 


  formPlayer : FormGroup<ContenidoSubirPlayer> = this.fb.group({
    name: this.fb.control('', Validators.required),
    position: this.fb.control('', Validators.required),
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
    defending_marking: this.fb.control(0, [Validators.required, Validators.min(0), Validators.max(99)]),
  })

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
        console.log("EL ID DEL JUGADO ES:", id)
        
    if (this.jugadorEditado) {
        
      
    }
  }

  subirJugador(){
    if(this.formPlayer.valid){
      console.log(this.formPlayer.value);
      /*Crear modal para mostrar el envio del formulario exito*/
    }else{
      this.formPlayer.markAllAsTouched();
      /*Crear modal para mostrar el error de formulario*/
    }
  }

  

}
