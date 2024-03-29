import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande/commande.service';
import { Observable } from 'rxjs';
import { Commande } from '../../entities/commande';
import { MatRippleComponent } from '../../core/components/mat-ripple/mat-ripple.component';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { AsyncPipe, CommonModule, UpperCasePipe } from '@angular/common';
import { Produit } from '../../entities/produit';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ConfirmDirective } from '../../core/directives/confirm.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-cuisine',
  standalone: true,
  imports: [MatRippleComponent, AlertComponent, CommonModule, AsyncPipe ,UpperCasePipe, MatCardModule, MatButtonModule, ConfirmDirective , RouterLink],
  templateUrl: './page-cuisine.component.html',
  styleUrl: './page-cuisine.component.scss'
})
export class PageCuisineComponent implements OnInit {
  public commandes$!:Observable<Commande[]>
  public produitsParNom: Map<string, number> = new Map();
  public commandesAvecProduits: Map<number, Map<string, number>> = new Map()
  constructor(private commandeService:CommandeService ){}



  ngOnInit(): void {
    this.commandes$ = this.commandeService.getAllCommandeWithStatusPasse();
    this.commandes$.subscribe(commandes => {
      commandes.forEach(commande => {
        const produitsParNom: Map<string, number> = new Map();
        commande.produits.forEach((produit: Produit) => {
          const nomProduit = produit.nom;
          if (!produitsParNom.has(nomProduit)) {
            produitsParNom.set(nomProduit, 0);
          }
          const count = produitsParNom.get(nomProduit)! + 1;
          produitsParNom.set(nomProduit, count);
        });
        this.commandesAvecProduits.set(commande.id, produitsParNom);
      });
    });
  }
  
  public updateCommande(idCommande:number):void{
   
  if (idCommande!==null){
    this.commandeService.updateStatusCommandePrete(idCommande).subscribe()
  }
}

}
