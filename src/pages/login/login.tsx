import { Link, useNavigate } from "react-router-dom";
import imagem from "../../assets/biocidade_bg.png";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/usuarioLogin";
import AuthContext from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="w-full flex items-center justify-center h-[75vh]">
        <div className=" hidden w-1/2 md:flex items-center justify-center ">
          <img src={imagem} className="h-full" alt="" />
        </div>
        <div className="flex w-full items-center justify-center p-5 md:w-1/2">
          <form onSubmit={login} className="w-[500px] *:rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-5xl font-roboto font-bold">Faça Login!</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">E-mail</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Insira seu E-mail"
                className="bg-lime-300 h-10 p-2 rounded-lg"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Insira sua senha"
                className="bg-lime-300 h-10 p-2 rounded-lg"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <button type="submit" className="bg-lime-500 mt-10 w-full h-10 flex justify-center items-center hover:bg-lime-700 ">
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Entrar</span>}
            </button>

            <hr className="border-slate-800 w-full my-2" />

            <p>
              Ainda não tem uma conta?{" "}
              <Link to="/register" className="text-lime-800 font-bold     hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default login;
