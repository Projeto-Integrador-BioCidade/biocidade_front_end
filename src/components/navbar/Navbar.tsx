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

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <> 
        <nav className="w-full bg-bio-City-cream p-6 text-lg shadow-lg">
          <div
            className={`flex items-center justify-between`}
          >
            <Link to={"/"} className="order-2 lg:order-1">
              <img
                className={`h-[10vh] w-[10vh] rounded-full`}
                src="src/assets/navbar_logo.png"
                alt="Logo BioCidade"
              />
            </Link>

            <div className="order-3 w-2/4 lg:w-1/4">
              <form action="" className="flex gap-3">
                <input
                  type="text"
                  id="pesquisa"
                  name="pesquisa"
                  className="w-full rounded-full border-2 border-solid placeholder:px-1 placeholder:italic placeholder:text-slate-400 enabled:hover:border-gray-400"
                  placeholder="Pesquisar produtos"
                />
                <button>
                  <MagnifyingGlass size={20} />
                </button>
              </form>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              <List size={28} color="black" weight={`${isOpen ? "light" : "bold"}`} />
            </button>

            <div
              className={`absolute top-28 left-0 bg-bio-City-cream z-10 rounded-lg shadow-lg transition-all duration-500 ease-in-out ${isOpen ? "h-[50vh]" : "h-0"} 
                          lg:relative lg:top-0 lg:shadow-none lg:h-auto lg:order-3`}
            >
              <ul className={`flex flex-col text-nowrap p-3 gap-4 text-lg uppercase transition-all duration-500 ease-in-out active:*:font-bold ${isOpen ? "pointer-events-auto" : "opacity-0 pointer-events-none"}
                              lg:flex-row lg:opacity-100 lg:pointer-events-auto`}>
                <Link to={"/"}>
                  <li className="text-black font-semibold transition-all duration-500 ease-in-out hover:text-white">
                    Home
                  </li>
                </Link>
                <Link to={"/products"}>
                  <li className="text-black font-semibold transition-all duration-500 ease-in-out hover:text-white">
                    Produtos
                  </li>
                </Link>
                {usuario.tipo === "VENDEDOR" ? (
                  <Link to="/cadproducts">
                    <li className="text-black font-semibold transition-all duration-500 ease-in-out hover:text-white">
                      Cadastrar Produtos
                    </li>
                  </Link>
                ) : (
                  ""
                )}

                <Link to={"/categories"}>
                  <li className="text-black font-semibold transition-all duration-500 ease-in-out hover:text-white">
                    Categoria
                  </li>
                </Link>
                {usuario.token === "" ? (
                  <Link to={"/register"}>
                    <li className="text-black font-semibold transition-all duration-500 ease-in-out hover:text-white">
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

                <div className="flex gap-4 justify-between items-end">

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
                      <SignOut size={32} color="black" />
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
  }

  return <>{component}</>;
}

export default Navbar;
