import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { DotsThreeVertical, List } from "@phosphor-icons/react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout();
    alert('O usuário foi desconectado!')
    navigate("/")

  }
  return (
    <>
      <nav className="w-full p-6 bg-bio-City-main-green text-lg">
        <div className={`mx-auto items-center ${isOpen? "flex-col " : "flex justify-between "} `}>
          <div className="flex md:hidden h-20">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-white focus:outline-none ">
              {isOpen ? <List size={28} color="gray" /> : <List size={28} color="black"/>}
            </button>
          </div>
          <Link to={"/"}>
            <img className={`h-20 rounded-full mx-4 ${isOpen ? "hidden" : "block"}`} src="src/assets/logoBioCidade.png" alt="Logo BioCidade" />
          </Link>
        

          <div className={`w-full md:w-auto md:flex  ${isOpen ? "block" : "hidden"} `}>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-5 font-sans ">
              <Link to={"/"}>
                <li className=" text-black hover:text-white">Home</li>
              </Link>
              <Link to={"/products"}>
                <li className=" text-black hover:text-white">Produtos</li>
              </Link>
              <Link to={"/services"}>
                <li className=" text-black hover:text-white">Serviços</li>
              </Link>
              <Link to={"/categories"}>
                <li className=" text-black hover:text-white">Categoria</li>
              </Link>
              <Link to={"/login"}>
                <li className=" text-black hover:text-white">Login</li>
              </Link>
              <Link to={"/register"}>
                <li className=" text-black hover:text-white">Cadastre-se</li>
              </Link>
              <Link to='' onClick={logout}>
                <li className=" text-black hover:text-white">Sair</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
