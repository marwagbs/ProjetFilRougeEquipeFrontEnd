import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccueilClientService } from '../../services/accueil-client.service';
import { TableRes } from '../../entities/TableRes';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../entities/reservation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil-client',
  templateUrl: './accueil-client.component.html',
  styleUrls: ['./accueil-client.component.scss']
})
export class AccueilClientComponent implements OnInit, OnDestroy {

  tables: TableRes[] = [];
  reservations: Reservation[] = [];
  tableSubscription?: Subscription;
  reservationSubscription?: Subscription;

  constructor(
    private accueilClientService: AccueilClientService,
    private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getAllTables();
 
  }

  getAllTables(): void {
    this.tableSubscription = this.accueilClientService.getAllTables().subscribe({
      next: (tables: TableRes[]) => {
        this.tables = tables;
      },
      error: (error) => {
        console.error('Error fetching tables:', error);
      }
    });
  }

  
  ngOnDestroy(): void {
    if (this.tableSubscription) {
      this.tableSubscription.unsubscribe();
    }
    if (this.reservationSubscription) {
      this.reservationSubscription.unsubscribe();
    }
  }
}
