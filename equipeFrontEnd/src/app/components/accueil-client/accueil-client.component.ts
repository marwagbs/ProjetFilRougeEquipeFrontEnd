import { Component, OnInit } from '@angular/core';
import { AccueilClientService } from '../../services/accueil-client.service';
import { ReservationService } from '../../services/reservation.service';
import { TableRes } from '../../entities/TableRes';
import { Reservation } from '../../entities/reservation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmPopUpComponent } from '../../core/confirm-pop-up/confirm-pop-up.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accueil-client',
  standalone: true,
  imports: [RouterModule, CommonModule, ConfirmPopUpComponent], 
  templateUrl: './accueil-client.component.html',
  styleUrls: ['./accueil-client.component.scss']
})
export class AccueilClientComponent implements OnInit {

  tables: TableRes[] = [];
  reservations: Reservation[] = [];
  nouvelleReservation?: Reservation;

  constructor(
    private accueilClientService: AccueilClientService,
    private reservationService: ReservationService,
    private modalService: NgbModal
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
 
    const today = new Date().toISOString().split('T')[0];

    return this.reservations.filter(reservation =>{
      if(reservation.tableRes){
       return reservation.tableRes.id === tableId && reservation.dateRes === today
        
      }
      return false;
      
    } 
     
     
    );
  }
  

  
   isToday(date: string): boolean {
    const today = new Date();
    const dateRes = new Date(date);
    return dateRes.toDateString() === today.toDateString();
  }

  openConfirmationDialogArrivee(reservation: Reservation): void {
    const modalRef = this.modalService.open(ConfirmPopUpComponent);
    modalRef.componentInstance.body = `Confirmer l'arrivée de ${reservation.utilisateur.nom} ${reservation.utilisateur.prenom}`;
    modalRef.componentInstance.nbrPersonnes = `${reservation.nbPersonne}` 
    modalRef.componentInstance.nombrePlacesMax = `${reservation.tableRes.nombrePlaces}`;
  
    modalRef.componentInstance.confirmClicked.subscribe(() => {
      console.log('Reservation confirmee');
      this.reservationService.putResaPresentTableOccupee(reservation.id).subscribe(() => {
        console.log('Table status updated to "occupee" for reservation:', reservation.id);
      });
      modalRef.close();
    });
  }
  
  
  openConfirmationDialogNouvelleResa(table: TableRes): void {
    const modalRef = this.modalService.open(ConfirmPopUpComponent);
    modalRef.componentInstance.header = `Attribuer table ${table.numeroTable}`;
    modalRef.componentInstance.body = `Nombre de personnes max pour cette table est ${table.nombrePlaces} personnes`;
    modalRef.componentInstance.nombrePlacesMax = `${table.nombrePlaces}`;
  
    modalRef.componentInstance.confirmClicked.subscribe(() => {
      console.log('Table attribuée');
      this.accueilClientService.putTableOccupee(table.id).subscribe(() => {
        console.log('Statut table mis à occupée');
        this.tables = this.tables.filter(t => t.id !== table.id);
      });
      modalRef.close();
    });
  }
  
 
 putTableOccupee(id: number): void {
  this.accueilClientService.putTableOccupee(id).subscribe({
    next: () => {
      console.log('Table status updated successfully.');
      const updatedTableIndex = this.tables.findIndex(t => t.id === id);
      if (updatedTableIndex !== -1) {
        this.tables[updatedTableIndex].statut = 'occupee';
      }
    },
    error: (error) => {
      console.error('Error updating table status:', error);
    }
  });
}



}