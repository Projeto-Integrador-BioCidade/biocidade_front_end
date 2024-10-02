import { Pencil, ShoppingCart, Trash } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Produto from "../../../models/produto";
import AuthContext from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface CardProdutoProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
  const { usuario } = useContext(AuthContext);
  const { adicionarProduto } = useContext(CartContext);

  const navigate = useNavigate();

  const comprar = () => {
    navigate(`/products/${produto.id}`);
  };

  const adionarItemCarrinho = () => {
    usuario.token === "" || usuario.token === null
      ? ToastAlerta(
        "Você precisa estar logado para adicionar produtos ao carrinho!",
        "info",
      )
      : adicionarProduto(produto);
  };

  return (
    <div className="rounded-lg w-full md:w-1/2 lg:w-1/4">
      
      {/* <div className="flex items-end justify-end pr-2 pt-2">
        {usuario.tipo === "VENDEDOR" ? (
          <Link to={`/editarproduto/${produto.id}`}>
          <Pencil size={24} className="mr-1 hover:fill-teal-700" />
        </Link>
        ):(
          ""
        )}

        {usuario.tipo === "VENDEDOR" ? (
          <Link to={`/deletarproduto/${produto.id}`}>
          <Trash size={24} className="mr-1 hover:fill-red-700" />
        </Link>
        ):(
          ""
        )}
        
      </div> */}

      <div className="cursor-pointer bg-fundo-card flex items-center" onClick={comprar}>
        <img
          src={produto.imagem_produto}
          className="object-contain"
          alt={produto.nome}
        />
      </div>

      <div className="py-2 capitalize">
        <p className="">{produto.nome}</p>
        <h3 className="">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.preco)}
        </h3>
      </div>
      <div>
        <button
          className="flex justify-center w-full py-1 text-black border border-black transition-all duration-300 hover:bg-hover-botao-card rounded"
          onClick={() => adionarItemCarrinho()}
        >
          <p>Adicionar ao carrinho</p>
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
