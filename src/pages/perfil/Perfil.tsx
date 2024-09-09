import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="container m-4 mx-auto overflow-hidden rounded-2xl bg-bio-City-cream">
      <img
        className="h-80 w-full border-b-8 border-white object-cover"
        src="src/assets/bio_cidade.jpeg"
        alt="Capa do Perfil"
      />

      <img
        className="relative z-10 mx-auto mt-[-8rem] h-52 w-52 rounded-full border-8 border-bio-City-main-green"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />

      <div className="relative flex h-60 flex-col items-center justify-center text-2xl">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
        <p>Tipo de Usuário: {usuario.tipo}</p>
      </div>
    </div>
  );
}

export default Perfil;
