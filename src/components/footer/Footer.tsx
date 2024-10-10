import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <>
      <footer className="flex w-full flex-col items-center justify-center gap-5 bg-fundo-footer p-2 text-texto-footer">
        <div className="p-4 lg:py-10">
          <img src={logo} alt="" className="h-24 w-auto" />
        </div>
        <hr className="w-full border-white opacity-30" />
        <div className="flex w-full flex-col gap-5 px-6 text-start capitalize sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:p-20">
          <div className="">
            <h2 className="mb-4 text-2xl">contato</h2>
            <p>endereço: rua da biocidade, 2050 - bio bairro.</p>
            <p>
              são paulo - <span className="uppercase">sp</span>
            </p>
            <p>
              telefone: <span>(99) 9999-9999</span>
            </p>
            <p>
              email:{" "}
              <span className="lowercase">biocidades.projeto@gmail.com</span>
            </p>
          </div>
          <div className="hover:*:underline">
            <h2 className="mb-4 text-2xl">loja</h2>
            <Link to="/">
              <p>comprar</p>
            </Link>
            <Link to="/">
              <p>produtos biodegradaveis</p>
            </Link>
            <Link to="/">
              <p>materiais sustentaveis</p>
            </Link>
            <Link to="/">
              <p>ofertas</p>
            </Link>
            <Link to="/">
              <p>assinaturas</p>
            </Link>
            <Link to="/">
              <p>cuidados</p>
            </Link>
          </div>
          <div className="hover:*:underline">
            <h2 className="mb-4 text-2xl *:hover:underline">links úteis</h2>
            <Link to="/">
              <p className="uppercase">faq</p>
            </Link>
            <Link to="/">
              <p>entregas e devoluções</p>
            </Link>
            <Link to="/">
              <p>termos e condições</p>
            </Link>
            <Link to="/">
              <p>política e cookies</p>
            </Link>
            <Link to="/">
              <p>métodos de pagamento</p>
            </Link>
          </div>
          <div className="*:*:text-white hover:*:underline">
            <h2 className="mb-4 text-2xl">empresa</h2>
            <Link to="/about">
              <p>nossa historia</p>
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <p>contato</p>
            </Link>
            <Link to="https://linktr.ee/biocidade" target="_blank">
              <p>linktree</p>
            </Link>
          </div>
          <div className="">
            <h2 className="mb-4 text-2xl">funcionamento</h2>
            <p>seg. a sex.: 07:00 às 22:00</p>
            <p>sábado: 08:00 às 22:00</p>
            <p>domingo: 08:00 às 23:00</p>
          </div>
        </div>
        <hr className="w-full border-white opacity-30" />
      </footer>
    </>
  );
}

export default Footer;
