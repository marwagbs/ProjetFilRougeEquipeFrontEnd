import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../entities/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [AlertComponent, CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  public user?:User;
  public login?: string;
  public password?: string;
  public authenticationResult?:  string;

  constructor(private loginService: LoginService, private router:Router){
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['/accueil-employe']);
    }
  }


  public submit(){
    this.loginService.login(this.login, this.password).subscribe((loginSuccess:User | string)=>{
      if (typeof loginSuccess === 'string') {
       
        this.authenticationResult = loginSuccess; 
      } else {
        
        this.authenticationResult = "Authentification réussi";
        this.router.navigate(['/accueil-employe']);
       
      }
      console.log(this.authenticationResult);
    });
  }
}
