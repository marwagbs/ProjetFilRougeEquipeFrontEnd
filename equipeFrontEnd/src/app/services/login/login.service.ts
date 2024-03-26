import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../entities/user';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private static readonly _tokenStorageKey = "TOKEN_SK";
  private _isAuthenticated$ = new BehaviorSubject<boolean>(false);
 /**
   * Création d'un observable à partir du sujet privé.
   */
 public isAuthenticated$: Observable<boolean> = this._isAuthenticated$.asObservable();

 private notifyAuthenticationState(loginSuccess: boolean): void {
   this._isAuthenticated$.next(loginSuccess);
 }
  constructor( private httpClient:HttpClient , private storageService: StorageService, private router: Router) { 
    this.notifyAuthenticationState(this.isAuthenticated());
    
  }

  public login(login?:string, password?:string): Observable<User | string> {
    let params = new HttpParams()
      .set('email', login??"")
      .set('motDePasse',password??"");

    return this.httpClient.post<any>('http://localhost:8080/connexion', {}, { params }).pipe(
      map((result : User | string[]) => {
        const resultArray= Array.isArray(result);
        if( resultArray){
          return result[0];
        }
        if(result){
          this.storageService.set(LoginService._tokenStorageKey,result.token);
          this.notifyAuthenticationState(true);
        }else{
          this.storageService.delete(LoginService._tokenStorageKey);
          this.notifyAuthenticationState(false);
        }
        console.log("Token du user", result.token);
       
        return result;
      }),
      catchError(error => {
        console.error("Une erreur s'est produite lors de la connexion :", error);
        this.notifyAuthenticationState(false);
        return of(error.error[0]);
      })
    )
  }

  public isAuthenticated(): boolean {
    return this.storageService.get(LoginService._tokenStorageKey) != null;
  }

  public logout(): void {
    // TODO appeler le backend pour le déconnecter proprement
    this.storageService.delete(LoginService._tokenStorageKey);

    this.notifyAuthenticationState(false);
    this.router.navigateByUrl('/login');

  
  }
}
 

