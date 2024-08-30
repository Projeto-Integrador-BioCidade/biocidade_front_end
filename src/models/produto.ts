import Categoria from "./categoria";
import Usuario from "./usuario";

export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  cartegoria: Categoria | null;
  usuario: Usuario | null;
}
