import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { List, SignIn, SignOut } from "@phosphor-icons/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { handleLogout, usuario } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado!");
    navigate("/");
  }
  return (
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

          <div className={`w-full md:w-auto md:flex  ${isOpen ? "block" : "hidden"} `}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-3 font-sans text-xs text-nowrap md:text-sm lg:gap-5 lg:text-lg ">
              <Link to={"/"}>
                <li className=" text-black hover:text-white">Home</li>
              </Link>
              <Link to={"/products"}>
                <li className=" text-black hover:text-white">Produtos</li>
              </Link>
              <Link to="/cadproducts">
                <li className=" text-black hover:text-white">Cadastrar Produtos</li>
              </Link>
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

export default Navbar;
