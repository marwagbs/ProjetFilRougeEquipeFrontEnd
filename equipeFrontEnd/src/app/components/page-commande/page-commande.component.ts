import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit/produit.service';
import { Observable } from 'rxjs';
import { Produit } from '../../entities/produit';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AlertComponent } from '../../core/components/alert/alert.component';

@Component({
  selector: 'app-page-commande',
  standalone: true,
  imports: [AsyncPipe, CommonModule, AlertComponent],
  templateUrl: './page-commande.component.html',
  styleUrl: './page-commande.component.scss'
})
export class PageCommandeComponent implements OnInit{
  public produits$!:Observable<Produit[]>;
  produitsParCategorie: Map<string, Produit[]> = new Map();
  constructor(private produitService: ProduitService){ }

ngOnInit(): void {
    this.produits$=this.produitService.getAllProduits();
    this.produits$.subscribe(produits=>{
      produits.forEach(produit =>{
        produit.quantite=0;
        if(!this.produitsParCategorie.has(produit.categorie.libelle)){
          this.produitsParCategorie.set(produit.categorie.libelle,[])
        }
        this.produitsParCategorie.get(produit.categorie.libelle)!.push(produit);
        
      })

    })
  }
  incrementQuantity(produit: Produit) {
    produit.quantite++
  }

  // Méthode pour décrémenter la quantité
  decrementQuantity(produit: Produit) {
    if (produit.quantite>0){
      produit.quantite--;
    }
   
    }

}

  
