import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationCardComponent } from '../../core/components/reservation-card/reservation-card.component';

@Component({
    selector: 'app-page-reservations',
    standalone: true,
    templateUrl: './page-reservations.component.html',
    styleUrl: './page-reservations.component.scss',
    imports: [CommonModule, RouterModule, ReservationCardComponent]
})
export class PageReservationsComponent {

}