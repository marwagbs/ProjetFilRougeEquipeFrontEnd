import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuRoute } from './menu-route';
import { LoginService } from '../../services/login/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

//  public menuRoutes:IMenuRoute[]=[
//   {path:'accueil-employe',libelle:'Accueil employe'},
//   {path:'accueil-clientele',libelle:'Accueil clientele'},
//   {path:'reservation',libelle:'Réservations'},
//   {path:'service',libelle:'Service'},
//   {path:'cuisine',libelle:'Cuisine'},
//   {path:'caisse',libelle:'Caisse'}
//  ]
constructor(private loginService:LoginService, private location:Location){}

 public logout(){
  this.loginService.logout();
 }

 public goBack(): void {
  this.location.back();
}
}
