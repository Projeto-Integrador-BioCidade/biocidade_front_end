import { ArrowLeft, ArrowRight, Dot } from "@phosphor-icons/react";
import { SetStateAction, useState } from "react";


function Carrosel() {
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
      btnText: 'visitar',
    },

    {
      imagem: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      titulo: '',
      texto: '',
      bgColor: '',
      btnColor: '',
      btnText: '',
    },
    {
      imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      titulo: '',
      texto: '',
      bgColor: '',
      btnColor: '',
      btnText: '',
    },
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
    <div className={`flex h-[30vh] relative group bg-gradient-to-r rounded-b-2xl ${slides[currentIndex].bgColor}`}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].imagem})` }}
        className='bg-left w-full h-full  bg-[length:80%_200%] bg-no-repeat duration-500 opacity-70 rounded-bl-2xl'
      >
      </div>
        <div className="h-full flex flex-col justify-between items-center w-1/2 py-4 font-roboto *:duration-300">
          <h2 className="text-5xl font-bold">{slides[currentIndex].titulo}</h2>
          <p className="text-center text-3xl">{slides[currentIndex].texto}</p>
          <button className={`h-14 w-48 rounded-2xl uppercase duration-100 text-2xl font-semibold hover:font-extrabold ${slides[currentIndex].btnColor}`}>{slides[currentIndex].btnText}</button>
        </div>


      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowLeft color="#fcfcfc" weight="bold" onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowRight size={30} color="#fcfcfc" weight="bold" onClick={nextSlide} />
      </div>
      <div className='flex top-4 justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer h-2'
          >
            <Dot size={32} color="#fcfcfc" weight="bold" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carrosel