import { ArrowLeft, ArrowRight, Dot } from "@phosphor-icons/react";
import React, { SetStateAction, useState } from "react";


function Carrosel() {
  const [startPosX, setStartPosX] = useState(0)
  const [endPosX, setEndPosX] = useState(0)

  const handleSwipe = () => {
    const distance = startPosX - endPosX;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      nextSlide()
    } else if (distance < -swipeThreshold) {
      prevSlide()
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartPosX(e.clientX);
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    setEndPosX(e.clientX);
    handleSwipe();
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartPosX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setEndPosX(e.changedTouches[0].clientX)
    handleSwipe();
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  }



  const slides = [
    {
      imagem: 'https://ik.imagekit.io/o4h22lltho/BioCidade%20/produtos_ecologicos.png?updatedAt=1725542912860',
      titulo: 'Produtos ecologicos',
      texto: 'Produtos 100% sustentáveis, feitos com dedicação por agricultores familiares e comunidades em situação de vulnerabilidade. Apoie práticas que transformam o mundo!',
      bgColor: 'from-yellow-950 from-50% to-amber-200',
      btnColor: 'bg-lime-600 hover:bg-yellow-900 ',
      btnText: 'comprar',
    },
    {
      imagem: 'https://ik.imagekit.io/o4h22lltho/BioCidade%20/team.jpg?updatedAt=1725544316227',
      titulo: 'Parceiros',
      texto: 'Conheça nossos parceiros e descubra seus produtos sustentáveis, feitos com carinho e responsabilidade.',
      bgColor: 'from-green-700 from-50% to-amber-100',
      btnColor: 'bg-green-700  hover:bg-green-900',
      btnText: 'seja parceiro',
    },
    {
      imagem: 'https://ik.imagekit.io/o4h22lltho/BioCidade%20/tijolo.jpg?updatedAt=1725549635165',
      titulo: 'Conheça nossos produtos',
      texto: 'Tijolos feitos de uma mistura de solo arenoso, cimento e água, que são prensados para adquirir solidez e formatos desejados.',
      bgColor: 'from-orange-700 from-50% to-red-300',
      btnColor: 'bg-orange-700 hover:bg-orange-800',
      btnText: 'comprar',
    }
  ];



  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={`mb-5 flex flex-col justify-center relative group bg-gradient-to-r rounded-b-2xl ${slides[currentIndex].bgColor} h-80`}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].imagem})` }}
        className='flex justify-center bg-left w-full h-full  bg-[length:100%_100%] bg-no-repeat duration-500 rounded-b-2xl
                  md:bg-[length:50%_100%] md:justify-end xl:bg-[length:40%_100%]'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div className="text-center w-full py-5 px-6 text-black h-full flex flex-col justify-between items-center font-roboto *:duration-300 
                        md:w-1/2 xl:w-[60%] xl:px-52"
                        style={{textShadow: '1px 1px 4px rgba(255, 255, 255, 0.8)'}}>
          <h2 className="text-2xl md:text-4xl font-bold">{slides[currentIndex].titulo}</h2>
          <p className="text-lg md:text-2xl font-semibold my-5">{slides[currentIndex].texto}</p>
          <button className={`flex items-center justify-center rounded-2xl uppercase duration-100 text-2xl font-semibold p-2 hover:font-extrabold ${slides[currentIndex].btnColor}`}>{slides[currentIndex].btnText}</button>
        </div>
      </div>


      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowLeft size={22} color="#fcfcfc" weight="bold" onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowRight size={22} color="#fcfcfc" weight="bold" onClick={nextSlide} />
      </div>
      <div className='flex justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className=' cursor-pointer h-0'
          >
            <Dot size={32} color="#000000" weight="bold" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carrosel