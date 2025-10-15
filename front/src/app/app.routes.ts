import { Routes } from '@angular/router';
import { Inicio } from './features/pages/inicio/inicio';
import { SubirPlayer } from './features/pages/subir-player/subir-player';
import { Login } from './features/pages/login/login';

export const routes: Routes = [
    {
        path: '',
        component:Inicio
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'subir-player',
        component:SubirPlayer
    }
];
