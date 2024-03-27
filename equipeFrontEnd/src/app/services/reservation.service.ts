import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservations } from '../entities/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  getAllReservations(): Observable<Reservations> {
    return this.httpClient.get<Reservations>('http://localhost:8080/reservations/restaurant/1');
  }

}
