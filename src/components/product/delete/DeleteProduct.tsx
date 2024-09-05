import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/produto";
import { buscar, deletar } from "../../../services/Service";
import AuthContext from "../../../contexts/AuthContext";

function DeleteProduct() {

  const navigate = useNavigate()

  const [produto, setProduto] = useState<Produto>({} as Produto)

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext)

  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
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

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      });

      alert('Produto apagado com sucesso')
    } catch (error) {
      alert('Erro ao apagar o produto')
    }
    retornar()
  }

  function retornar() {
    navigate("/products")
  }

  return (
    <div>
      <h1>Deletar Produto</h1>
      <p>Você tem certeza de que deseja apagar o produto a seguir?</p>
      <div>
        <header>Produto</header>
        <p>{produto.nome}</p>
        <div>
          <button onClick={retornar}>
            Não
          </button>
          <button onClick={deletarProduto}>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct
