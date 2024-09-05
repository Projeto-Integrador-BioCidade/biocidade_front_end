import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import Categoria from "../../../models/categoria";
import { buscar } from "../../../services/Service";
import CardCategory from "../card/CardCategory";
import { DNA } from "react-loader-spinner";

function ListCategory() {
  
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  
  return (
    <>
        {categorias.length === 0 && (
            <DNA
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
            />
        )}
        <div className="
            bg-gray-200 
            flex 
            justify-center
            ">
            <div className="my-4 container flex flex-col">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {categorias.map((categoria) => (
                        <CardCategory key={categoria.id} categoria={categoria} />
                    ))}
                </div>
            </div>
        </div>
    </>
);
}

export default ListCategory