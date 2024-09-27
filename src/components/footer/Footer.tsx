import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center w-full bg-fundo-footer text-texto-footer gap-5 p-2">
        <div className="p-4 lg:py-10">
          <img src={logo} alt="" className="w-auto h-24" />
        </div>
        <hr className="w-full border-white opacity-30" />
        <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-5 text-start capitalize px-6 lg:p-20">
          <div className="">
            <h2 className="text-2xl mb-4">contato</h2>
            <p>endereço: rua da biocidade, 2050 - bio bairro.</p>
            <p>são paulo - <span className="uppercase">sp</span></p>
            <p>telefone: <span>(99) 9999-9999</span></p>
            <p>email: <span className="lowercase">biocidades.projeto@gmail.com</span></p>
          </div>
          <div className="hover:*:underline">
            <h2 className="text-2xl mb-4">loja</h2>
            <Link to="/404"><p>comprar</p></Link>
            <Link to="/404"><p>produtos biodegradaveis</p></Link>
            <Link to="/404"><p>materiais sustentaveis</p></Link>
            <Link to="/404"><p>ofertas</p></Link>
            <Link to="/404"><p>assinaturas</p></Link>
            <Link to="/404"><p>cuidados</p></Link>
          </div>
          <div className="hover:*:underline">
            <h2 className="text-2xl mb-4 *:hover:underline">links úteis</h2>
            <Link to="/404"><span className="uppercase">faq</span></Link>
            <Link to="/404"><p>entregas e devoluções</p></Link>
            <Link to="/404"><p>termos e condições</p></Link>
            <Link to="/404"><p>política e cookies</p></Link>
            <Link to="/404"><p>métodos de pagamento</p></Link>
          </div>
          <div className="hover:*:underline">
            <h2 className="text-2xl mb-4 ">empresa</h2>
            <Link to="/about"><p>nossa historia</p></Link>
            <Link to="/contact"><p>contato</p></Link>
            <Link to="https://linktr.ee/biocidade" target="_blank"><p>linktree</p></Link>
          </div>
          <div className="">
            <h2 className="text-2xl mb-4">funcionamento</h2>
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
