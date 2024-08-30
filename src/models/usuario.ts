import Produto from "./produto";

export interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  tipo: string;
  foto: string;
  Produto?: Produto | null;
}
