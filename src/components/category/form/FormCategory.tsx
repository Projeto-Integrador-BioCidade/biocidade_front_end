import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import Categoria from "../../../models/categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategory() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });

    console.log(JSON.stringify(categoria));
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        ToastAlerta("Categoria atualizada com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a Categoria", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Categoria cadastrada com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar a Categoria", "erro");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categories");
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="my-8 text-center text-4xl">
        {id === undefined ? "Cadastre uma nova categoria" : "Editar categoria"}
      </h1>
      <form
        className="flex w-full flex-col gap-4 md:w-1/2"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="rounded border-2 border-slate-700 p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="nome">Nome da categoria</label>
          <input
            type="text"
            placeholder="nome"
            name="nome"
            className="rounded border-2 border-slate-700 p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="mx-auto block w-1/2 rounded bg-indigo-400 py-2 text-slate-100 hover:bg-indigo-800"
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategory;
