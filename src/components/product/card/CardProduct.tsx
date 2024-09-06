import { Link, useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/produto";

interface CardProductProps {
  produto: Produto;
}

function visualizarProduto() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  navigate(`/products/${id}`);
}
function CardProduct({ produto }: CardProductProps) {
  return (
    <div className="flex flex-col gap-4 border border-black rounded-lg">
      <div className="px-4 font-medium flex flex-col gap-4" onClick={visualizarProduto}>
        <p>Nome: {produto.nome}</p>
        <p>Preço: {produto.preco}</p>
        <p>Categoria: {produto.categoria?.nome}</p>
      </div>
      <div className="flex ">
        <Link className="w-3/6 flex rounded-bl-lg justify-center p-2 font-medium bg-gray-400 hover:bg-bio-City-grey" to={`/editproducts/${produto.id}`}>
          <button>Editar</button>
        </Link>

        <Link className="w-3/6 flex rounded-br-lg justify-center p-2 font-medium hover:bg-lime-400 bg-bio-City-input-color" to={`/deletproducts/${produto.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;
