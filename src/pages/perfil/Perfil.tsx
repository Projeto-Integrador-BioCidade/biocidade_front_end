import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Pencil } from "@phosphor-icons/react";
import fotoGenerica from "../../assets/fundo_perfil.jpg"

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      navigate("/");
    }
  }, [usuario.token]);

  const [fotoPerfil, setFotoPerfil] = useState(fotoGenerica);

  useEffect(() => {
    if (usuario.foto) {
      const img = new Image();
      img.src = usuario.foto;
      img.onload = () => setFotoPerfil(usuario.foto);
      img.onerror = () => setFotoPerfil(fotoGenerica); 
    } else {
      setFotoPerfil(fotoGenerica);
    }
  }, [usuario.foto]);

  return (
    <>
      <div className="login flex flex-col items-center justify-center relative">
        <div className="flex flex-col justify-center items-center bg-white my-24 pt-20 px-5 pb-5 rounded-xl lg:w-1/3">
          <img
            className="h-28 w-28 rounded-full border-8 border-white absolute top-10"
            src={fotoPerfil}
            alt={`Foto de perfil de ${usuario.nome}`}
          />
          <div className="text-center">
            <p className="text-4xl text-black capitalize">{usuario.nome} </p>
            <p>{usuario.usuario}</p>
            <p className="my-4 text-2xl text-black">{usuario.tipo}</p>
          </div>
          <div className="grid grid-cols-3 text-center">
            <span>Posts</span>
            <span>Produtos</span>
            <span>Avaliações</span>
            <p className="">04</p>
            <p className="">15</p>
            <p className="">34</p>
          </div>
          <div className="bg-green-900 rounded-full p-1 mt-4 cursor-pointer">
            <Pencil size={24} weight="fill" color="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;




