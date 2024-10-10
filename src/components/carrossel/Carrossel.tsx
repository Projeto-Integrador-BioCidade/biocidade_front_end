
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";


function Home() {
    return (
        <>
            <div className="home"></div>

            <div className="grid grid-cols-4 text-center gap-2 mt-5  " >
                <div className="flex flex-col items-center justify-center">
                    <a className="link" href="#">
                        <img
                        className="swiper-slide-img border rounded-lg w-[70%] h-auto  "
                        src="https://i.imgur.com/ABFSF3x.jpeg"
                        alt="Carrossel - Slide 02"
                    /></a>
                    <div className="flex flex-col justify-center items-center">
                        <p className="">Bucha Vegetal Natural</p>
                        <p className="">R$ 15,00</p>
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center">
                    <a className="link" href="#"><img
                        className="swiper-slide-img border rounded-lg  w-[70%] h-auto"
                        src="https://i.imgur.com/jTDGICn.jpeg"
                        alt="Carrossel - Slide 02" /></a>
                    <p className="">Sabonete Natural de Ervas</p>
                    <p className="">R$ 20,00</p>
                </div>


                <div className="flex flex-col items-center justify-center">
                    <a className="link" href="#"><img
                        className="swiper-slide-img border rounded-lg   w-[70%] h-auto "
                        src="https://i.imgur.com/pbVEyGc.jpeg"
                        alt="Carrossel - Slide 02"
                    /></a>
                    <p className="">Escova de Cabelo de Madeira Sustentável
                    </p>
                    <p className="">R$ 25,00</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <a className="link" href="#"><img
                        className="swiper-slide-img border rounded-lg  w-[70%] h-auto"
                        src="https://i.imgur.com/23rnLsE.jpeg"
                        alt="Carrossel - Slide 02" /></a>
                    <p className="">Kit Talheres Sustentáveis de Bambu</p>
                    <p className="">R$ 40,00</p>
                </div>

            </div>






        </>
    )
}

export default Home