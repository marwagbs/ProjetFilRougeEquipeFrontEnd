export interface Commande {
    id: number
    statut: string
    heure: string
    tableRes: TableRes
    produits: any
    total: any
  }
  
  export interface TableRes {
    id: number
    nombrePlaces: number
    numeroTable: number
    statut: string
    restaurant: Restaurant
  }
  
  export interface Restaurant {
    id: number
    nom: string
    adresse: string
    cpo: string
    ville: string
    horaire: Horaire[]
  }
  
  export interface Horaire {
    id: number
    jour: string
    heureOuverture: string
    heureFermeture: string
  }