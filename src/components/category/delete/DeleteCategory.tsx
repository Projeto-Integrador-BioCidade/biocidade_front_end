import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/categoria";
import { buscar, deletar } from "../../../services/Service";
import AuthContext from "../../../contexts/AuthContext";

function DeleteCategory() {

  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext)

  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    try {
      await deletar(`/categoria/${id}`, {
        headers: {
          'Authorization': token
        }
      });

      alert('Categoria apagada com sucesso')
    } catch (error) {
      alert('Erro ao apagar a categoria')
    }
    retornar()
  }

  function retornar() {
    navigate("/categories")
  }

  return (
    <div>
      <h1>Deletar Categoria</h1>
      <p>Você tem certeza de que deseja apagar a categoria a seguir?</p>
      <div>
        <header>Categoria</header>
        <p>{categoria.nome}</p>
        <div>
          <button onClick={retornar}>
            Não
          </button>
          <button onClick={deletarCategoria}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCategory
