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
    <div className="flex flex-col justify-center bg-bio-City-cream">
      <h2 className="pl-4 border-l-4 ml-4 mt-6 pt-4 pb-4 border-bio-City-footer-navbar-color text-4xl font-bold">Seu Carrinho</h2>
      <h2 className="my-4 text-center text-2xl">
        {items.length === 0 ? "O Carrinho está vazio!" : ""}
      </h2>
      <div className="container mx-auto my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {items.map((produto) => (
          <CardCart key={produto.id} item={produto} />
        ))}
      </div>
      <div className="text-center text-lg">
        <p>
          <span className="font-semibold text-black ">Total de items adicionados: </span>
          {quantidadeItems}
        </p>
        <p>
          <span className="font-semibold">Valor Total compra: </span>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorTotal)}
        </p>
      </div>
      <button
        className="mx-auto mb-10 mt-8 flex w-1/4 justify-center rounded bg-teal-600 py-2 text-slate-100 hover:bg-teal-900"
        type="submit"
        disabled={items.length === 0 ? true : false}
        onClick={handleFinalizarCompra}
      >
        Finalizar Compra

      </button>
    
    </div>
  );
}

export default Cart;
