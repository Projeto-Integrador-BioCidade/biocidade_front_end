import Produto from "./produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  tipo: string;
  foto: string;
  produto?: Produto | null;
}
