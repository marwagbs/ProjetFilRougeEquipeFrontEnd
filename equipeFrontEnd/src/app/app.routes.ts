import { CanActivateFn, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageReservationsComponent } from './components/page-reservations/page-reservations.component';
<<<<<<< HEAD
import { inject } from '@angular/core';
import { LoginService } from './services/login/login.service';

const isAuthenticated: CanActivateFn = () => {
    return inject(LoginService).isAuthenticated();
}

export const routes: Routes = [

  
    { path: 'accueil',canActivate: [isAuthenticated], component: PageAccueilComponent },
    { path: 'reservation',canActivate: [isAuthenticated], component: PageReservationsComponent },
    {path: 'cree-commande', canActivate: [isAuthenticated], loadComponent:()=>import('./components/page-commande/page-commande.component').then((f=>f.PageCommandeComponent))},
       
    {path:"**", loadComponent:()=>import('./components/login-form/login-form.component').then((f=>f.LoginFormComponent)) }

=======
import { AccueilClientComponent } from './components/accueil-client/accueil-client.component';

export const routes: Routes = [
    { path: 'accueil-employe', component: PageAccueilComponent },
    { path: 'reservation', component: PageReservationsComponent },
    { path: 'accueil-clientele', component: AccueilClientComponent},
>>>>>>> c279b8760bfe1da19c504f118e70af6f34269a8d
];
