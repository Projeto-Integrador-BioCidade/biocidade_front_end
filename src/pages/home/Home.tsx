import { Recycle, Bag, Trash, Leaf } from "@phosphor-icons/react";
import Carrossel from "../../components/carrossel/Carrossel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="my-8">
        <div className="flex flex-col items-center justify-center gap-12">
          <img
            src="https://i.imgur.com/LGTA6N5.png"
            className="h-[600px] w-full object-cover"
            alt="Imagem Página Home"
          />
          <p className="mb-12 text-2xl font-bold">Novos Produtos</p>
        </div>
        <Carrossel />
      </div>
      <div className="h-[10vh] w-full">
        <Link to="/products" className="flex justify-center">
          <button className="mb-8 flex scale-105 transform items-center justify-center gap-2 border border-black p-4 text-2xl text-black transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
            Compre Aqui
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-7xl capitalize">a missão biocidade</h2>
        <p className="flex w-2/4 justify-center py-12 text-center text-2xl text-gray-800">
          Acreditamos em compras éticas e conscientes. Todos os produtos
          cadastrados passam por uma análise criteriosa para garantir que
          estejam em conformidade com nossos valores essenciais.
        </p>
        <div className="grid grid-cols-2 *:*:text-black lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <Recycle
              className="rounded-full border border-black p-2"
              size={70}
              alt="setas em um ciclo de reciclagem"
            />
            <p>lixo zero</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Bag
              className="rounded-full border border-black p-2"
              size={70}
              alt="sacola reutilizavel"
            />
            <p>sustentável</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Trash
              className="rounded-full border border-black p-2"
              size={70}
              alt="lata de lixo"
            />
            <p>reciclado</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Leaf
              className="rounded-full border border-black p-2"
              size={70}
              alt="uma folha"
            />
            <p>feira comercial</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
