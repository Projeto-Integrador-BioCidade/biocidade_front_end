// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./Carrossel.css";

// function Home() {
//     return (
//         <>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 loop={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 autoplay={{
//                     delay: 5000,
//                     disableOnInteraction: false,
//                 }}
//                 navigation={true}
//                 modules={[Autoplay, Pagination, Navigation]}
//                 className="mySwiper"
//             >

//                 <SwiperSlide>

//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <img
//                         className="swiper-slide-img" 
//                         src="https://ik.imagekit.io/vzr6ryejm/games/slide_03.jpg?updatedAt=1717248886808" 
//                         alt="Carrossel - Slide 02" 
//                     />
//                 </SwiperSlide>

//                 <SwiperSlide>
//                 <img 
//                     className="swiper-slide-img"
//                     src="https://ik.imagekit.io/vzr6ryejm/games/slide_04.jpg?updatedAt=1717248886688" 
//                     alt="Carrossel - Slide 03" 
//                 />
//                 </SwiperSlide>

//             </Swiper>
//         </>
//     )
// }

// export default Home

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";

function Carrossel() {
    return (
        <div className="carrossel-container">
            <Swiper
                slidesPerView={4} // Mostra 4 slides por vez
                spaceBetween={30} // Aumenta o espaçamento entre os slides
                loop={true}
                pagination={{
                    clickable: true,
                    enabled: false,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://i.imgur.com/ABFSF3x.jpeg" alt="Produto 1" />
                    <p>Bucha Vegetal</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/hPHnzdI.jpeg" alt="Produto 2" />
                    <p> Lixa de Pés</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/mmhAvax.png" alt="Produto 3" />
                    <p>Escova de Dentes</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/k3DF4jD.jpeg" alt="Produto 4" />
                    <p>Pote de vidro com colher</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/DrDlV3U.png" alt="Produto 5" />
                    <p>Saquinho de Algodão</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/fRSemFw.jpeg" alt="Produto 6" />
                    <p>Pote Hermético de Silicone</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/zeukndE.jpeg" alt="Produto 7" />
                    <p>Pote Hermético de Vidro</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/2JdoQd9.jpeg" alt="Produto 8" />
                    <p>Recipiente de Aço Inoxidável</p>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Carrossel;










