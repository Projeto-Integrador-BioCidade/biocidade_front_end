import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/usuarioLogin";
import AuthContext from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import { LockKey, SignIn, User, UserPlus } from "@phosphor-icons/react";

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
      <div className="login flex h-screen w-full  items-center justify-center">
        <div className="flex border-2 flex-col bg-fundo-botao-nav-cart  rounded-2xl w-96 items-center justify-center pb-3 md:pb-5 md:w-96 shadow-[10px_10px_10px_5px_rgba(0,0,0,0.75)] ">
          <div className="flex gap-20 rounded-t-lg items-center">
            <div className="w-36 flex ">
              <Link to="/login" className="flex  gap-2 px-14  py-4 font-semibold text-black bg-login-input rounded-tl-xl rounded-br-xl shadow-lg transition-shadow duration-300 ease-in-out"> <SignIn size={24} />
                Login
              </Link>
            </div>
            <div>
              <Link to="/register" className=" mr-11 text-verde-um  flex items-center gap-1"> <UserPlus size={24} className="text-gray-600" />
                Cadastre-se
              </Link>
            </div>
          </div>
          <form
            onSubmit={login}
            className="flex w-[500px] flex-col items-center justify-center gap-4 ">

            <div className="rounded-full m-9 w-20 flex justify-center items-center h-20 bg-login-input p-2 shadow-md">
              <User size={50} className="text-gray-500 " />
            </div>

            <div className="flex w-80 flex-col space-y-4">
              <div className="relative">
                <label className="font-bold" htmlFor="usuario"></label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="E-mail"
                  className="h-12 w-full pl-12 bg-login-input border rounded placeholder-black border-gray-300  focus:outline-none focus:ring-2 focus:ring-login-botao"
                  value={usuarioLogin.usuario || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <div className="absolute inset-y-0 pr-2 flex items-center">
                  <User size={22} className="flex ml-3" />
                </div>
              </div>

              <div className="flex w-80 flex-col">
                <div className="relative">
                  <label className="font-bold" htmlFor="senha"></label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="h-12 w-full pl-12 bg-login-input border placeholder-black border-gray-300 rounded  focus:outline-none focus:ring-2 focus:ring-login-botao"
                    value={usuarioLogin.senha || ""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                  <div className="absolute inset-y-0 pr-2 flex items-center">
                    <LockKey size={22} className="flex ml-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 pb-4 pt-4 items-center">
              <input readOnly type="checkbox" id="lembrarSenha" checked className="h-4 w-4 accent-login-botao" />
              <label htmlFor="lembrarSenha" className="text-white">Lembrar Senha</label>
              <a className="text-gray-600 ml-16 hover:underline" href="#">Esqueceu a senha? </a>
            </div>

            <button
              type="submit"
              className="flex h-12 w-80 items-center  justify-center text-white bg-login-botao hover:bg-verde-dois rounded shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
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
                <span>LOGIN</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default login;
