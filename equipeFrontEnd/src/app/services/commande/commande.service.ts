import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { TableRes } from '../../entities/reservation';
import { Commande } from '../../entities/commande';
import { CommandeDataService } from './commande-data.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient: HttpClient, private commandeDataService: CommandeDataService) { }

  public getAllTableWithStatusOcuppe():Observable<TableRes[]>{
    return this.httpClient.get<TableRes[]>('http://localhost:8080/tableres/1/tablesOccupees').pipe(
      map((tables:TableRes[] | null)=>{
        if (tables==null){
            return[];
        }
        return tables;
      })
    )
  }

  public createCommande(id:number,data:any):Observable<Commande>{
    return this.httpClient.post<Commande>(`http://localhost:8080/commandes/cree/${id}`, data)
  }

  public updateCommande(id: number, data: any): Observable<Commande> {
    return this.httpClient.put<Commande>(`http://localhost:8080/commandes/${id}`, data)
      .pipe(
        tap((commande: Commande) => {
          // Mettre à jour les données de commande localement après avoir reçu la réponse du serveur
          this.commandeDataService.updateCommandeData(commande);
        })
      );
  }


  public updateStatusCommande(id: number): Observable<Commande> {
    return this.httpClient.put<Commande>(`http://localhost:8080/commandes/modifierTermine/${id}`, {})
    .pipe(
      tap((commande: Commande) => {
       
        this.commandeDataService.updateCommandeData(commande);
      
      }))
    }

    public updateStatusCommandePrete(id: number): Observable<Commande> {
      return this.httpClient.put<Commande>(`http://localhost:8080/commandes/modifierPrete/${id}`, {})
  }

  public updateStatusCommandeServed(id: number): Observable<Commande> {
    return this.httpClient.put<Commande>(`http://localhost:8080/commandes/modifierServie/${id}`, {})
}


  public updateStatusCommandeRegle(id: number): Observable<Commande> {
    return this.httpClient.put<Commande>(`http://localhost:8080/commandes/modifierReglee/${id}`, {})
}


    public getAllCommandeWithStatusPasse():Observable<Commande[]>{
      return this.httpClient.get<Commande[]>('http://localhost:8080/commandes/passees').pipe(
        map((commandes:Commande[] | null)=>{
          if (commandes==null){
              return[];
          }
          return commandes;
        })
      )
    }


    public getAllCommandeWithStatusPrete():Observable<Commande[]>{
      return this.httpClient.get<Commande[]>('http://localhost:8080/commandes/pret').pipe(
        map((commandes:Commande[] | null)=>{
          if (commandes==null){
              return[];
          }
          return commandes;
        })
      )
    }

    public getAllCommandeWithStatusServie():Observable<Commande[]>{
      return this.httpClient.get<Commande[]>('http://localhost:8080/commandes/servie').pipe(
        map((commandes:Commande[] | null)=>{
          if (commandes==null){
              return[];
          }
          return commandes;
        })
      )
    }

}
