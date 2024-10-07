import { useNavigate } from "react-router-dom";
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
    <div className="w-full rounded-lg">
      <div
        className="flex cursor-pointer items-center justify-center"
        onClick={comprar}
      >
        <img
          src={produto.imagem_produto}
          className="object-containr max-h-64 min-h-52 min-w-52 max-w-96 rounded-lg"
          alt={produto.nome}
        />
      </div>

      <div className="flex flex-col px-12 py-2 capitalize">
        <p className="">{produto.nome}</p>
        <h3 className="">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.preco)}
        </h3>
      </div>
      <div className="flex justify-center">
        <button
          className="mx-12 flex w-4/5 justify-center rounded border border-black py-1 text-black transition-all duration-300 hover:bg-hover-botao-card"
          onClick={() => adionarItemCarrinho()}
        >
          <p>Adicionar ao carrinho</p>
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
