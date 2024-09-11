import { useContext } from "react";
import { CartContext, Items } from "../../../contexts/CartContext";
import { Plus, Minus } from "@phosphor-icons/react";

interface CardProdutosProps {
  item: Items;
}

function CardCart({ item }: CardProdutosProps) {
  const { aumentarProduto, removerProduto } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md">
      <div className="py-4">
        <img
          src={item.imagem_produto}
          className="max-w-75 mx-auto mt-1 h-40 object-cover"
          alt={item.nome}
        />

        <div className="p-4">
          <p className="mb-2 text-center text-base font-semibold text-gray-800">
            {item.nome}
          </p>
          <h3 className="text-center text-2xl font-extrabold text-teal-500">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.preco)}
          </h3>
          <p className="mt-1 text-center text-sm italic text-gray-500">
            Categoria: {item.categoria?.descricao}
          </p>
          <h4 className="my-2 text-center">
            <span className="font-bold text-gray-700">Quantidade:</span>{" "}
            {item.quantidade}
          </h4>
        </div>
      </div>

      <div className="flex flex-wrap">
        <button
          className="flex w-1/2 items-center justify-center bg-verde-tres py-2 text-slate-100 transition-all hover:bg-verde-dois"
          onClick={() => aumentarProduto(item.id)}
        >
          <Plus size={32} />
        </button>
        <button
          className="flex w-1/2 items-center justify-center bg-verde-dois py-2 text-slate-100 transition-all hover:bg-red-950"
          onClick={() => removerProduto(item.id)}
        >
          <Minus size={32} />
        </button>
      </div>
    </div>
  );
}

export default CardCart;
