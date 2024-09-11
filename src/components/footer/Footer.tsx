import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex w-full justify-center bg-bio-City-footer-navbar-color text-white">
        <div className="container flex flex-col place-items-center py-4">
          <div className="flex gap-4 py-2 text-xl font-bold">
            <Link to="/Contact">Contato</Link>
            <Link to="/About">Sobre</Link>
            <Link to="https://linktr.ee/biocidade" target="_blank">
              Linktree
            </Link>
          </div>
          <p className="p-4 text-center text-lg">
            BioCidade Serviços de Varejo do Brasil Ltda. |{" "}
            <br className="md:hidden" />
            CNPJ 00.000.000/0000-00{" "}
          </p>
          <div className="flex gap-2"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
