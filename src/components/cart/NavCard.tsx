import { useContext } from "react";
import { CartContext, Items } from "../../contexts/CartContext";
import { Plus, Minus } from "@phosphor-icons/react";

interface CardProdutosProps {
    item: Items;
}

function NavCard({ item }: CardProdutosProps) {
    const { aumentarProduto, removerProduto } = useContext(CartContext);

    return (
        <div className="flex items-center h-1/4 p-5 gap-5 w-full">
            <img
                src={item.imagem_produto}
                className="h-full"
                alt={item.nome}
            />
            <div>
                <div className="">
                    <p className=" capitalize text-gray-800">
                        {item.nome}
                    </p>
                    <h2 className="text-black">
                        {Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(item.preco)}
                    </h2>


                    <div className="flex justify-between w-2/3 border border-black px-1">
                        <button
                            className=""
                            onClick={() => removerProduto(item.id)}
                        >
                            <Minus />
                        </button>
                        <h2 className="my-1 text-center">
                            {item.quantidade}
                        </h2>
                        <button
                            className=""
                            onClick={() => aumentarProduto(item.id)}
                        >
                            <Plus />
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default NavCard;
