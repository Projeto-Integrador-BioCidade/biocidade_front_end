import { useState, useContext, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import Produto from "../../../models/produto";
import { buscar } from "../../../services/Service";
import CardProduct from "../card/CardProduct";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListProduct() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        ToastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.length === 0 && (
        <div className="my-4 flex w-full justify-center">
          <div className="container flex flex-col">
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex animate-pulse flex-col justify-between overflow-hidden rounded-2xl border bg-white shadow-md"
                >
                  {/* Imagem (borrada) */}
                  <div className="h-48 bg-gray-300"></div>

                  {/* Título (borrado) */}
                  <div className="px-6 py-2">
                    <div className="mx-auto h-4 w-3/4 rounded bg-gray-300"></div>
                  </div>

                  {/* Descrição e Preço (borrado) */}
                  <div className="flex flex-grow flex-col items-center bg-gray-50 p-4">
                    <div className="mb-4 h-4 w-full rounded bg-gray-300"></div>
                    <div className="mb-4 h-4 w-5/6 rounded bg-gray-300"></div>
                    <div className="h-6 w-1/3 rounded bg-gray-300"></div>
                  </div>

                  {/* Botão Comprar" */}
                  <div className="flex">
                    <div className="h-10 w-full bg-gray-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex h-full flex-col p-8">
        <div className="flex w-full justify-between">
          <div>&nbsp;</div>
          <select className="mb-8 border border-black bg-gray-300 p-[6px]">
            <option
              value=""
              selected
              disabled
              className="flex items-center justify-center capitalize"
            >
              Selecionar por
            </option>
            <option value="">Nome</option>
            <option value="">Maior preço</option>
            <option value="">Menor preço</option>
          </select>
        </div>
        <div className="grid grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <CardProduct key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListProduct;
