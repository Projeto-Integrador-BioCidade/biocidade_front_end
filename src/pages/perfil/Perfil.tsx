import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import imagem from "../../assets/bio_cidade.jpeg"

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto overflow-hidden rounded-2xl bg-bio-City-cream pb-6">
      <img
        className="h-80 w-full object-cover"
        src={imagem}
        alt="Capa do Perfil"
      />

      <img
        className="relative z-10 mx-auto mt-[-8rem] h-52 w-52 rounded-full border-8 border-white"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />

      <div className="relative mt-[-6rem] h-72 flex flex-col bg-bio-City-light-green text-white font-bold text-2xl items-center justify-center border-white border-t-8 ">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
        <p>Tipo de Usuário: {usuario.tipo}</p>
      </div>
    </div>
  );
}

export default Perfil;




