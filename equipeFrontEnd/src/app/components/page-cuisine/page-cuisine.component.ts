import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande/commande.service';
import { Observable } from 'rxjs';
import { Commande } from '../../entities/commande';
import { MatRippleComponent } from '../../core/components/mat-ripple/mat-ripple.component';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { AsyncPipe, CommonModule, UpperCasePipe } from '@angular/common';
import { Produit } from '../../entities/produit';
@Component({
  selector: 'app-page-cuisine',
  standalone: true,
  imports: [MatRippleComponent, AlertComponent, CommonModule, AsyncPipe ,UpperCasePipe],
  templateUrl: './page-cuisine.component.html',
  styleUrl: './page-cuisine.component.scss'
})
export class PageCuisineComponent implements OnInit {
  public commandes$!:Observable<Commande[]>
  produitsParNom: Map<string, Commande[]> = new Map();
  constructor(private commandeService:CommandeService){}



  ngOnInit(): void {
    this.commandes$ = this.commandeService.getAllCommandeWithStatusPasse()
    this.commandes$.subscribe(commande=>{
      console.log(commande)
    });
    console.log(this.commandes$)
    this.commandes$.subscribe(commandes => {
      commandes.forEach(commande => {
        commande.produits.forEach((produit:Produit) => { 
          const nomProduit = produit.nom;
          if (!this.produitsParNom.has(nomProduit)) {
            this.produitsParNom.set(nomProduit, []);
          } else {
            this.produitsParNom.get(nomProduit)!.push(commande)
          }
        });
      });
    });
  }
  
}
