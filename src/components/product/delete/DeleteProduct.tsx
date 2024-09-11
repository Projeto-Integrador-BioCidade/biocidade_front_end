import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/produto";
import { buscar, deletar } from "../../../services/Service";
import AuthContext from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

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
        ToastAlerta("O token expirou, favor logar novamente", "sucesso");
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

      ToastAlerta("Produto apagado com sucesso", "sucesso");
    } catch (error) {
      ToastAlerta("Erro ao apagar o produto", "erro");
    }
    retornar();
  }

  function retornar() {
    navigate("/products");
  }

  return (
    <div className="flex justify-center py-50p">
      <div className="bg-verde-cinco flex min-w-[300px] max-w-[500px] flex-col gap-4 rounded-lg border border-[#C3C3C3] p-2">
        <div className="p-4">
          <h1 className="m-2 text-center text-2xl font-bold">
            Deletar Produto
          </h1>
          <p>Você tem certeza de que deseja apagar o produto a seguir?</p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-[#C3C3C3] px-4 py-2 font-medium">
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
          <p>Categoria: {produto.categoria?.nome}</p>
          <div className="flex w-full gap-6">
            <button
              onClick={retornar}
              className="hover:bg-bio-City-grey flex w-3/6 items-center justify-center rounded-xl bg-[#A4A4A4] py-2 font-bold transition ease-in-out"
            >
              Não
            </button>
            <button
              onClick={deletarProduto}
              className="flex w-3/6 items-center justify-center rounded-xl bg-verde-tres font-bold transition ease-in-out hover:bg-verde-dois"
            >
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
