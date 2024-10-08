import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Pencil } from "@phosphor-icons/react";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="login flex items-center justify-center">
      <div
        className="md:h-[70%] h-[75%] md:mt-[7%] mt-[15%] md:w-[45%] w-[80%] rounded-3xl bg-white">
      </div>
      <img
        className="relative z-10 mx-auto md:mt-[-28rem] mt-[-30rem] md:h-48 md:w-48 h-36 w-36 rounded-full border-8 border-white"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />
      <div className="relative mt-[-5rem] md:mb-[-30px]  md:mt-[-4rem] h-52 flex flex-col text-2xl items-center justify-center ">
        <p className="text-4xl mt-20 md:mt-5">{usuario.nome} </p>
        <p>{usuario.usuario}</p>
        <p className="text-xl mt-6 md:mt-3 text-login-botao font-bold">{usuario.tipo}</p>
      </div>
      <div className="flex mt-8 md:mt-2 ml-8 md:ml-8 md:gap-20 gap-11 flex-row">
        <div>
        <p className="ml-1 md:text-3xl text-login-botao font-bold">04</p>
        <span>Posts</span>
        </div>
        <div>
        <p className="ml-4 md:text-3xl text-login-botao font-bold">15</p>
        <span>Produtos</span>
        </div>
        <div>
        <p className="ml-4 md:text-3xl text-login-botao font-bold">34</p>
        <span>Avaliações</span>
        </div>
      </div>
      <div className="my-10 md:my-6 bg-login-botao rounded-full p-2">
        <a href=""><Pencil size={24} color="white" /></a>
      </div>
    </div>
  );
}

export default Perfil;




