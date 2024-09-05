import { Link } from "react-router-dom";
import Produto from "../../../models/produto";

interface CardProductProps {
  produto: Produto;
}

function CardProduct({ produto }: CardProductProps) {
  return (
    <div>
      <header>Produto</header>
      <p>{produto.nome}</p>
      <div>
        <Link to={`/editproducts/${produto.id}`}>
          <button>Editar</button>
        </Link>

        <Link to={`/deletproducts/${produto.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;
