import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { buscar } from "../../services/Service";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import Produto from "../../models/produto";
import { CartContext } from "../../contexts/CartContext";
import { Heart, Pencil, Trash } from "@phosphor-icons/react";
import QuantityItemSelected from "../../components/quantityItemSelected/quantityItemSelected";

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
    <div className="flex items-center justify-center gap-5">
      <div className="flex flex-col justify-center gap-4">
        <div className="my-6 flex justify-between">
          <div>
            <Link to="/home">Inicio/</Link>
            {produto.categoria && (
              <Link to={`/products/nome/${produto.nome}`} className="">
                {produto.nome}
              </Link>
            )}
          </div>
          <div className="flex items-end justify-end">
            {usuario.tipo === "VENDEDOR" ? (
              <Link to={`/editarproduto/${produto.id}`}>
                <Pencil size={24} className="mr-1 hover:fill-teal-700" />
              </Link>
            ) : (
              ""
            )}

            {usuario.tipo === "VENDEDOR" ? (
              <Link to={`/deletarproduto/${produto.id}`}>
                <Trash size={24} className="mr-1 hover:fill-red-700" />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <img
            src={produto.imagem_produto}
            alt={produto.nome}
            className="h-[500px] w-96 md:w-[474px]"
          />
          <div className="flex flex-col justify-around">
            <h1 className="text-3xl">{produto.nome}</h1>
            <p className="text-2xl">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(produto.preco)}
            </p>
            <p className="flex max-w-96 gap-1 text-xl">{produto.descricao}</p>
            <Link
              to={`/products/${produto.id}`}
              className="underline underline-offset-2"
            >
              Saiba mais
            </Link>
            <div className="flex flex-col gap-2">
              <div className="my-3 flex">
                <QuantityItemSelected />
              </div>
              <div className="flex w-full gap-2">
                <button
                  className="flex w-full items-center justify-center gap-2 border border-black p-[6px] text-base"
                  onClick={comprar}
                >
                  Adicionar ao carrinho
                </button>
                <span className="border border-black p-1">
                  <Heart size={32} />
                </span>
              </div>
              <button
                className="mb-6 w-full bg-black p-2 text-white md:mb-0"
                onClick={comprar}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
        <div className="my-14 flex gap-8">
          <div className="max-w-56">
            <p className="text-black">INFORMAÇÕES DO PRODUTO</p>
            <span className="flex text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              cumque ad tempore soluta nulla. Sequi, ea temporibus enim
              accusamus possimus rem error excepturi molestiae aut dolore minima
              voluptatem iusto? Deleniti!
            </span>
          </div>
          <p className="border-r-2 border-[#d3d1d0]">&nbsp;</p>
          <div className="max-w-56">
            <p className="text-black">POLÍTICA DE RETORNO</p>
            <span className="flex text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              facilis debitis veniam animi qui quisquam perferendis deleniti
              praesentium. Sequi vitae doloremque in eligendi. Laudantium rem
              corporis vel labore sit voluptatem.
            </span>
          </div>
          <p className="border-r-2 border-[#d3d1d0]">&nbsp;</p>
          <div className="max-w-56">
            <p className="text-black">INFORMAÇÕES DE ENTREGA</p>
            <span className="flex text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              facilis debitis veniam animi qui quisquam perferendis deleniti
              praesentium. Sequi vitae doloremque in eligendi. Laudantium rem
              corporis vel labore sit voluptatem.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
