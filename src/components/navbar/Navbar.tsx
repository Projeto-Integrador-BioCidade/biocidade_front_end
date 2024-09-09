import { ReactNode, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import {
  List,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
  SignOut,
  User,
} from "@phosphor-icons/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { handleLogout, usuario } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado!");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <>
        <nav className="w-full bg-bio-City-footer-navbar-color p-6 text-lg">
          <div
            className={`mx-auto items-center ${isOpen ? "flex-col" : "flex md:justify-between"} justify-start`}
          >
            <div className="flex h-20 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white transition-all duration-500 ease-in-out hover:text-white focus:outline-none"
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
                  className="m-2 h-7 w-32 rounded-full border-2 border-solid border-green-400 px-2 placeholder:px-1 placeholder:italic placeholder:text-slate-400 enabled:hover:border-gray-400 sm:w-3/4 md:w-4/5 lg:w-72 xl:w-96"
                  placeholder="Pesquisar produtos"
                />
                <button>
                  <MagnifyingGlass size={20} />
                </button>
              </form>
            </div>

            <div
              className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"} `}
            >
              <ul className="flex flex-col text-nowrap font-sans text-xs md:flex-row md:items-center md:gap-3 md:text-sm lg:gap-5 lg:text-lg">
                <Link to={"/"}>
                  <li className="text-white transition-all duration-500 ease-in-out hover:text-white">
                    Home
                  </li>
                </Link>
                <Link to={"/products"}>
                  <li className="text-white transition-all duration-500 ease-in-out hover:text-white">
                    Produtos
                  </li>
                </Link>
                {usuario.tipo === "VENDEDOR" ? (
                  <Link to="/cadproducts">
                    <li className="text-white transition-all duration-500 ease-in-out hover:text-white">
                      Cadastrar Produtos
                    </li>
                  </Link>
                ) : (
                  ""
                )}

                <Link to={"/categories"}>
                  <li className="text-white transition-all duration-500 ease-in-out hover:text-white">
                    Categoria
                  </li>
                </Link>
                {usuario.token === "" ? (
                  <Link to={"/register"}>
                    <li className="text-white transition-all duration-500 ease-in-out hover:text-white">
                      Cadastre-se
                    </li>
                  </Link>
                ) : (
                  ""
                )}
                {usuario.token === "" ? (
                  <Link to={"/login"}>
                    <SignIn size={24} color="black" />
                  </Link>
                ) : (
                  ""
                )}

                {usuario.token !== "" ? (
                  <Link to="/cart">
                    <ShoppingCart size={24} />
                  </Link>
                ) : (
                  ""
                )}

                {usuario.token !== "" ? (
                  <Link to={"/perfil"}>
                    <User size={24} color="black" />
                  </Link>
                ) : (
                  ""
                )}

                {usuario.token !== "" ? (
                  <Link to="" onClick={logout} title="Sair">
                    <SignOut size={24} color="black" />
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

  return <>{component}</>;
}

export default Navbar;
