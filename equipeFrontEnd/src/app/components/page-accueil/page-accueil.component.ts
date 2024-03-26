import { Component } from '@angular/core';
import { MatRippleComponent } from "../mat-ripple/mat-ripple.component";
import {MatRippleModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-accueil',
    standalone: true,
    templateUrl: './page-accueil.component.html',
    styleUrl: './page-accueil.component.scss',
    imports: [MatRippleComponent, MatRippleModule, RouterModule]
})
export class PageAccueilComponent {

}
