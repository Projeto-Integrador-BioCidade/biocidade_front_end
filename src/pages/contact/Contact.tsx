import { Envelope, GithubLogo } from "@phosphor-icons/react";

function Contact() {
  return (
    <div className="flex justify-center h-[75vh] w-full ">
      <div className="flex flex-col justify-center items-center  w-1/2 bg-gradient-to-r from-bio-City-green-100 to-[#ffffff] gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-6xl">Biocidade</h1>
          <p className="max-w-[475px]">
            Nosso compromisso é com a comunidade e com o planeta. Ao escolher o BioCidade, você está não apenas adquirindo produtos de qualidade, mas também contribuindo para um futuro mais
            sustentável.
          </p>
          <div className="flex flex-col">
            <Envelope size={40} color="black" />
            <a href="mailto:biocidades.projeto@gmail.com" target="_blank">
              biocidades.projeto@gmail.com
            </a>
            <GithubLogo size={40} color="black" />
            <a href="https://github.com/Projeto-Integrador-BioCidade/biocidade_front_end" target="_blank">
              github.com/Projeto-Integrador-BioCidade/biocidade_front_end
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex h-full justify-center items-center">
        <form action="" className="flex flex-col justify-center w-[500px] h-[400px] gap-4">
          <label className="font-bold" htmlFor="Nome">
            Nome
          </label>
          <input type="text" id="Nome" placeholder="Insira seu nome" className="bg-bio-City-input-color h-12 rounded-lg p-2" />
          <label className="font-bold" htmlFor="Email">
            Email
          </label>
          <input type="text" id="Email" placeholder="Insira seu Email" className="bg-bio-City-input-color h-12 rounded-lg p-2" />
          <label className="font-bold" htmlFor="Comentario">
            nos deixe uma mensagem
          </label>
          <textarea name="" id="Comentario" className="bg-bio-City-input-color h-12 rounded-lg p-2 min-h-20"></textarea>
          <div className="w-full flex justify-end">
            <button type="submit" className="w-32 bg-bio-City-main-green rounded-lg p-2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
