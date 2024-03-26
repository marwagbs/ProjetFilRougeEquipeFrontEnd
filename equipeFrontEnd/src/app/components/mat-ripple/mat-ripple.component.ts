import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';

@Component({
  selector: 'app-mat-ripple',
  standalone: true,
  imports: [MatRippleModule, CommonModule],
  templateUrl: './mat-ripple.component.html',
  styleUrl: './mat-ripple.component.scss'
})
export class MatRippleComponent {
  @Input()
  public text?: string;
}
