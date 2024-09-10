import { Link, useNavigate } from "react-router-dom";
import imagem from "../../assets/login.png";
import { ChangeEvent,  useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/usuarioLogin";
import AuthContext from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin,
  );

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
      <div className="flex h-[100vh] w-full items-center justify-center bg-bio-City-cream">
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <img src={imagem} className="h-[90%] w-[90%]" alt="" />
        </div>
        <div className="flex w-full items-center justify-center p-5 md:w-1/2">
          <form
            onSubmit={login}
            className="flex w-[500px] flex-col items-center justify-center gap-4 *:rounded-lg"
          >
            <h2 className="font-roboto text-5xl font-bold">Faça Login!</h2>
            <div className="flex w-full flex-col">
              <label htmlFor="usuario">E-mail</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Insira seu E-mail"
                className="h-10 rounded-lg p-2"
                value={usuarioLogin.usuario || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Insira sua senha"
                className="h-10 rounded-lg p-2"
                value={usuarioLogin.senha || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <button
              type="submit"
              className="flex h-10 w-full items-center justify-center bg-lime-500 hover:bg-lime-700"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Entrar</span>
              )}
            </button>

            <hr className="my-2 w-full border-slate-800" />

            <p>
              Ainda não tem uma conta?{" "}
              <Link
                to="/register"
                className="font-bold text-lime-800 hover:underline"
              >
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
