import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande/commande.service';
import { Observable } from 'rxjs';
import { Commande } from '../../entities/commande';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Produit } from '../../entities/produit';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-caisse',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterModule ],
  templateUrl: './caisse.component.html',
  styleUrl: './caisse.component.scss'
})
export class CaisseComponent implements OnInit {
  public commande$!: Observable<Commande[]>;
  public produitsParNom: Map<string, number> = new Map();
  public commandesAvecProduits: Map<number, Map<string, number>> = new Map();
  public selectedTableId?: number ;
  constructor(private commandeService: CommandeService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.commande$ = this.commandeService.getAllCommandeWithStatusServie();
    this.commande$.subscribe((commandes: Commande[]) => {
      console.log(commandes)
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
        if (commande.tableRes && commande.tableRes.id) {
          this.selectedTableId = commande.tableRes.id;
        } 
        this.commandesAvecProduits.set(commande.id, produitsParNom);
        
      });
    });
  }
 
}