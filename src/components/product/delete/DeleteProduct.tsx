import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/produto";
import { buscar, deletar } from "../../../services/Service";
import AuthContext from "../../../contexts/AuthContext";

function DeleteProduct() {
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Produto apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o produto");
    }
    retornar();
  }

  function retornar() {
    navigate("/products");
  }

  return (
    <div className="flex justify-center py-4">
      <div className="flex  rounded-lg flex-col gap-4 border border-black min-w-[300px] max-w-[500px] p-2">
        <div className="p-4">
          <h1>Deletar Produto</h1>
          <p>Você tem certeza de que deseja apagar o produto a seguir?</p>
        </div>
        <div className="border border-[#C3C3C3] py-2 px-4 font-medium rounded-lg flex flex-col gap-4">
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
          <p>Categoria: {produto.categoria?.nome}</p>
          <div className="flex w-full gap-6">
            <button onClick={retornar} className="w-3/6 rounded-xl  font-bold transition ease-in-out bg-[#A4A4A4] hover:bg-bio-City-grey flex items-center justify-center py-2">
              Não
            </button>
            <button onClick={deletarProduto} className="font-bold transition ease-in-out hover:bg-lime-400 bg-[#8BC34A] w-3/6 rounded-xl flex items-center justify-center">
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
