export type Root = Produit[]

export interface Produit {
  id: number
  nom: string
  description: string
  prix: number
  categorie: Categorie
  cartes: Carte[]
  quantite: number
}

export interface Categorie {
  id: number
  libelle: string
}

export interface Carte {
  id: number
  libelle: string
  restaurants: Restaurant[]
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
