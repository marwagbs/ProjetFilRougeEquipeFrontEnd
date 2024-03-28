import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableRes } from '../entities/TableRes';

@Injectable({
  providedIn: 'root'
})
export class AccueilClientService {

  private baseUrl = 'http://localhost:8080/tableres/1/tablesLibresEtReservees';

  constructor(private http: HttpClient) {
    
   }

  getAllTables(): Observable<TableRes[]> {
    return this.http.get<TableRes[]>(this.baseUrl).pipe(
      map(data => {
        console.log('Data received:', data);
        return data; // Return the data as is
      })
    );
  }

  getTableById(id: number): Observable<TableRes> {
    return this.http.get<TableRes>(`${this.baseUrl}/${id}`);
  }

  

}
