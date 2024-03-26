export type Reservations = Reservation[]

export interface Reservation {
  id: number
  dateRes: string
  heure: string
  nbPersonne: number
  statut: string
  commentaire?: string
  utilisateur: Utilisateur
  restaurant: Restaurant
  tableRes: TableRes
}

export interface Utilisateur {
  id: number
  nom: string
  prenom: string
  email: string
  motDePasse: string
  telephone: string
  token: any
  tempsExpiration: any
  role: any
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

export interface TableRes {
  id: number
  nombrePlaces: number
  numeroTable: number
  statut: string
  restaurant: Restaurant2
}

export interface Restaurant2 {
  id: number
  nom: string
  adresse: string
  cpo: string
  ville: string
  horaire: Horaire2[]
}

export interface Horaire2 {
  id: number
  jour: string
  heureOuverture: string
  heureFermeture: string
}
