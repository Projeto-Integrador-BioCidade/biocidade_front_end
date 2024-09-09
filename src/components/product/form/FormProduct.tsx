import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import Produto from "../../../models/produto";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormProduct() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);

  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const token = usuario.token;

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar("/categoria", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    let value: any;
    if (e.target.name === "preco") {
      value = parseFloat(Number(e.target.value).toFixed(2));
    } else {
      value = e.target.value;
    }

    console.log(value);

    setProduto({
      ...produto,
      [e.target.name]: value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        ToastAlerta("Produto atualizado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar o Produto", "erro");
          console.log(produto);
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Produto cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          ToastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar o Produto", "erro");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/products");
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  const carregandoCategoria = categoria.descricao === "";

  console.log(JSON.stringify(produto));
  console.log(JSON.stringify(produto));
  return (
    <div className="container mx-auto flex h-[75vh] flex-col items-center justify-center">
      <h1 className="my-8 text-center text-4xl">
        {id === undefined ? "Cadastre um novo produto" : "Editar produto"}
      </h1>

      <form className="flex w-1/2 flex-col gap-4" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do produto</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="rounded border-2 border-slate-700 p-2"
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            step=".01"
            placeholder="Preço do produto"
            name="preco"
            className="rounded border-2 border-slate-700 p-2"
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="descricao">Imagem do produto</label>
          <input
            type="text"
            placeholder="Imagem do produto"
            name="imagem_produto"
            className="rounded border-2 border-slate-700 p-2"
            value={produto.imagem_produto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="nome">Nome do produto</label>
          <input
            type="text"
            placeholder="nome"
            name="nome"
            className="rounded border-2 border-slate-700 p-2"
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da Categoria</p>
          <select
            name="tema"
            id="tema"
            className="rounded border border-slate-800 p-2"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.nome}</option>
                <option value={categoria.id}>{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button
          disabled={carregandoCategoria}
          className="mx-auto block w-1/2 rounded bg-indigo-400 py-2 text-slate-100 hover:bg-indigo-800"
          type="submit"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduct;
