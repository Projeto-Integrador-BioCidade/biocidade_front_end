import { Link } from "react-router-dom";
import Categoria from "../../../models/categoria";

interface CardCategoryProps {
  categoria: Categoria;
}

function CardCategory({ categoria }: CardCategoryProps) {
  return (
    <div className="min-w-[300px] max-w-[500px]  border border-black rounded-lg flex flex-col">
      <div className="py-2 px-4 font-medium flex flex-col gap-4">
        <header>Categoria</header>
        <p>{categoria.nome}</p>
      </div>
      <div className="flex">
        <Link to={`/editcategories/${categoria.id}`} className="w-full text-black font-bold transition ease-in-out bg-gray-400 hover:bg-bio-City-grey flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>
        <Link to={`/deletcategories/${categoria.id}`} className="text-black font-bold transition ease-in-out hover:bg-lime-400 bg-bio-City-input-color w-full flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategory;
