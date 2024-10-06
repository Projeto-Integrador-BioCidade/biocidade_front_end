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
    <div className="w-full rounded-lg md:w-1/2 lg:w-1/4">
      <div
        className="flex cursor-pointer items-center bg-fundo-card"
        onClick={comprar}
      >
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
          className="flex w-full justify-center rounded border border-black py-1 text-black transition-all duration-300 hover:bg-hover-botao-card"
          onClick={() => adionarItemCarrinho()}
        >
          <p>Adicionar ao carrinho</p>
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
