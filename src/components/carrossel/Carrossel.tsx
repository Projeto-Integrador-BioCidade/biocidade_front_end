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
    <Swiper
      slidesPerView={3}  // Exibir 3 produtos por vez
      spaceBetween={10}  // Reduzir o espaçamento entre os itens
      loop={true}
      pagination={{
        clickable: true,
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
        <img
          src="https://i.imgur.com/ABFSF3x.jpeg"
          alt="Produto 1"
        />
        <p>Produto 1</p>
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://i.imgur.com/hPHnzdI.jpeg" alt="Produto 2" />
        <p>Produto 2</p>
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://i.imgur.com/mmhAvax.png" alt="Produto 3" />
        <p>Produto 3</p>
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://i.imgur.com/xyz.png" alt="Produto 4" />
        <p>Produto 4</p>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrossel;





