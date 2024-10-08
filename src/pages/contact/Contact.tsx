import { Envelope, GithubLogo } from "@phosphor-icons/react";
import { ChangeEvent, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastAlerta } from "../../utils/ToastAlerta";

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
      formErrors["message"] =
        "Por favor, insira uma mensagem com menos de 100 caracteres!";
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
          ToastAlerta("Mensagem enviada com sucesso! :)", "sucesso");
          setNome("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setNome("");
          setEmail("");
          setMessage("");
        },
      );
  };

  return (
    <div className="bg-bio-City-cream flex w-full flex-col items-center justify-center md:h-[73vh] md:flex-row">
      <div className="flex flex-col items-center justify-center gap-4 md:w-1/2">
        <div className="m-4 flex flex-col gap-4">
          <h1 className="text-6xl font-bold">Biocidade</h1>
          <p className="md:max-w-[475px]">
            Nosso compromisso é com a comunidade e com o planeta. Ao escolher o
            BioCidade, você está não apenas adquirindo produtos de qualidade,
            mas também contribuindo para um futuro mais sustentável.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Envelope size={28} color="black" />
              <a href="mailto:biocidades.projeto@gmail.com" target="_blank">
                biocidades.projeto@gmail.com
              </a>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <GithubLogo size={28} color="black" />
              <a
                href="https://github.com/Projeto-Integrador-BioCidade/biocidade_front_end"
                target="_blank"
              >
                github.com/Projeto-Integrador-BioCidade/biocidade_front_end
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-4/5 items-center justify-center md:w-1/2">
        <form
          ref={form}
          method="POST"
          onSubmit={sendEmail}
          className="flex h-[400px] w-[500px] flex-col justify-center gap-4"
        >
          <label className="font-bold" htmlFor="Nome">
            Nome
          </label>
          <input
            type="text"
            id="Nome"
            name="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Insira seu nome"
            className="h-12 rounded-[4px] border-2 p-2 transition-all duration-500 ease-in-out hover:border-black"
          />
          <label className="font-bold" htmlFor="Email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu Email"
            className="h-12 rounded-[4px] border-2 p-2 transition-all duration-500 ease-in-out hover:border-black"
          />
          <label className="font-bold" htmlFor="Comentario">
            Nos deixe uma mensagem
          </label>
          <textarea
            name="message"
            id="Comentario"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-12 min-h-20 rounded-[4px] border-2 p-2 transition-all duration-500 ease-in-out hover:border-black"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          <div className="flex w-full justify-end">
            <button
              type="submit"
              value="Send"
              className="w-32 rounded-[4px] border border-black p-2 transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
