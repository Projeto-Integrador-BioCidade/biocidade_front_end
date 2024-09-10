import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import Produto from "../../../models/produto";
import { buscar } from "../../../services/Service";
import CardProduct from "../card/CardProduct";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListProduct() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

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
    <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
            <div className="grid grid-cols-3 gap-8">
                {[1, 2, 3].map((_, index) => (
                    <div 
                        key={index} 
                        className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md animate-pulse"
                    >
                        {/* Imagem (borrada) */}
                        <div className="h-48 bg-gray-300"></div>

                        {/* Título (borrado) */}
                        <div className="py-2 px-6">
                            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                        </div>

                        {/* Descrição e Preço (borrado) */}
                        <div className="p-4 bg-gray-50 flex-grow flex flex-col items-center">
                            <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                        </div>

                        {/* Botão Comprar" */}
                        <div className="flex">
                            <div className="w-full bg-gray-300 h-10"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)}

      <div className="flex justify-center bg-bio-City-cream">
        <div className="container my-4 flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {produtos.map((produto) => (
              <CardProduct key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
