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

@Component({
  selector: 'app-page-service',
  standalone: true,
  imports: [MatRippleComponent , CommonModule, AlertComponent],
  templateUrl: './page-service.component.html',
  styleUrl: './page-service.component.scss'
})
export class PageServiceComponent implements OnInit {
  constructor(private commandeService:CommandeService, private router:Router, private commandeDataService: CommandeDataService){}

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
  

    

    const data = {};   
    this.commandeService.createCommande(id, data).subscribe(
      (commande) => {
        this.commandeDataService.setCommandeData(commande)
        console.log(this.commandeDataService.commandeData)
        this.router.navigateByUrl("/cree-commande");
      }
    );
  }

}