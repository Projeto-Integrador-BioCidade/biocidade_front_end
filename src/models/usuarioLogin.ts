export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  tipo:"VENDEDOR" | "CLIENTE";
  token: string;
}
