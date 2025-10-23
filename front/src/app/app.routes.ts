import { Routes } from '@angular/router';
import { Inicio } from './features/pages/inicio/inicio';
import { SubirPlayer } from './features/pages/subir-player/subir-player';
import { Login } from './features/pages/login/login';
import { EditarPlayer } from './features/pages/editar-player/editar-player';
import { Player } from './features/pages/player/player';
import { AuthGuard } from './utils/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component:Inicio,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'subir-player',
        component:SubirPlayer,
        canActivate: [AuthGuard]
    },
    {
        path: 'editar-player',
        component:EditarPlayer,
        canActivate: [AuthGuard]

    },
    {
        path: 'ver-player',
        component:Player,
        canActivate: [AuthGuard]

    }
];
