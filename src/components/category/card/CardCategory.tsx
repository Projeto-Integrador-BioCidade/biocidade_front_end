import Categoria from "../../../models/categoria";

interface CardCategoryProps {
  categoria: Categoria;
}

function CardCategory({ categoria }: CardCategoryProps) {
  return (
    <div className="min-w-[300px] max-w-[500px]  border border-black rounded-xl flex flex-col">
      <div className="py-2 px-4 font-medium flex flex-col gap-4">
        <p>Nome: {categoria.nome}</p>
        <p>Categoria: {categoria.descricao}</p>
      </div>
    </div>
  );
}

export default CardCategory;
