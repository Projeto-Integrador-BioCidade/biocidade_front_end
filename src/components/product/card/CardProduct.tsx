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
    <div className="flex flex-col gap-2">
      <div
        className="relative flex w-full cursor-pointer flex-col items-center justify-center"
        onClick={comprar}
      >
        <img
          src={produto.imagem_produto}
          className="h-[516px] w-96 rounded-lg bg-white shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:transform md:h-96 md:w-80"
          alt={produto.nome}
        />
        {/* <button className="absolute bottom-0 w-44 bg-white py-2 text-sm shadow-xl duration-200 ease-in-out hover:opacity-100 lg:opacity-0">
          Visualização rápida
        </button> */}
      </div>
      <div className="flex flex-col py-2 capitalize">
        <p className="text-2xl md:text-xl">{produto.nome}</p>
        <h3 className="text-2xl md:text-xl">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.preco)}
        </h3>
      </div>
      <div className="flex">
        <button
          className="w-full rounded-[4px] border border-black p-2 text-2xl transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
          onClick={() => adionarItemCarrinho()}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default CardProdutos;
