export interface Predica {
  id: string;
  titulo: string;
  pastor: string;
  fecha: string;
  descripcion: string;
  categoria: CategoriaPrediaca;
  videoId: string;
  thumbnail: string;
  duracion?: string;
  tags?: string[];
  versiculo?: string;
}

export type CategoriaPrediaca =
  | 'Palabra de Poder'
  | 'Conferencia Financiera'
  | 'Devocionales'
  | 'Escuela de Diaconado'
  | 'Escuela de Teología'
  | 'Reunión de Oración';
