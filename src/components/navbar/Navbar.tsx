import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import {
  List,
  MagnifyingGlass,
  SignIn,
  SignOut,
  User,
} from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { handleLogout, usuario } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O usuário foi desconectado!", "info");
    navigate("/");
  }

  return (
    <>
      <nav className="w-full bg-bio-City-cream p-6 text-lg">
        <div
          className={`mx-auto items-center ${isOpen ? "flex-col" : "flex justify-between"} `}
        >
          <div className="flex h-20 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black transition-all duration-500 ease-in-out hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <List size={28} color="gray" />
              ) : (
                <List size={28} color="black" />
              )}
            </button>
          </div>
          <Link to={"/"}>
            <img
              className={`mx-4 h-20 rounded-full ${isOpen ? "hidden" : "block"}`}
              src="src/assets/logoBioCidade.png"
              alt="Logo BioCidade"
            />
          </Link>

          <div>
            <form action="" className="flex">
              <input
                type="text"
                id="pesquisa"
                name="pesquisa"
                className="m-2 h-7 w-96 rounded-full border-2 border-solid border-bio-City-footer-navbar-color px-2 placeholder:px-1 placeholder:italic placeholder:text-slate-400 enabled:hover:border-gray-400 sm:text-sm"
                placeholder="Pesquisar produtos"
              />
              {/* //TODO: descobrir como aplicar transição de cor no ícone */}
              <button>
                <MagnifyingGlass size={20} color="black" />
              </button>
            </form>
          </div>

          <div
            className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"} `}
          >
            <ul className="flex flex-col text-nowrap font-sans text-xs font-bold md:flex-row md:items-center md:gap-3 md:text-sm lg:gap-5 lg:text-lg">
              <Link to={"/"}>
                <li className="text-black transition-all duration-500 ease-in-out hover:text-white">
                  Home
                </li>
              </Link>
              <Link to={"/products"}>
                <li className="text-black transition-all duration-500 ease-in-out hover:text-white">
                  Produtos
                </li>
              </Link>
              {usuario.tipo === "VENDEDOR" ? (
                <Link to="/cadproducts">
                  <li className="text-black transition-all duration-500 ease-in-out hover:text-white">
                    Cadastrar Produtos
                  </li>
                </Link>
              ) : (
                ""
              )}

              <Link to={"/categories"} title="Categorias">
                <li className="text-black transition-all duration-500 ease-in-out hover:text-white">
                  Categoria
                </li>
              </Link>
              {usuario.token === "" ? (
                <Link to={"/register"} title="Cadastre-se">
                  <li className="text-black transition-all duration-500 ease-in-out hover:text-white">
                    Cadastre-se
                  </li>
                </Link>
              ) : (
                ""
              )}
              {usuario.token === "" ? (
                <Link to={"/login"}>
                  {/* //TODO: descobrir como aplicar transição de cor no ícone */}
                  <SignIn size={24} color="black" alt="Login" />
                </Link>
              ) : (
                ""
              )}

              {usuario.token !== "" ? (
                <Link to={"/perfil"}>
                  {/* //TODO: descobrir como aplicar transição de cor no ícone */}
                  <User size={24} color="black" alt="Perfil de usuário" />
                </Link>
              ) : (
                ""
              )}

              {usuario.token !== "" ? (
                <Link to="" onClick={logout} title="Sair">
                  {/* //TODO: descobrir como aplicar transição de cor no ícone */}
                  <SignOut size={24} color="black" alt="Sair" />
                </Link>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
