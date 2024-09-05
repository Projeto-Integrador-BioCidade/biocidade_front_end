import { Link } from "react-router-dom"
import Categoria from "../../../models/categoria";

interface CardCategoryProps {
  categoria: Categoria
}

function CardCategory({ categoria }: CardCategoryProps) {
  return (
    <div>
      <header>Categoria</header>
      <p>{categoria.nome}</p>
      <div>
        <Link to={`/editcategories/${categoria.id}`}>
          <button>Editar</button>
        </Link>

        <Link to={`/deletcategories/${categoria.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategory;
