import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Footer() {

  const { usuario  } = useContext(AuthContext)

  let component: ReactNode;

  if( usuario.token !== ""){
    <>
      <div className="w-full flex justify-center bg-bio-City-main-green text-black">
        <div className="container flex flex-col place-items-center py-4">
          <div className="text-xl font-bold flex gap-4 py-2">
            <Link to="/Contact">Contato</Link>
            <Link to="/About">Sobre</Link>
            <Link to="/Github">Github</Link>
          </div>
          <p className="text-lg text-center p-4">BioCidade Serviços de Varejo do Brasil Ltda. | <br className="md:hidden"/>CNPJ 00.512.526/0000-03 </p>
          <div className="flex gap-2"></div>
        </div>
      </div>
    </>
  }

  return (
    <>
        {component}
    </>
  );
}

export default Footer;
