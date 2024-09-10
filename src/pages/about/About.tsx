import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import imagem from "../../assets/biocidade_bg.png";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex justify-center items-center md:w-full md:h-[80vh] p-8 bg-bio-City-cream">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        
        <div className="lg:w-3/5 text-left pr-8" data-aos="fade-right">
          <h2 className="text-sm text-black font-medium uppercase  mb-2 tracking-widest">
            Sobre Nós
          </h2>

          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Ajudamos você a viver de forma mais consciente e responsável!
          </h1>

          <p className="text-md lg:text-lg text-black mb-6 leading-relaxed">
            No BioCidade, acreditamos que a sustentabilidade deve ser acessível a todos. Nosso site foi criado com o propósito de oferecer uma ampla gama de produtos sustentáveis a preços acessíveis,
            tornando possível para cada pessoa fazer escolhas conscientes no dia a dia. Desde itens para o lar até material de construção, tudo o que oferecemos é cuidadosamente selecionado para
            minimizar o impacto ambiental e promover um estilo de vida mais responsável.
          </p>
          <p className="text-md lg:text-lg text-black leading-relaxed">
            Nosso compromisso é com a comunidade e com o planeta. Ao escolher o BioCidade, você está não apenas adquirindo produtos de qualidade, mas também contribuindo para um futuro mais sustentável.
            Nossa missão é fazer da sustentabilidade uma realidade para todos, simplificando o acesso a produtos que respeitam o meio ambiente, sem comprometer o seu orçamento.
          </p>

          {/* <button className="mt-6 bg-bio-City-green text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition">
            Saiba mais
          </button> */}
        </div>

       
        <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-center lg:justify-end relative" data-aos="fade-left">
          <div className="relative w-full max-w-md transition-transform transform hover:scale-110 duration-300 ease-in-out">
            <img
              src={imagem}
              className="rounded-full shadow-lg w-full object-cover"
              alt="BioCidade"
              style={{
                clipPath: 'ellipse(70% 50% at 50% 50%)', 
              }}
            />
            <div className="absolute top-[-30px] left-[-30px] bg-bio-City-footer-navbar-color rounded-full w-80 h-80 -z-10 opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default About;








