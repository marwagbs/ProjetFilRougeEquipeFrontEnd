import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit/produit.service';
import { Observable } from 'rxjs';
import { Produit } from '../../entities/produit';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { CommandeService } from '../../services/commande/commande.service';
import { CommandeDataService } from '../../services/commande/commande-data.service';
import { Commande } from '../../entities/commande';

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
  public numeroTable?:number;
  produitsClics:Map<number,number>=new Map();
  clickedProductId: number | null = null;

  constructor(private produitService: ProduitService, private commandeService: CommandeService,private commandeDataervice: CommandeDataService ){ }

ngOnInit(): void {
    this.produits$=this.produitService.getAllProduits();
  
    this.numeroTable=this.commandeDataervice.getCommandeData()?.tableRes.id
    this.produits$.subscribe(produits=>{
      produits.forEach(produit =>{
        if(!this.produitsParCategorie.has(produit.categorie.libelle)){
          this.produitsParCategorie.set(produit.categorie.libelle,[])
        }
        this.produitsParCategorie.get(produit.categorie.libelle)!.push(produit);
        this.produitsClics.set(produit.id,0)
        
      })

    })
  }
 public addProduct(produit: Produit): void {
    const currentClicks = this.produitsClics.get(produit.id) || 0;
    this.produitsClics.set(produit.id, currentClicks + 1);
    const newData={
      "produits": [{"id":produit.id}]
    } 
    const idCommande =this.commandeDataervice.getCommandeData();
    if (idCommande!==null){
      this.commandeService.updateCommande(idCommande.id, newData).subscribe()
    } }
 
    public closeCommande():void{
      const idCommande =this.commandeDataervice.getCommandeData();
    if (idCommande!==null){
      this.commandeService.updateStatusCommande(idCommande.id).subscribe(
        (commande: Commande) => {
          console.log('Commande mise à jour avec le produit ajouté :', commande);
        })
    }

}

}
