
import { CanActivateFn, Routes } from '@angular/router';
import { AccueilClientComponent } from './components/accueil-client/accueil-client.component';
import { inject } from '@angular/core';
import { LoginService } from './services/login/login.service';

const isAuthenticated: CanActivateFn = () => {
    return inject(LoginService).isAuthenticated();
}

export const routes: Routes = [

    { path: 'accueil-clientele', canActivate: [isAuthenticated],component: AccueilClientComponent},
     { path: 'accueil-employe',canActivate: [isAuthenticated],loadComponent:() => import('./components/page-accueil/page-accueil.component').then(f => f.PageAccueilComponent)},
     { path: 'reservation',canActivate: [isAuthenticated],loadComponent:() => import('./components/page-reservations/page-reservations.component').then(f => f.PageReservationsComponent)},
    { path: 'reservations-acceptees', canActivate: [isAuthenticated],loadComponent:() => import('./components/page-reservations-acceptees/page-reservations-acceptees.component').then(f => f.PageReservationsAccepteesComponent)},
    {path: 'cree-commande', canActivate: [isAuthenticated], loadComponent:()=>import('./components/page-commande/page-commande.component').then((f=>f.PageCommandeComponent))},
    {path:"service",canActivate: [isAuthenticated], loadComponent:()=>import('./components/page-service/page-service.component').then(f=>f.PageServiceComponent)},
    {path:"cuisine", canActivate: [isAuthenticated], loadComponent:()=>import('./components/page-cuisine/page-cuisine.component').then(f=>f.PageCuisineComponent)},
    {path:"caisse",canActivate: [isAuthenticated], loadComponent:()=>import('./components/caisse/caisse.component').then(f=>f.CaisseComponent)},
    {path:"showDetail/:id", canActivate: [isAuthenticated], loadComponent: ()=>import('./components/show-detail/show-detail.component').then(f=>f.ShowDetailComponent)},
    {path:"**", loadComponent:()=>import('./components/login-form/login-form.component').then((f=>f.LoginFormComponent)) }

]




