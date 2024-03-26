import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Observable } from 'rxjs';
import { LoginService } from './services/login/login.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'equipeFrontEnd';
  public isAuthenticated$: Observable<boolean>;
  constructor(private loginService:LoginService){
    this.isAuthenticated$=this.loginService.isAuthenticated$;
  }
  

}
