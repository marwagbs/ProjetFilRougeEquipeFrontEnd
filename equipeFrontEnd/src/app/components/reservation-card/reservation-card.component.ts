import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Reservation, Reservations } from '../../entities/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [AsyncPipe, CommonModule, TimeFormatPipe, MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.scss'
})
export class ReservationCardComponent implements OnInit {
  reservations$!: Observable<Reservations>;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservations$ = this.reservationService.reservations$.pipe(map(arr => {
        return arr.sort((a, b) => (a.dateRes).localeCompare(b.dateRes));
      })
      );
  }

  onStatutAcceptee(id: number): void {
      this.reservationService.setStatutAcceptee(id, "");
  }

  onStatutRefusee(id: number): void {
    this.reservationService.setStatutRefusee(id, "");
  }

  onStatutPresent(id: number): void {
    this.reservationService.setStatutPresent(id, "");
  }

  onStatutAbsent(id: number): void {
    this.reservationService.setStatutAbsent(id, "");
  }

  @Input()
  public status?: string | undefined;

  @Input()
  public btnstyle?: string;

  @Input()
  public firstbtn?: string;

  @Input()
  public secondbtn?: string;

  @Input()
  public navbtn?: string;

  @Input()
  public navlink?: string;
}
