import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TableRes } from '../entities/TableRes';

@Injectable({
  providedIn: 'root'
})
export class AccueilClientService {
  private baseUrl = 'http://localhost:8080/tableres'
  
  constructor(private http: HttpClient) {
    
   }

  getAllTables(): Observable<TableRes[]> {
    const url = `${this.baseUrl}/1/libreabsent`; // '1' le restaurant ID
    return this.http.get<TableRes[]>(url).pipe(
      map(data => {
        console.log('Data received:', data);
        return data; 
      })
    );
  }

  getTableById(id: number): Observable<TableRes> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<TableRes>(url, {});
  }

  
putTableOccupee(id: number): Observable<void> {
const url = `${this.baseUrl}/${id}/occupee`;
    return this.http.put<void>(url, {});
}


  
}