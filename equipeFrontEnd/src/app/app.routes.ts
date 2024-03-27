import { CanActivateFn, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageReservationsComponent } from './components/page-reservations/page-reservations.component';
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

];
