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
import NavCard from "../cart/NavCard";

function Navbar() {

  const { items, valorTotal } = useContext(CartContext);
  const navigate = useNavigate();
  // const { pathname } = useLocation();
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

  // let component: ReactNode;

  return (
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
              <Link to={"/blog"}>
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
      absolute right-0 top-20 min-h-35 z-10 pb-7 bg-fundo-nav shadow-xl border border-opacity-10 border-black
      text-center flex flex-col justify-center rounded-b-lg w-1/2 md:w-auto`}
              onMouseLeave={handleMouseLeave}>
              {usuario.token ? (
                <>
                <div className="flex pl-8 py-2 items-center border-b-[1px] border-gray-400">
                    <div className="">
                    <img className="w-[30px] h-[30px] rounded-full" src={usuario.foto} alt="" />
                    </div>
                    <p className="pl-5">Olá, {usuario.nome}</p>
                  </div>
                <div className="capitalize flex px-8 pt-3 flex-col items-start">
                  <Link className="flex items-center  justify-start gap-2 hover:underline" to="/perfil">
                    <User size={24} weight="thin" />
                    <p className="md:pl-3 pl-1">Minha conta</p>
                  </Link>
                  <Link className="flex items-center justify-start gap-2 hover:underline" to="/pedidos">
                    <Package size={24} weight="thin" />
                    <p className="pl-3">Pedidos</p>
                  </Link>
                  <Link className="flex items-center justify-start gap-2 hover:underline" to="/favoritos">
                    <Heart size={24} weight="thin" />
                    <p className="pl-3">Desejos</p>
                  </Link>
                  <Link className="flex items-center justify-start gap-2 hover:underline" to="/" onClick={logout}>
                    <SignOut size={24} weight="thin" />
                    <p className="pl-3">Sair</p>
                  </Link>
                </div>
                </>
              ) : (
                <div className="capitalize px-8 pt-3">
                  <div className="border-[1px] bg-fundo-botao-nav-cart rounded-lg">
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


      <div className={`bg-fundo-nav-cart flex flex-col items-center justify-between fixed lg:w-1/3 h-screen z-10 top-0 right-0 shadow-2xl transition-all duration-300 ease-in-out ${asideCart ? "w-full opacity-100" : "w-0 opacity-0 pointer-events-none"}`}>
        <div className="grid grid-cols-3 gap-[30%] justify-center items-center w-full h-20 bg-black text-white px-10">
          <CaretRight onClick={() => setAsideCart(false)} className="w-auto cursor-pointer" size={30} />
          <h2 className="text-2xl capitalize">carrinho</h2>
        </div>
        <div className="flex flex-col gap-10 overflow-y-auto h-[60vh] w-9/12 mt-3">
          {items.map((produto) => (
            <NavCard key={produto.id} item={produto} />
          ))}
          {items.map((produto) => (
            <NavCard key={produto.id} item={produto} />
          ))}
        </div>
        <div className="flex flex-col justify-end w-full text-2xl gap-5 pb-5">
          <div className="flex flex-col items-start justify-center px-10 mb-3 w-full">
            <p className=" capitalize">
              subtotal:
            </p>
            <p className="font-bold">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(valorTotal)}
            </p>
          </div>
          <hr className="border-black opacity-40"/>
          <div className="flex items-center justify-center w-full">
            <Link to={"/cart"} onClick={() => setAsideCart(false)} className="bg-fundo-botao-nav-cart hover:bg-hover-botao-nav-cart w-9/12 py-2  text-xl rounded shadow-md capitalize text-center">ver carrinho</Link>
          </div>
        </div>
      </div>
    </>
  );
  // if (usuario.token !== "") {
  //   return <>{component}</>;
  // } else if (pathname == "/") {
  //   return <>{component}</>;
  // } else if (pathname == "/products") {
  //   return <>{component}</>;
  // } else if (pathname == "/about") {
  //   return <>{component}</>;
  // }else if (pathname == "/contact" || pathname == "/cart") {
  //   return <>{component}</>;
  // }else if (pathname == "/blog") {
  //   return <>{component}</>;
  // }
}

export default Navbar;
