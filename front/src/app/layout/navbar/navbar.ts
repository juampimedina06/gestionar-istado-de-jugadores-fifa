import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  constructor(private router: Router) { }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}