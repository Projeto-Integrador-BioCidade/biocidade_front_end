import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carrossel.css";
import Slide01 from "./Slide01";

function Home() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
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
                    <Slide01 />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        className="swiper-slide-img" 
                        src="https://i.imgur.com/TXFmptu.png" 
                        alt="Carrossel - Slide 02" 
                    />
                </SwiperSlide>

                <SwiperSlide>
                <img 
                    className="swiper-slide-img"
                    src="https://i.imgur.com/I1GGGk4.png" 
                    alt="Carrossel - Slide 03" 
                />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Home