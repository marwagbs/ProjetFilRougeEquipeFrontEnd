import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservations } from '../../entities/reservation';
import { ReservationService } from '../../services/reservation.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TimeFormatPipe } from "../../pipes/time-format.pipe";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-page-reservations',
    standalone: true,
    templateUrl: './page-reservations.component.html',
    styleUrl: './page-reservations.component.scss',
    imports: [AsyncPipe, CommonModule, TimeFormatPipe, MatButtonModule, MatDividerModule, MatIconModule]
})
export class PageReservationsComponent implements OnInit {
  reservations$!: Observable<Reservations>;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservations$ = this.reservationService.getAllReservations();
  }
}