import { Pencil, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Produto from "../../../models/produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
  const { adicionarProduto } = useContext(CartContext);

  return (
    <div className="my-2 flex flex-col justify-between overflow-hidden rounded-lg bg-white">
      <div className="flex items-end justify-end pr-2 pt-2">
        <Link to={`/editarproduto/${produto.id}`}>
          <Pencil size={24} className="mr-1 hover:fill-teal-700" />
        </Link>

        <Link to={`/deletarproduto/${produto.id}`}>
          <Trash size={24} className="mr-1 hover:fill-red-700" />
        </Link>
      </div>

      <div className="py-4">
        <img
          src={produto.imagem_produto}
          className="max-w-75 mx-auto mt-1 h-44 rounded-xl"
          alt={produto.nome}
        />

        <div className="p-4">
          <p className="text-center text-sm uppercase">{produto.nome}</p>
          <h3 className="text-center text-xl font-bold uppercase">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)}
          </h3>
          <p className="text-center text-sm italic">
            Categoria: {produto.categoria?.descricao}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button
          className="flex w-full items-center justify-center bg-teal-500 py-2 text-white transition-all duration-300 ease-in-out hover:bg-teal-900"
          onClick={() => adicionarProduto(produto)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
