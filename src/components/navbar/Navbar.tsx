import { ReactNode, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { List, MagnifyingGlass, ShoppingCart, SignIn, SignOut, User } from "@phosphor-icons/react";

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

  if( usuario.token !== "" ){
    component = (
    <>
      <nav className="w-full p-6 bg-bio-City-main-green text-lg">
        <div className={`mx-auto items-center ${isOpen ? "flex-col " : "flex justify-between "} `}>
          <div className="flex md:hidden h-20">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-white focus:outline-none ">
              {isOpen ? <List size={28} color="gray" /> : <List size={28} color="black" />}
            </button>
          </div>
          <Link to={"/"}>
            <img className={`h-20 rounded-full mx-4 ${isOpen ? "hidden" : "block"}`} src="src/assets/logoBioCidade.png" alt="Logo BioCidade" />
          </Link>

          <div>
            <form action="" className="flex">
              <input type="text" id="pesquisa" name="pesquisa" className="px-2 w-96 h-7 placeholder:italic placeholder:text-slate-400 placeholder:px-1 border-solid border-2 border-green-400 rounded-full m-2 enabled:hover:border-gray-400 sm:text-sm" placeholder="Pesquisar produtos" />
              <button><MagnifyingGlass size={20} /></button>
            </form>
          </div>

          <div className={`w-full md:w-auto md:flex  ${isOpen ? "block" : "hidden"} `}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-3 font-sans text-xs text-nowrap md:text-sm lg:gap-5 lg:text-lg ">
              <Link to={"/"}>
                <li className=" text-black hover:text-white">Home</li>
              </Link>
              <Link to={"/products"}>
                <li className=" text-black hover:text-white">Produtos</li>
              </Link>
              {usuario.tipo === 'VENDEDOR' ? (
                <Link to="/cadproducts">
                  <li className=" text-black hover:text-white">Cadastrar Produtos</li>
                </Link>
              ) : (
                ""
              )}

              <Link to={"/categories"}>
                <li className=" text-black hover:text-white">Categoria</li>
              </Link>
              {usuario.token === "" ? (
                <Link to={"/register"}>
                  <li className=" text-black hover:text-white">Cadastre-se</li>
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
                <Link to='/cart'><ShoppingCart size={24} /></Link>
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
    )
  }

  return (
    <>
      { component }
    </>
  );
}

export default Navbar;