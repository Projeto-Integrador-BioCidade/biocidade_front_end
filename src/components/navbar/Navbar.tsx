import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center p-6 bg-[#84CC16]">
        <div className="container flex justify-between text-lg">
          <img className="h-20 rounded-full" src="src/assets/logoBioCidade.png" alt="Logo BioCidade" />

          <div className="flex ">
            <ul className="flex items-center gap-5 font-sans ">
              <Link to={"/"}>
                <li className=" text-black hover:text-white">Home</li>
              </Link>
              <Link to={"/Products"}>
                <li className=" text-black hover:text-white">Produtos</li>
              </Link>
              <Link to={"/Services"}>
                <li className=" text-black hover:text-white">Serviços</li>
              </Link>
              <Link to={"/Categories"}>
                <li className=" text-black hover:text-white">Categoria</li>
              </Link>
              <Link to={"/Login"}>
                <li className=" text-black hover:text-white">Login</li>
              </Link>
              <Link to={"/Register"}>
                <li className=" text-black hover:text-white">Cadastre-se</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
