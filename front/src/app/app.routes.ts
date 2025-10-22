import { Routes } from '@angular/router';
import { Inicio } from './features/pages/inicio/inicio';
import { SubirPlayer } from './features/pages/subir-player/subir-player';
import { Login } from './features/pages/login/login';
import { EditarPlayer } from './features/pages/editar-player/editar-player';
import { Player } from './features/pages/player/player';

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
    },
    {
        path: 'editar-player',
        component:EditarPlayer
    },
    {
        path: 'ver-player',
        component:Player
    }
];
