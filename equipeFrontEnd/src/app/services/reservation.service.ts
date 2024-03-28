import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Reservation, Reservations } from '../entities/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private _currentReservation?: Reservation;
  private _reservations$ = new Subject<Reservations>();
  public readonly reservations$: Observable<Reservations> = this._reservations$.asObservable();
  private _reservation?: Reservation;

  public get currentReservation(): Reservation | undefined {
    return this._currentReservation;
  }

  public set currentReservation(value: Reservation) {
    this._currentReservation = value;
  }

  constructor(private httpClient: HttpClient) { }

  getAllReservations(): Observable<Reservations> {
    return this.httpClient.get<Reservations>('http://localhost:8080/reservations/restaurant/1');
  }

 getReservationsByStatutAcceptee (): Observable<Reservations> {
  return this.httpClient.get<Reservations>('http://localhost:8080/reservations/acceptees');
 }

 getReservationById(id: number, reservations: Reservations): Observable<Reservation | undefined> {
  return this.getAllReservations().pipe(map(() => reservations.find(r => r.id === id)))
 }

 setStatutAcceptee(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setacceptee/${id}`,{}).subscribe();
 }

 setStatutRefusee(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setrefusee/${id}`,{}).subscribe();
 }

 setStatutPresent(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setpresent/${id}`,{}).subscribe();
 }

 setStatutAbsent(id: number, data: any): void {
  this.httpClient.put<Reservation>(`http://localhost:8080/reservations/setabsent/${id}`,{}).subscribe();
 }

//  modifStatut(id: number, statut: 'acceptée' | 'refusée') {
//   statut === undefined ? this.currentReservation?.statut === 'acceptée' : this.currentReservation?.statut === 'refusée';
//   return this.httpClient.patch;
//  }


getReservationsByRestaurant() : Observable<Reservations> {
  return this.httpClient.get<Reservations>('http://localhost:8080/reservations/restaurant/1');
  
}

}
