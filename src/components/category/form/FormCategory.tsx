import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import Categoria from "../../../models/categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

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
        alert('Categoria atualizada com sucesso');

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente');
          handleLogout();
        } else {
          alert('Erro ao atualizar a Categoria');
        }
      }

    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        alert('Categoria cadastrada com sucesso');

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente');
          handleLogout();
        } else {
          alert('Erro ao cadastrar a Categoria');
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
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="nome">Nome da categoria</label>
          <input
            type="text"
            placeholder="nome"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormCategory;

