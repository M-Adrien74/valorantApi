// Utilisation de la genericit√© avec le tableau de T. Data est le tab dans l'API.
export interface Json<T> {
  data: T[];
}
