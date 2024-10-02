import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CardCart from "./cardcart/CardCart";
import { useNavigate } from "react-router-dom";


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
      <div className="flex flex-col lg:flex-row justify-between items-center p-10">
        <div className="md:w-3/4">
          <h2 className="text-2xl capitalize">meu carrinho</h2>
          <h2 className="my-4 text-center text-2xl">
            {items.length === 0 ? "O Carrinho está vazio!" : ""}
          </h2>
          <div className="border-y border-black border-opacity-40">
            {items.map((produto) => (
              <CardCart key={produto.id} item={produto} />
            ))}
          </div>
        </div>
        <div className="text-center text-lg md:w-1/4 px-10">
        <div className="flex justify-between">
          <p>total</p>
          <span>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(valorTotal)}
          </span>
        </div>
          <button
            className="p-2 rounded bg-fundo-botao-nav-cart hover:bg-hover-botao-nav-cart"
            type="submit"
            disabled={items.length === 0 ? true : false}
            onClick={handleFinalizarCompra}
          >
            Finalizar Compra

          </button>
        </div>

      </div>
    </>
  );
}

export default Cart;
