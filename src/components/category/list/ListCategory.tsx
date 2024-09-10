import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import Categoria from "../../../models/categoria";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListCategory() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

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
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>

{categorias.length === 0 && (
  <div className="flex justify-center w-full my-4">
    <div className="container flex flex-col">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="border flex flex-col rounded-2xl overflow-hidden justify-center bg-white shadow-md animate-pulse"
          >
            
            <div className="py-6 px-6">
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


 <h2 className="pl-4 border-l-4 ml-4 pt-4 pb-4 border-bio-City-footer-navbar-color text-4xl font-bold">Categorias</h2>
 
      <div className="flex justify-center bg-bio-City-cream">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <div
                key={categoria.id}
                className="border border-gray-300 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col justify-between hover:shadow-2xl transition-shadow"
              >
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
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

