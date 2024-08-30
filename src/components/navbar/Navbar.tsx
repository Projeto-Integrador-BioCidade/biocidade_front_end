import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {

  const navigate = useNavigate();

    const {handleLogout} = useContext(AuthContext)

    function logout(){
        handleLogout();
        alert('O usuário foi desconectado!')
        navigate("/")

    }
  return (
    <>
      <div className="w-full flex justify-center p-6 bg-bio-City-main-green">
        <div className="container flex justify-between text-lg">
          <Link to={"/"}>
            <img className="h-20 rounded-full" src="src/assets/logoBioCidade.png" alt="Logo BioCidade" />
          </Link>

          <div className="flex ">
            <ul className="flex items-center gap-5 font-sans ">
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
      </div>
    </>
  );
}

export default Navbar;
