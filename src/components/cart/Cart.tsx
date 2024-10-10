import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CardCart from "./cardcart/CardCart";
import { useNavigate } from "react-router-dom";
import { LockSimple } from "@phosphor-icons/react";
import './cart.css'


function Cart() {
  const { items, quantidadeItems, valorTotal, limparCart } =
    useContext(CartContext);


  const navigate = useNavigate();

  function back() {
    navigate("/");
  }

  function handleFinalizarCompra() {
    setTimeout(() => {
      limparCart();
      back();
    }, 2000);
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-5">
        <div className="md:w-3/4 flex flex-col">
          <h2 className="text-2xl capitalize mx-8">meu carrinho</h2>
          <h2 className="my-4 text-center text-2xl">
            {items.length === 0 ? "O Carrinho está vazio!" : ""}
          </h2>
          <div className="h-[40vh] lg:h-[60vh] overflow-auto cart ml-4 border-y border-black border-opacity-40">
            {items.map((produto) => (
              <React.Fragment key={produto.id}>
                <CardCart item={produto} />
                <hr className="border-black opacity-40 mr-4" />
              </React.Fragment >
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-start text-lg w-full items-start lg:w-1/4 px-10 capitalize">
          <h2>resumo do pedido</h2>
          <hr className="border-black opacity-40 w-full" />
          <div >
            <div className="flex justify-between">
              <p className="text-black">subtotal</p>
              <span>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(valorTotal)}
              </span>
            </div>
            <p className="cursor-pointer underline text-black">estimar entrega</p>
          </div>
          <hr className="border-black opacity-40 w-full" />
          <p className="text-black">total</p>
          <button
            className="w-full p-2 rounded bg-fundo-botao-nav-cart hover:bg-hover-botao-nav-cart"
            type="submit"
            disabled={items.length === 0 ? true : false}
            onClick={handleFinalizarCompra}
          >
            Checkout
          </button>
          <div className="flex items-center justify-center text-xs gap-1 font-light">
            <LockSimple weight="fill" />
            <p className="text-black">Checkout seguro</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Cart;
