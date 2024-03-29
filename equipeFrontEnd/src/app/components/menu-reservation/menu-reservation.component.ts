import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatRippleComponent } from '../../core/components/mat-ripple/mat-ripple.component';

@Component({
  selector: 'app-menu-reservation',
  standalone: true,
  imports: [MatRippleComponent, MatRippleModule, RouterModule],
  templateUrl: './menu-reservation.component.html',
  styleUrl: './menu-reservation.component.scss'
})
export class MenuReservationComponent {

}
