import { ReactNode, useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import {
  CaretRight,
  Heart,
  List,
  MagnifyingGlass,
  Package,
  ShoppingCart,
  SignOut,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { CartContext } from "../../contexts/CartContext";
import CardCart from "../cart/cardcart/CardCart";

function Navbar() {

  const { items, quantidadeItems, valorTotal, limparCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { handleLogout, usuario } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [menuPerfil, setMenuPerfil] = useState(false);
  const [asideCart, setAsideCart] = useState(false);

  const handleMouseEnter = () => {
    setMenuPerfil(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMenuPerfil(false);
    }, 1000);
  };

  function logout() {
    handleLogout();
    ToastAlerta("O usuário foi desconectado!", "info");
    navigate("/");
  }

  const activeAsideCart = () => {
    setMenuPerfil(false)
    setIsOpen(false)
    setAsideCart(true)
  }

  useEffect(() => {
    setMenuPerfil(false)
  }, [location.pathname])

  let component: ReactNode;

  component = (
    <>
      <nav className="w-full h-20 bg-fundo-nav px-6 text-lg flex items-center justify-between">
        <div className="w-1/2 ">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <List size={28} color="black" weight={`${isOpen ? "light" : "bold"}`} />
          </button>
          <div className={`
          transition-all duration-300 ease-in-out absolute left-0 top-20 lg:static rounded-b-lg lg:flex 
          ${isOpen ? "  opacity-100 shadow-xl border border-opacity-10 border-black"
              : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"} 
            px-8 min-h-35 z-10 py-5 lg:py-0 bg-fundo-nav w-1/2 md:w-auto
          } `}>
            <div className={`flex flex-col lg:flex-row gap-5 lg:gap-4 hover:*:underline capitalize text-start`}>
              <Link to={"/"}>
                <p>home</p>
              </Link>
              <Link to={"/products"}>
                <p>loja</p>
              </Link>
              <Link to={"/about"}>
                <p>sobre</p>
              </Link>
              <Link to={"/"}>
                <p>blog</p>
              </Link>
              <form action="" className="lg:hidden flex items-center border-b-[1px] border-b-black">
                <MagnifyingGlass size={24} weight="thin" />
                <input
                  type="text"
                  id="pesquisa"
                  name="pesquisa"
                  className="w-1/2 outline-none bg-transparent focus:border-none placeholder:capitalize"
                  placeholder="buscar"
                />
              </form>
            </div>
          </div>
        </div>
        <div className=" flex justify-center order-2">
          <Link to={"/"} className="border-2 border-black uppercase font-bold px-2 py-1">
            <h2>biocidade</h2>
          </Link>
        </div>

        <div className="flex items-center gap-8 w-1/2 justify-end order-3">
          <form action="" className="hidden lg:flex items-center border-b-[1px] border-b-black lg:mr-20">
            <MagnifyingGlass size={24} weight="thin" />
            <input
              type="text"
              id="pesquisa"
              name="pesquisa"
              className="w-1/2 outline-none bg-transparent focus:border-none placeholder:capitalize"
              placeholder="buscar"
            />
          </form>

          <div onMouseOver={handleMouseEnter}>
            <UserCircle className="cursor-pointer" size={28} weight="fill" onClick={() => setMenuPerfil(!menuPerfil)} />

            <div
              className={`transition-all duration-200 ease-in-out transform 
      ${menuPerfil ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} 
      absolute right-0 top-20 px-8 min-h-35 z-10 pb-7 bg-fundo-nav shadow-xl border border-opacity-10 border-black
      text-center flex flex-col justify-center rounded-b-lg w-1/2 md:w-auto`}
              onMouseLeave={handleMouseLeave}>
              {usuario.token ? (
                <div className="capitalize flex flex-col items-start">
                  <div className="flex items-center justify-start gap-2">
                    <div className="w-[24px]" />
                    <p>Olá, {usuario.nome}</p>
                  </div>
                  <Link className="flex items-center justify-start gap-2 hover:underline" to="/perfil">
                    <User size={24} weight="thin" />
                    <p>Minha conta</p>
                  </Link>
                  <Link className="flex items-center justify-start gap-2 hover:underline" to="/pedidos">
                    <Package size={24} weight="thin" />
                    <p>Pedidos</p>
                  </Link>
                  <Link className="flex items-center justify-start gap-2 hover:underline" to="/favoritos">
                    <Heart size={24} weight="thin" />
                    <p>Desejos</p>
                  </Link>
                  <Link className="flex items-center justify-start gap-2 hover:underline" to="/" onClick={logout}>
                    <SignOut size={24} weight="thin" />
                    <p>Sair</p>
                  </Link>
                </div>
              ) : (
                <div className="capitalize pt-3">
                  <div className="border-[1px] bg-fundo-botao rounded-lg">
                    <Link className="hover:underline" to="/login">
                      <p>Login</p>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <hr className="border-gray-700 border-t-[1px] w-1/2" />
                    <p className="mx-1 text-gray-700">ou</p>
                    <hr className="border-gray-700 border-t-[1px] w-1/2" />
                  </div>
                  <Link className="hover:underline" to="/register">
                    <p>Cadastre-se</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <ShoppingCart onClick={activeAsideCart} className="cursor-pointer " size={28} />
        </div>
      </nav>


      <div className={`bg-fundo-nav fixed lg:w-1/3 h-screen z-10 top-0 right-0 shadow-2xl transition-all duration-300 ease-in-out ${asideCart ? "w-full opacity-100" : "w-0 opacity-0 pointer-events-none"}`}>
        <div className="grid grid-cols-3 gap-[30%] justify-center items-center w-full h-[10%] bg-black text-white px-10">
          <CaretRight onClick={() => setAsideCart(false)} className="w-auto cursor-pointer" size={30} />
          <h2 className="text-2xl capitalize">carrinho</h2>
        </div>
        <div className="overflow-y-auto h-[65%]">
          {items.map((produto) => (
            <CardCart key={produto.id} item={produto} />
          ))}
        </div>
        <div className="flex flex-col items-start justify-center p-5 w-full">
          <p className="text-3xl capitalize mb-3">
            subtotal:
          </p>
          <span className="text-3xl">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(valorTotal)}
          </span>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="bg-fundo-botao hover:bg-hover-botao w-10/12 py-4 text-3xl rounded shadow-md capitalize">ver carrinho</button>
        </div>
      </div>
    </>
  );
  if (usuario.token !== "") {
    return <>{component}</>;
  } else if (pathname == "/") {
    return <>{component}</>;
  } else if (pathname == "/products") {
    return <>{component}</>;
  } else if (pathname == "/about") {
    return <>{component}</>;
  }else if (pathname == "/contact") {
    return <>{component}</>;
  }
}

export default Navbar;
