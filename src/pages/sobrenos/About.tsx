import AboutImage from "../../assets/biocidade_bg.png";
import "./About.css";

function About() {
  return (
    <div className="archivo-black-regular py-14 flex justify-center w-screen gap-48">
      <div className="w-[630px] ">
        <img src={AboutImage} className="rounded-3xl" alt="" />
      </div>
      <div className="bg-gradient-to-b round from-[#B9DC81] via-[#B6CF8D]/03 to-[#ADB0A8] w-[630px] h-[630px] rounded-3xl p-8 flex flex-col gap-10">
        <div className="flex w-full justify-center">
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
  );
}

export default About;
