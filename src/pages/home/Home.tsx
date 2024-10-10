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

    </>
  )
}

export default Home
