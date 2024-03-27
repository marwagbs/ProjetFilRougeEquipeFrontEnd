import { CanActivateFn, Routes } from '@angular/router';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { PageReservationsComponent } from './components/page-reservations/page-reservations.component';
import { AccueilClientComponent } from './components/accueil-client/accueil-client.component';
import { inject } from '@angular/core';
import { LoginService } from './services/login/login.service';

const isAuthenticated: CanActivateFn = () => {
    return inject(LoginService).isAuthenticated();
}

export const routes: Routes = [

    { path: 'accueil', component: PageAccueilComponent },
    { path: 'reservation', component: PageReservationsComponent },
    { path: 'accueil-clientele', component: AccueilClientComponent},
    { path: 'reservation',canActivate: [isAuthenticated], component: PageReservationsComponent },
    {path: 'cree-commande', canActivate: [isAuthenticated], loadComponent:()=>import('./components/page-commande/page-commande.component').then((f=>f.PageCommandeComponent))},
    {path:"service",canActivate: [isAuthenticated], loadComponent:()=>import('./components/page-service/page-service.component').then(f=>f.PageServiceComponent)},
    {path:"**", loadComponent:()=>import('./components/login-form/login-form.component').then((f=>f.LoginFormComponent)) }

]

