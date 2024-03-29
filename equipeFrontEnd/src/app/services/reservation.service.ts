import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Reservation, Reservations } from '../entities/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private _reservations$ = new BehaviorSubject<Reservations>([]);

  constructor(private httpClient: HttpClient) { 
    this.refreshReservations();
  }

  get reservations$(): Observable<Reservations> {
    return this._reservations$.asObservable();
  }

  private refreshReservations(): void {
    this.httpClient.get<Reservations>('http://localhost:8080/reservations/restaurant/1').subscribe(
      reservations => {
        this._reservations$.next(reservations);
      });
   }

//   getAllReservations(): Observable<Reservations> {
//     return this.httpClient.get<Reservations>('http://localhost:8080/reservations/restaurant/1');
//   }

//  getReservationsByStatutAcceptee (): Observable<Reservations> {
//   return this.httpClient.get<Reservations>('http://localhost:8080/reservations/acceptees');
//  }

//  getReservationById(id: number, reservations: Reservations): Observable<Reservation | undefined> {
//   return this.getAllReservations().pipe(map(() => reservations.find(r => r.id === id)))
//  }

 setStatutAcceptee(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setacceptee/${id}`,{}).subscribe(() => {
    this.refreshReservations();
  });
 }

 setStatutRefusee(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setrefusee/${id}`,{}).subscribe(() => {
    this.refreshReservations();
  });
 }

 setStatutPresent(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setpresent/${id}`,{}).subscribe(() => {
    this.refreshReservations();
  });
 }

 setStatutAbsent(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setabsent/${id}`,{}).subscribe(() => {
    this.refreshReservations();
  });
 }

getReservationsByRestaurant() : Observable<Reservations> {
  return this.httpClient.get<Reservations>('http://localhost:8080/reservations/restaurant/1');
  
}

putResaPresentTableOccupee(id: number): Observable<void> {
  const url = `http://localhost:8080/reservations/resaPresentTabOccupee/${id}`;
  return this.httpClient.put<void>(url, {});
}


}
