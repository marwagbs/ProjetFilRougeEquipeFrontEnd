import { Routes } from '@angular/router';
import { AccueilClientComponent } from './components/accueil-client/accueil-client.component';

export const routes: Routes = [
    { path: 'accueil-employe',
        loadComponent:
        () => import('./components/page-accueil/page-accueil.component').then(f => f.PageAccueilComponent)
    },
    { path: 'reservation',
        loadComponent:
        () => import('./components/page-reservations/page-reservations.component').then(f => f.PageReservationsComponent)
    },
    { path: 'reservations-acceptees',
        loadComponent:
        () => import('./components/page-reservations-acceptees/page-reservations-acceptees.component').then(f => f.PageReservationsAccepteesComponent)
    },
    { path: 'menu-reservation',
        loadComponent:
        () => import('./components/menu-reservation/menu-reservation.component').then(f => f.MenuReservationComponent)
    },
    { path: 'accueil-clientele', component: AccueilClientComponent}
];
