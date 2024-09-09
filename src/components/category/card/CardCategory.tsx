import Categoria from "../../../models/categoria";

interface CardCategoryProps {
  categoria: Categoria;
}

function CardCategory({ categoria }: CardCategoryProps) {
  return (
    <div className="flex min-w-[300px] max-w-[500px] flex-col rounded-xl border border-black bg-slate-200">
      <div className="flex flex-col gap-4 p-4 font-medium">
        <p>Nome: {categoria.nome}</p>
        <p>Categoria: {categoria.descricao}</p>
      </div>
    </div>
  );
}

export default CardCategory;
