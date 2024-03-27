import { Component, OnInit } from '@angular/core';
import { MatRippleComponent } from '../../core/components/mat-ripple/mat-ripple.component';
import { CommandeService } from '../../services/commande.service';
import { TableRes } from '../../entities/reservation';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../core/components/alert/alert.component';

@Component({
  selector: 'app-page-service',
  standalone: true,
  imports: [MatRippleComponent , CommonModule, AlertComponent],
  templateUrl: './page-service.component.html',
  styleUrl: './page-service.component.scss'
})
export class PageServiceComponent implements OnInit {
  constructor(private commandeService:CommandeService){}

  public tables$!:Observable<TableRes[]>;
  ngOnInit(): void {
    this.tables$=this.commandeService.getAllTableWithStatusOcuppe();
    this.tables$.subscribe(table=>{
      console.log('Table récuperées', table)
    })
  }

}
