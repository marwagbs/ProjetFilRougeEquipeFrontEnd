import { Component, OnInit } from '@angular/core';
import { AccueilClientService } from '../../services/accueil-client.service';
import { ReservationService } from '../../services/reservation.service';
import { TableRes } from '../../entities/TableRes';
import { Reservation } from '../../entities/reservation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-accueil-client',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './accueil-client.component.html',
  styleUrls: ['./accueil-client.component.scss']
})
export class AccueilClientComponent implements OnInit {

  tables: TableRes[] = [];
  reservations: Reservation[] = [];

  constructor(
    private accueilClientService: AccueilClientService,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.getAllTables();
    this.getAllReservations();
  }

  getAllTables(): void {
    this.accueilClientService.getAllTables().subscribe({
      next: (tables: TableRes[]) => {
        this.tables = tables;
      },
      error: (error) => {
        console.error('Error fetching tables:', error);
      }
    });
  }

  getAllReservations(): void {
    // Call the service method to get reservations by restaurant
    this.reservationService.getReservationsByRestaurant().subscribe({
      next: (reservations: Reservation[]) => {
        this.reservations = reservations;
        console.log("reservations par restaurant " + reservations)
      },
      error: (error) => {
        console.error('Error fetching reservations:', error);
      }
    });
  }

  getReservationsForTable(tableId: number): Reservation[] {
    // Get today's date
    const today = new Date().toISOString().split('T')[0];
  
    // Filter reservations based on table ID and today's date
    return this.reservations.filter(reservation => 
      reservation.tableRes.id === tableId && reservation.dateRes === today
    );
  }
  

   // Function to check if a date is today
   isToday(date: string): boolean {
    const today = new Date();
    const dateRes = new Date(date);
    return dateRes.toDateString() === today.toDateString();
  }
}
