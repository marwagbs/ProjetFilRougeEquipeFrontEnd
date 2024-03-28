import { Injectable } from '@angular/core';
import { Commande } from '../../entities/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeDataService {
  public commandeData: Commande | null = null;
  constructor() { }

  public setCommandeData(commande: Commande): void {
    this.commandeData = commande;
  }

  public getCommandeData(): Commande | null {
    return this.commandeData;
  }
  public updateCommandeData(commande: Commande): void {
    if (this.commandeData) {
      this.commandeData = { ...this.commandeData, ...commande };
    }
  }
}
