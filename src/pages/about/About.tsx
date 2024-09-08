import imagem from "../../assets/biocidade_bg.png";
import "./About.css";

function About() {
  return (
    <div className="archivo-black-regular flex justify-center items-center w-full h-[82vh]">
      <div className=" w-1/2 md:flex items-center justify-center">
        <img src={imagem} className="h-full" alt="" />
      </div>
      <div className=" w-1/2 rounded-3xl flex flex-col px-20">
        <div className="bg-gradient-to-b round from-bio-City-green via-bio-City-light-green/03 to-bio-City-grey rounded-3xl  *:mx-5  *:my-[3vh] flex flex-col items-center justify-center ">
          <div className="flex w-full justify-center ">
            <h1 className="text-3xl">Sobre nós</h1>
          </div>
          <p>
            No BioCidade, acreditamos que a sustentabilidade deve ser acessível a todos. Nosso site foi criado com o propósito de oferecer uma ampla gama de produtos sustentáveis a preços acessíveis,
            tornando possível para cada pessoa fazer escolhas conscientes no dia a dia. Desde itens para o lar até material de construção, tudo o que oferecemos é cuidadosamente selecionado para
            minimizar o impacto ambiental e promover um estilo de vida mais responsável.
          </p>
          <p>
            Nosso compromisso é com a comunidade e com o planeta. Ao escolher o BioCidade, você está não apenas adquirindo produtos de qualidade, mas também contribuindo para um futuro mais sustentável.
            Nossa missão é fazer da sustentabilidade uma realidade para todos, simplificando o acesso a produtos que respeitam o meio ambiente, sem comprometer o seu orçamento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
