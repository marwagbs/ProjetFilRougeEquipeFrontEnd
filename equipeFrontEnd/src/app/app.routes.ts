import { Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageReservationsComponent } from './components/page-reservations/page-reservations.component';
import { AccueilClientComponent } from './components/accueil-client/accueil-client.component';

export const routes: Routes = [
    { path: 'accueil-employe', component: PageAccueilComponent },
    { path: 'reservation', component: PageReservationsComponent },
    { path: 'accueil-clientele', component: AccueilClientComponent},
];
