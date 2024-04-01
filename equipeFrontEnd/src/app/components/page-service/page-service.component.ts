import { Component, OnInit } from '@angular/core';
import { MatRippleComponent } from '../../core/components/mat-ripple/mat-ripple.component';
import { CommandeService } from '../../services/commande/commande.service';
import { TableRes } from '../../entities/reservation';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { Router } from '@angular/router';
import { CommandeDataService } from '../../services/commande/commande-data.service';
import { Commande } from '../../entities/commande';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDirective } from '../../core/directives/confirm.directive';
import { YesNoComponent } from '../../core/components/yes-no/yes-no.component';
@Component({
  selector: 'app-page-service',
  standalone: true,
  imports: [MatRippleComponent , CommonModule, AlertComponent, ConfirmDirective, YesNoComponent],
  templateUrl: './page-service.component.html',
  styleUrl: './page-service.component.scss'
})
export class PageServiceComponent implements OnInit {
  constructor(private commandeService:CommandeService, private router:Router, private commandeDataService: CommandeDataService, private dialog: MatDialog){}

  public tables$!:Observable<TableRes[]>;
  public commndes$!:Observable<Commande[]>;
  ngOnInit(): void {
    this.tables$=this.commandeService.getAllTableWithStatusOcuppe();
    this.tables$.subscribe();
    this.commndes$=this.commandeService.getAllCommandeWithStatusPrete();
    this.commndes$.subscribe((commande)=>{
      console.log(commande)
    })
   
  }

  createCommande(id: number) {
   
    this.commandeService.getAllCommandeWithStatusPrete().subscribe((commandes) => {
     
      const commandesTable = commandes.filter(commande => commande.tableRes.id === id);
  
      if (commandesTable.length > 0) {
        console.log(commandesTable[0].id);
        this.commandeService.updateStatusCommandeServed(commandesTable[0].id).subscribe();
  
        this.confirmAction(commandesTable[0].id);

      } else {
       
          const data = {};   
        this.commandeService.createCommande(id, data).subscribe(
        (commande) => {
          this.commandeDataService.setCommandeData(commande)
          console.log(this.commandeDataService.commandeData)
          this.router.navigateByUrl("/cree-commande");
        }
    );
      }
    }, (error) => {
      console.error('Erreur lors de la récupération des commandes :', error);
    });
  }
  
  confirmAction(commandesTableId: number) {
    
    const confirmation = window.confirm('Voulez-vous passer la commande en servie ?');

    if (confirmation) {
      
      this.commandeService.updateStatusCommandeServed(commandesTableId).subscribe(() => {
       
        console.log('Action déclenchée avec succès !');
      });
    } else {
      
      console.log('Action annulée par l\'utilisateur.');
    }
  }
  
  }
  

  
