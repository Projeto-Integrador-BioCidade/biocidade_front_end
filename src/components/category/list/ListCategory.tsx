import { useState, useContext, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import Categoria from "../../../models/categoria";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListCategory() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar("/categoria", setCategorias, {
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
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <div className="my-4 flex w-full justify-center">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex animate-pulse flex-col justify-center overflow-hidden rounded-2xl border bg-white shadow-md"
                >
                  <div className="px-6 py-6">
                    <div className="mx-auto h-6 w-3/4 rounded bg-gray-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <h2 className="ml-4 border-l-4 border-bio-City-footer-navbar-color pb-4 pl-4 pt-4 text-4xl font-bold">
        Categorias
      </h2>

      <div className="flex h-[63vh] items-center justify-center bg-bio-City-cream">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <div
                key={categoria.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-lg transition-shadow hover:shadow-2xl"
              >
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-lg font-bold text-gray-800">
                    {categoria.nome}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCategory;
