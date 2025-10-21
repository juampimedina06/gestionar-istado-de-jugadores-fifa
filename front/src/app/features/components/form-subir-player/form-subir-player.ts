import { Component, inject } from '@angular/core';
import { InputReutilizable } from "../input-reutilizable/input-reutilizable";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface ContenidoSubirPlayer{
  name: FormControl<string>;
  position: FormControl<string>;
  club_name: FormControl<string>;
  nationality_name: FormControl<string>;
  player_face_url: FormControl<string>;
  fifa_version: FormControl<string>;
  fifa_update: FormControl<string>;
  player_traits: FormControl<string>;
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

  formPlayer : FormGroup<ContenidoSubirPlayer> = this.fb.group({
    name: this.fb.control('', Validators.required),
    position: this.fb.control('', Validators.required),
    club_name: this.fb.control('', Validators.required),
    nationality_name: this.fb.control('', Validators.required),
    player_face_url: this.fb.control('', Validators.required),
    fifa_version: this.fb.control('', Validators.required),
    fifa_update: this.fb.control('', Validators.required),
    player_traits: this.fb.control('', Validators.required),
  })

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
