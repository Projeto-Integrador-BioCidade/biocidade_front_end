import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar } from "../../services/Service";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import Produto from "../../models/produto";
import { CartContext } from "../../contexts/CartContext";

function Product() {
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto>({} as Produto);
  const { adicionarProduto } = useContext(CartContext);
  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario.token;

  function comprar() {
    adicionarProduto(produto);
    navigate("/home");
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        ToastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="flex w-2/3 justify-between rounded-lg bg-slate-100 shadow-lg">
        <img
          src={produto.imagem_produto}
          alt={produto.nome}
          className="h-fit w-1/3 rounded-lg shadow-xl"
        />
        <div className="w-2/4 p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            {produto.nome}
          </h2>
          <p className="mb-4 text-lg text-gray-700">{produto.descricao}</p>
          <p className="text-xl font-semibold text-green-500">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)}
          </p>
          <button
            className="mt-6 rounded-lg bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600"
            onClick={comprar}
          >
            Comprar
          </button>
          <div className="mt-4">
            <p className="text-gray-600">
              Vendido por:{" "}
              <span className="font-semibold">{produto.usuario?.nome}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
