import { useContext } from "react";
import { CartContext, Items } from "../../../contexts/CartContext";
import { Plus, Minus, Trash } from "@phosphor-icons/react";

interface CardProdutosProps {
  item: Items;
}

function CardCart({ item }: CardProdutosProps) {
  const { aumentarProduto, removerProduto } = useContext(CartContext);

  return (
    <div className="flex  justify-between items-center p-5 gap-1 w-full">
      <div className="">
        <img
          src={item.imagem_produto}
          className="h-24 w-24"
          alt={item.nome}
        />
      </div>

      <div className="h-full flex flex-col justify-center items-start w-52">
        <p className=" capitalize text-gray-800">
          {item.nome}
        </p>

        <h2 className="text-black">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.preco)}
        </h2>
      </div>

      <div className="flex justify-between gap-2 border border-black px-1">
        <button
          className=""
          onClick={() => removerProduto(item.id)}
        >
          <Minus />
        </button>
        <h2 className="my-1 text-center">
          {item.quantidade}
        </h2>
        <button
          className=""
          onClick={() => aumentarProduto(item.id)}
        >
          <Plus />
        </button>
      </div>
      <div className="w-24">
        <p>{Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(item.quantidade * item.preco)}</p>
      </div>
      <div className="hidden md:block">
        <Trash size={32} />
      </div>

    </div>
  );
}

export default CardCart;
