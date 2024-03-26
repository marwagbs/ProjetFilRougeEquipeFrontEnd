import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuRoute } from './menu-route';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 public menuRoutes:IMenuRoute[]=[
  {path:'accueil',libelle:'Accueil clientele'},
  {path:'reservation',libelle:'Réservations'},
  {path:'service',libelle:'Service'},
  {path:'cuisine',libelle:'Cuisine'},
  {path:'caisse',libelle:'Caisse'}
 ]

 public logout(){
  console.log("déconnecté")
 }
}
