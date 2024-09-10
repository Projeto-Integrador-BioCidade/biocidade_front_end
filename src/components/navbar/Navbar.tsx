import { ReactNode, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbarLogo from "../../assets/navbar_logo.png";
import AuthContext from "../../contexts/AuthContext";
import {
  List,
  MagnifyingGlass,
  ShoppingCart,
  SignIn,
  SignOut,
  User,
} from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { handleLogout, usuario } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O usuário foi desconectado!", "info");
    navigate("/");
  }

  let component: ReactNode;

  component = (
    <>
      <nav className="w-full bg-bio-City-cream p-6 text-lg shadow-lg">
        <div className={`flex items-center justify-between`}>
          <Link to={"/"} className="order-2 lg:order-1">
            <img
              className={`h-[10vh] w-[10vh] rounded-full`}
              src={navbarLogo}
              alt="Logo BioCidade"
            />
          </Link>

          <div className="order-3 w-2/4 lg:w-1/4">
            <form action="" className="flex gap-3">
              <input
                type="text"
                id="pesquisa"
                name="pesquisa"
                className="w-full rounded-full border-2 border-solid p-1 transition-all duration-300 ease-in-out placeholder:px-4 placeholder:italic placeholder:text-slate-400 enabled:hover:border-gray-400"
                placeholder="Pesquisar produtos"
              />
              <button>
                <MagnifyingGlass size={20} />
              </button>
            </form>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <List
              size={28}
              color="black"
              weight={`${isOpen ? "light" : "bold"}`}
            />
          </button>

          <div
            className={`absolute left-0 top-28 z-10 rounded-lg bg-bio-City-cream shadow-lg transition-all duration-500 ease-in-out ${isOpen ? "h-[50vh]" : "h-0"} lg:relative lg:top-0 lg:order-3 lg:h-auto lg:shadow-none`}
          >
            <ul
              className={`flex flex-col gap-4 text-nowrap p-3 text-lg uppercase transition-all duration-500 ease-in-out active:*:font-bold ${isOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"} lg:pointer-events-auto lg:flex-row lg:opacity-100`}
            >
              <Link to={"/"}>
                <li className="font-semibold text-black transition-all duration-500 ease-in-out hover:text-white">
                  Home
                </li>
              </Link>
              <Link to={"/products"}>
                <li className="font-semibold text-black transition-all duration-500 ease-in-out hover:text-white">
                  Produtos
                </li>
              </Link>
              {usuario.tipo === "VENDEDOR" ? (
                <Link to="/cadproducts">
                  <li className="font-semibold text-black transition-all duration-500 ease-in-out hover:text-white">
                    Cadastrar Produtos
                  </li>
                </Link>
              ) : (
                ""
              )}
              {usuario.token === "" ? (
                <Link to={"/register"}>
                  <li className="font-semibold text-black transition-all duration-500 ease-in-out hover:text-white">
                    Cadastre-se
                  </li>
                </Link>
              ) : (
                ""
              )}
              {usuario.token === "" ? (
                <Link to={"/login"}>
                  <SignIn size={32} color="black" />
                </Link>
              ) : (
                ""
              )}

              <div className="flex items-end justify-between gap-4">
                {usuario.token !== "" ? (
                  <Link to="/cart">
                    <ShoppingCart size={32} />
                  </Link>
                ) : (
                  ""
                )}

                {usuario.token !== "" ? (
                  <Link to={"/perfil"}>
                    <User size={32} color="black" />
                  </Link>
                ) : (
                  ""
                )}

                {usuario.token !== "" ? (
                  <Link to="" onClick={logout} title="Sair">
                    <SignOut size={32} className="hover:fill-white" />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
  if (usuario.token !== "") {
    return <>{component}</>;
  } else if (pathname == "/") {
    return <>{component}</>;
  } else if (pathname == "/products") {
    return <>{component}</>;
  }
}

export default Navbar;
