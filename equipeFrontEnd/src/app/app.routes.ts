import { Routes } from '@angular/router';

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
    }
];
