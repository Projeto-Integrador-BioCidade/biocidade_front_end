import imagem from "../../assets/biocidade_bg.png";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import Usuario from "../../models/usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Register() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [isSeller, setIsSeller] = useState(false);
  const [senhaTamanho, setSenhaTamanho] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    tipo: isSeller ? "VENDEDOR" : "CLIENTE",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    tipo: isSeller ? "VENDEDOR" : "CLIENTE",
    foto: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "senha") {
      setSenhaTamanho(value.length < 8 && value.length > 0);
    }

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsSeller(event.target.checked);
    setUsuario({
      ...usuario,
      tipo: event.target.checked ? "VENDEDOR" : "CLIENTE",
    });
  };

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta,
        );
        ToastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o Usuário", "erro");
      }
    } else {
      ToastAlerta("Erro ao confirmar senha.", "erro");
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-bio-City-cream">
      <div className="hidden w-1/2 items-center justify-center md:flex">
        <img src={imagem} className="h-full" alt="" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center p-5 md:w-1/2">
        <h2 className="font-roboto text-xl font-medium sm:text-2xl md:text-3xl lg:text-5xl">
          Crie sua conta!
        </h2>
        <form
          action=""
          onSubmit={cadastrarNovoUsuario}
          className="itemce flex w-full flex-col justify-center gap-2"
        >
          <label className="font-bold" htmlFor="Nome">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            value={usuario.nome || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Nome"
            placeholder="Insira seu nome"
            className="h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="Usuario">
            Email
          </label>
          <input
            type="email"
            name="usuario"
            value={usuario.usuario || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Usuario"
            placeholder="Insira seu email"
            className="h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="Senha">
            Senha
          </label>
          <input
            type="password"
            name="senha"
            value={usuario.senha || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Senha"
            placeholder="Insira seu Senha"
            className="h-12 rounded-lg p-2"
          />
          {senhaTamanho && <span>Mínimo: 8 digitos</span>}

          <label className="font-bold" htmlFor="confirmesuasenha">
            Confirme sua senha
          </label>
          <input
            type="password"
            name="confirmaSenha"
            id="confirmesuasenha"
            placeholder="Confirme sua senha"
            value={confirmaSenha || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleConfirmarSenha(e)
            }
            className="h-12 rounded-lg p-2"
          />
          <div className="flex w-full justify-center">
            <div className="flex flex-col">
              <p>Desejar ser um vendedor?</p>
              <div className="max-w-[186px] rounded-xl p-0">
                <label
                  htmlFor="toggle-seller"
                  className="inline-flex cursor-pointer items-center rounded-md p-2 dark:text-gray-100"
                >
                  <input
                    id="toggle-seller"
                    type="checkbox"
                    checked={isSeller}
                    onChange={handleChange}
                    className="peer hidden"
                  />
                  <span
                    className={`rounded-lg rounded-r-none px-7 py-2 transition-colors duration-300 ${isSeller ? "bg-bio-City-input-color text-black" : "bg-gray-500 text-black"}`}
                  >
                    Sim
                  </span>
                  <span
                    className={`rounded-lg rounded-l-none px-7 py-2 transition-colors duration-300 ${isSeller ? "bg-gray-500 text-black" : "bg-bio-City-input-color text-black"}`}
                  >
                    Não
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-2">
            <button
              type="submit"
              className="w-full min-w-[250px] max-w-[500px] rounded-lg bg-bio-City-main-green p-2 font-bold"
            >
              Cadastrar-se
            </button>
            <Link to={"/login"}>
              <button className="w-full min-w-[250px] max-w-[500px] rounded-lg bg-gray-500 p-2 font-bold">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
