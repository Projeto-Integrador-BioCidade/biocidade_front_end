import { Link, useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/produto";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

interface CardProductProps {
  produto: Produto;
}

function visualizarProduto() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  navigate(`/products/${id}`);
}
function CardProduct({ produto }: CardProductProps) {
  const { usuario } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-black bg-slate-200">
      <div
        className="flex flex-col gap-4 px-4 font-medium"
        onClick={visualizarProduto}
      >
        <p>Nome: {produto.nome}</p>
        <p>Preço: {`R$ ${produto.preco.toFixed(2)}`}</p>
        <p>Descrição: {produto.categoria?.descricao}</p>
        <p>Categoria: {produto.categoria?.nome}</p>
        <img
          src={produto.imagem_produto}
          alt={`Imagem de ${produto.nome} `}
          className="h-[100px] max-w-[100px] rounded-lg"
        />
      </div>
      <div className="flex">
        {usuario.tipo === "VENDEDOR" ? (
          <Link
            className="hover:bg-bio-City-grey flex w-3/6 justify-center rounded-bl-lg bg-gray-400 p-2 font-medium"
            to={`/editproducts/${produto.id}`}
          >
            <button>Editar</button>
          </Link>
        ) : (
          ""
        )}

        {usuario.tipo === "VENDEDOR" ? (
          <Link
            className="flex w-3/6 justify-center rounded-br-lg bg-bio-City-input-color p-2 font-medium hover:bg-lime-400"
            to={`/deletproducts/${produto.id}`}
          >
            <button>Deletar</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardProduct;
