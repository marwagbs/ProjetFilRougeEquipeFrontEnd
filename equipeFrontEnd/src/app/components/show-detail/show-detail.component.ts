import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande/commande.service';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../../entities/commande';
import { Observable, count } from 'rxjs';
import { Produit } from '../../entities/produit';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule,],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit{
  public commande$!: Observable<Commande[]>;
  public commandesProduits: Map<number, Map<string, { count: number; prix: number }>> = new Map();
  public selectedCommandeId?: number ;
  public totalCommande: number = 0;
  constructor(private commandeService:CommandeService, private route: ActivatedRoute){}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const commandeId = parseInt(params.get('id')!, 10);
  
      this.commande$ = this.commandeService.getAllCommandeWithStatusServie();
  
      this.commande$.subscribe((commandes: Commande[]) => {
        console.log(commandes)
        const commande = commandes.find(cmd => cmd.id === commandeId);
        if (commande) {
          const produitsDetails: { [nom: string]: { count: number; prix: number } } = {}; 
          commande.produits.forEach((produit: Produit) => {
            const nomProduit = produit.nom;
            if (!produitsDetails[nomProduit]) {
              produitsDetails[nomProduit] = { count: 0, prix: produit.prix  }; 
            }
            produitsDetails[nomProduit].count++; 
           
          });
          for (const produit in produitsDetails) {
            this.totalCommande += produitsDetails[produit].count * produitsDetails[produit].prix;
          }
          if (this.selectedCommandeId === undefined) {
            this.selectedCommandeId = commande.id;
          }
          
          this.commandesProduits.set(commande.id, new Map(Object.entries(produitsDetails)));
         
        } else {
          console.log('Commande non trouvée.');
        }
      });
    });
  }
  
  public updateStatus(id:number){
    this.commandeService.updateStatusCommandeRegle(id).subscribe(
      (commande: Commande) => {
        console.log('Commande mise à jour avec le produit ajouté :', commande);
      })
  }
  }
  
  

