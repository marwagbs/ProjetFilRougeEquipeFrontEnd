import { Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageReservationsComponent } from './components/page-reservations/page-reservations.component';

export const routes: Routes = [

  

    { path: 'accueil-employe', component: PageAccueilComponent },
    { path: 'reservation', component: PageReservationsComponent },
       
    {path:"**", loadComponent:()=>import('./components/login-form/login-form.component').then((f=>f.LoginFormComponent)) }

];
