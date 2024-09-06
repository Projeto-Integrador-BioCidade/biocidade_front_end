import { Envelope, GithubLogo } from "@phosphor-icons/react";
import { ChangeEvent, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [nome, setNome] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const form = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    let formErrors: { [key: string]: string } = {};
    let isValid = true;

    if (message.length > 100) {
      isValid = false;
      formErrors["message"] = "Por favor, insira uma mensagem com menos de 100 caracteres!";
    }

    setErrors(formErrors);
    return isValid;
  };

  const sendEmail = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_bio", "template_ccfa04a", form.current!, {
        publicKey: "PSEm7FN_EwB2ueObF",
      })
      .then(
        () => {
          alert("Mensagem enviada com sucesso! :)");
          setNome("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setNome("");
          setEmail("");
          setMessage("");
        }
      );
  };

  return (
    <div className="flex justify-center h-[75vh] w-full ">
      <div className="flex flex-col justify-center items-center  w-1/2 bg-gradient-to-r from-bio-City-green-100 to-[#ffffff] gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-6xl">Biocidade</h1>
          <p className="max-w-[475px]">
            Nosso compromisso é com a comunidade e com o planeta. Ao escolher o BioCidade, você está não apenas adquirindo produtos de qualidade, mas também contribuindo para um futuro mais
            sustentável.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Envelope size={28} color="black" />
              <a href="mailto:biocidades.projeto@gmail.com" target="_blank">
                biocidades.projeto@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <GithubLogo size={28} color="black" />
              <a href="https://github.com/Projeto-Integrador-BioCidade/biocidade_front_end" target="_blank">
                github.com/Projeto-Integrador-BioCidade/biocidade_front_end
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex h-full justify-center items-center">
        <form ref={form} method="POST" onSubmit={sendEmail} className="flex flex-col justify-center w-[500px] h-[400px] gap-4">
          <label className="font-bold" htmlFor="Nome">
            Nome
          </label>
          <input type="text" id="Nome" name="name" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Insira seu nome" className="bg-bio-City-input-color h-12 rounded-lg p-2" />
          <label className="font-bold" htmlFor="Email">
            Email
          </label>
          <input type="email" name="email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu Email" className="bg-bio-City-input-color h-12 rounded-lg p-2" />
          <label className="font-bold" htmlFor="Comentario">
            Nos deixe uma mensagem
          </label>
          <textarea name="message" id="Comentario" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-bio-City-input-color h-12 rounded-lg p-2 min-h-20"></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          <div className="w-full flex justify-end">
            <button type="submit" value="Send" className="w-32 bg-bio-City-main-green rounded-lg p-2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
