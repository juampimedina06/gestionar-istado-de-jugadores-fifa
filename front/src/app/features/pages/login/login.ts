import { Component, inject } from '@angular/core';
import { InputReutilizable } from "../../components/input-reutilizable/input-reutilizable";
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginService/login-service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

export interface formLogin{
  username: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  imports: [InputReutilizable, ReactiveFormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private fb = inject(NonNullableFormBuilder)
  private loginService = inject(LoginService)
  private router = inject(Router);

  form: FormGroup<formLogin> = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  });

  enviarFormulario(){
    if(this.form.invalid) return;

    const user: User = this.form.value as User;
    this.loginService.login(user).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        this.router.navigate(['/']); 
      },
      error: (err) => {
        console.error('Error en el login:', err);
        console.log(user)
      }
    });
  }

}
