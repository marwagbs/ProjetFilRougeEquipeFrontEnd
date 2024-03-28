import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationCardComponent } from '../../core/components/reservation-card/reservation-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-reservations-acceptees',
  standalone: true,
  imports: [CommonModule, RouterModule, ReservationCardComponent, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './page-reservations-acceptees.component.html',
  styleUrl: './page-reservations-acceptees.component.scss'
})
export class PageReservationsAccepteesComponent {
  
}
