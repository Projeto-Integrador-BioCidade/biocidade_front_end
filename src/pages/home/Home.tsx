// import Carrossel from "../../components/carrossel/Carrossel";
// import "../home/Home.css";
// function Home() {
//   return (
//     <>
//         <div>
//           <Carrossel />
//         </div>
{/* <div className="flex justify-center mt-10 ">
        <div className="md:w-[74%] w-[80%] h-[16vh] flex overflow-x-scroll scrollbar-custom border rounded-3xl  bg-white justify-around ">
          <div className="flex flex-nowrap space-x-4 p-2 justify-center flex-col items-center">
          <Truck size={40}  weight="fill" />
          <div className="min-w-[240px] min-h-[10%] flex flex-col justify-center items-center">
          <p className="text-black">FRETE GRÁTIS</p>
          <p className="text-black">Confira Condições</p>
          </div>
          </div>
          <div className= " flex justify-center flex-col items-center">
          <MapPin size={40} weight="fill"/>
          <div className="min-w-[240px] flex flex-col justify-center items-center">
          <p className="text-black">ENVIAMOS</p>
          <p className="text-black">para todo Brasil</p>
          </div>
          </div>
          <div className=" flex justify-center flex-col items-center">
          <CreditCard size={40} weight="fill"/>
          <div className="min-w-[240px] flex flex-col justify-center items-center">
          <p className="text-black">ATÉ 12X SEM JUROS</p>
          <p className="text-black">10% Off no Boleto</p>
          </div>
          </div>
          <div className="flex justify-center flex-col items-center">
          <Certificate size={40} weight="fill"/>
          <div className="min-w-[240px] flex flex-col justify-center items-center">
          <p className="text-black">100% SEGURO</p>
          <p className="text-black">Certificado SSL</p>
          </div>
          </div> */}
{/* </div>
        </div>
        
        
        </div> */}
// </>
//   );
// }

// export default Home;

import { Recycle, Bag, Trash, Leaf } from "@phosphor-icons/react";
import Carrossel from "../../components/carrossel/Carrossel"

function Home() {
  return (
    <>

      <div className="flex justify-center">
        <img
          src="https://i.imgur.com/LGTA6N5.png"
          alt="Imagem Página Home"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
      </div>
      <div>
        <Carrossel />
      </div>
      <div className="flex flex-col items-center justify-center capitalize bg-gradient-to-b from-fundo-base to-cor-um to-60%">
        <h2 className="text-5xl">a missão biocidade</h2>
        <p className="px-10 lg:px-60 py-12 text-justify text-gray-800">Acreditamos em compras éticas e conscientes. Todos os produtos cadastrados passam por uma análise criteriosa para garantir que estejam em conformidade com nossos valores essenciais.</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 *:*:text-black">
          <div className="flex flex-col gap-2 items-center">
            <Recycle className="border border-black rounded-full" size={50} alt="setas em um ciclo de reciclagem"/>
            <p>lixo zero</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Bag className="border border-black rounded-full" size={50} alt="sacola reutilizavel"/>
            <p>sustentável</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Trash className="border border-black rounded-full" size={50} alt="lata de lixo"/>
            <p>reciclado</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Leaf className="border border-black rounded-full" size={50} alt="uma folha"/>
            <p>feira comercial</p>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default Home;
