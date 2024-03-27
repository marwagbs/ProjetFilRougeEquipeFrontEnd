import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TableRes } from '../entities/reservation';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient: HttpClient) { }

  public getAllTableWithStatusOcuppe():Observable<TableRes[]>{
    return this.httpClient.get<TableRes[]>('http://localhost:8080/tableres/1/tablesOccupees').pipe(
      map((tables:TableRes[] | null)=>{
        if (tables==null){
            return[];
        }
        console.log(tables);
        return tables;
      })
    )
  }

  
}
