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
    <div className="flex flex-col gap-4 border border-black rounded-lg">
      <div className="px-4 font-medium flex flex-col gap-4" onClick={visualizarProduto}>
        <p>Nome: {produto.nome}</p>
        <p>Preço: {`R$ ${produto.preco.toFixed(2)}`}</p>
        <p>Descrição: {produto.categoria?.descricao}</p>
        <p>Categoria: {produto.categoria?.nome}</p>
        <img src={produto.imagem_produto} alt={`Imagem de ${produto.nome} `} />
      </div>
      <div className="flex ">
        {usuario.tipo === 'VENDEDOR' ? (
           <Link className="w-3/6 flex rounded-bl-lg justify-center p-2 font-medium bg-gray-400 hover:bg-bio-City-grey" to={`/editproducts/${produto.id}`}>
           <button>Editar</button>
         </Link>
        ): (
          ""
        )}
       
         {usuario.tipo === 'VENDEDOR' ? (
            <Link className="w-3/6 flex rounded-br-lg justify-center p-2 font-medium hover:bg-lime-400 bg-bio-City-input-color" to={`/deletproducts/${produto.id}`}>
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
