import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Produit } from '../../entities/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient: HttpClient) { }

  public getAllProduits(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>('http://localhost:8080/produits/1').pipe(
      map((produits: Produit[] | null) => {
        if (produits == null) {
          return [];
        }
        console.log(produits)
        return produits;
      })
    );
  }
}
