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
    <div className="">
      <div
        className="flex flex-col w-full cursor-pointer items-center justify-center relative"
        onClick={comprar}
      >
        <img
          src={produto.imagem_produto}
          className="w-44 h-60"
          alt={produto.nome}
        />
        <button className="bg-white shadow-xl absolute bottom-0 w-44 text-sm py-2 lg:opacity-0 hover:opacity-100 duration-200 ease-in-out">Visualização rápida</button>
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
          className="mx-12 flex w-44 justify-center rounded border border-black py-1 text-black transition-all duration-300 hover:bg-hover-botao-card"
          onClick={() => adionarItemCarrinho()}
        >
          <p>Adicionar ao carrinho</p>
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
