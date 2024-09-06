import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/categoria";
import { buscar, deletar } from "../../../services/Service";
import AuthContext from "../../../contexts/AuthContext";

function DeleteCategory() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
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

  async function deletarCategoria() {
    try {
      await deletar(`/categoria/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Categoria apagada com sucesso");
    } catch (error) {
      alert("Erro ao apagar a categoria");
    }
    retornar();
  }

  function retornar() {
    navigate("/categories");
  }

  return (
    <div className="flex w-full justify-center py-6">
      <div className="flex flex-col gap-6 border bg-[#F4F4F9] border-[#4CAF50]  p-6 rounded-xl text-[#1D1D1F]">
        <h1>Deletar Categoria</h1>
        <p>Você tem certeza de que deseja apagar a categoria a seguir?</p>
        <div className="border border-[#C3C3C3] py-2 px-4 font-medium rounded-lg flex flex-col gap-4">
          <p>{categoria.nome}</p>
          <p>{categoria.descricao}</p>
          <div className="flex w-full gap-6">
            <button onClick={retornar} className="w-3/6 rounded-xl  font-bold transition ease-in-out bg-[#A4A4A4] hover:bg-bio-City-grey flex items-center justify-center py-2">
              Não
            </button>
            <button onClick={deletarCategoria} className="font-bold transition ease-in-out hover:bg-lime-400 bg-[#8BC34A] w-3/6 rounded-xl flex items-center justify-center">
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCategory;
