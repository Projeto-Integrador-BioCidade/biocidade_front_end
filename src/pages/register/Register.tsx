
import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import Usuario from "../../models/usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";
import "../login/login.css";
import "../register/Register.css";
import { FacebookLogo, GoogleLogo, IdentificationBadge, Image, LinkedinLogo, LockKey, Question, SignIn, User, UserPlus } from "@phosphor-icons/react";

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


  // Modal 
  useEffect(() => {
    let modalRegistro = document.querySelector<HTMLElement>(".modal");
    let fecharModal = document.querySelector(".fechar-modal");

    const closeModal = () => {
      if (modalRegistro) {
        modalRegistro.style.display = "none";
      }
    };

    fecharModal?.addEventListener("click", closeModal);

    return () => {
      fecharModal?.removeEventListener("click", closeModal);
    };
  }, []); 

  const clienteVendedor = () => {
    let modalRegistro = document.querySelector<HTMLElement>(".modal");
    if (modalRegistro) {
      modalRegistro.style.display = "block";
    }
  };

  return (
    <>
      <div className=" login flex h-auto w-full items-center justify-center ">
        <div className="flex border-2 flex-col bg-fundo-botao-nav-cart  rounded-2xl w-96 mt-[90px] mb-48 items-center justify-center pb-3 md:pb-5 md:w-96 md:mt-[120px] shadow-[10px_10px_10px_5px_rgba(0,0,0,0.75)] ">
          <div className="flex rounded-t-lg items-center">
            <div className="flex">
              <Link to="/login" className=" ml-14 te xt-verde-um flex items-center gap-1"> <SignIn size={24} />
                Login
              </Link>
            </div>
            <div className="w-[257px]">
              <Link to="/register" className=" flex gap-2 pb-4 px-7 py-4 font-semibold text-black bg-login-input ml-16 rounded-tr-xl rounded-bl-xl shadow-lg transition-shadow duration-300 ease-in-out"> <UserPlus size={24} className="text-gray-600" />
                Cadastre-se
              </Link>
            </div>
          </div>
          <form
            action=""
            onSubmit={cadastrarNovoUsuario}
            className="items-center flex w-full flex-col justify-center gap-6"
          >

            <div className="flex w-80 mt-16 flex-col">
              <label className="font-bold" htmlFor="Nome"></label>
              <input
                type="text"
                name="nome"
                value={usuario.nome || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                id="Nome"
                placeholder="Nome"
                className="h-12 pl-12 placeholder-black rounded p-2 bg-login-input focus:outline-none focus:ring-2 focus:ring-login-botao"
              />
              <div className="absolute mt-3 flex items-center">
                <IdentificationBadge size={22} className="flex ml-3" />
              </div>
            </div>
            <div className="flex w-80 flex-col">
              <label className="font-bold" htmlFor="Usuario"></label>
              <input
                type="email"
                name="usuario"
                value={usuario.usuario || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                id="Usuario"
                placeholder="E-mail"
                className="h-12 pl-12 rounded p-2 bg-login-input placeholder-black focus:outline-none focus:ring-2 focus:ring-login-botao"
              />
              <div className="absolute mt-3 flex items-center">
                <User size={22} className="flex ml-3" />
              </div>
            </div>
            <div className="flex w-80 flex-col">
              <label className="font-bold" htmlFor="Usuario"></label>
              <input
                type="text"
                name="foto"
                value={usuario.foto || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                id="foto"
                placeholder="Link da foto"
                className="h-12 pl-12 rounded p-2 bg-login-input focus:outline-none focus:ring-2 focus:ring-login-botao placeholder-black"
              />
              <div className="absolute mt-3 flex items-center">
                <Image size={22} className="flex ml-3" />
              </div>
            </div>
            <div className="flex w-80 flex-col">
              <label className="font-bold" htmlFor="Senha"></label>
              <input
                type="password"
                name="senha"
                value={usuario.senha || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                id="Senha"
                placeholder="Senha"
                className="h-12 pl-12 rounded p-2 bg-login-input focus:outline-none focus:ring-2 focus:ring-login-botao placeholder-black"
              />
              <div className="absolute mt-3 flex items-center">
                <LockKey size={22} className="flex ml-3" />
              </div>
            </div>
            {senhaTamanho && <span>Mínimo: 8 digitos</span>}
            <div className="flex w-80 flex-col">
              <label className="font-bold" htmlFor="confirmesuasenha"></label>
              <input
                type="password"
                name="confirmaSenha"
                id="confirmesuasenha"
                placeholder="Confirme sua senha"
                value={confirmaSenha || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
                className="h-12 pl-12 rounded p-2 bg-login-input focus:outline-none focus:ring-2 focus:ring-login-botao placeholder-black "
              />
              <div className="absolute mt-3 flex items-center">
                <LockKey size={22} className="flex ml-3" />
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex flex-col">
                <p className="text-black">Desejar ser um vendedor?</p>
                <div className="max-w-[186px] rounded p-0">
                  <label
                    htmlFor="toggle-seller"
                    className="inline-flex cursor-pointer items-center rounded p-2 dark:text-gray-100"
                  >
                    <input
                      id="toggle-seller"
                      type="checkbox"
                      checked={isSeller}
                      onChange={handleChange}
                      className="peer hidden"
                    />
                    <span
                      className={`rounded rounded-r-none px-7 py-2 transition-colors duration-300 ${isSeller ? "bg-login-input text-black" : "bg-login-botao text-white"}`}
                    >
                      Sim
                    </span>
                    <span
                      className={`rounded rounded-l-none px-7 py-2 transition-colors duration-300 ${isSeller ? "bg-login-botao text-white" : "bg-login-input text-black"}`}
                    >
                      Não
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center gap-2">
              <button
                type="submit"
                className="w-80 rounded bg-login-botao text-white p-2"
              >
                CRIAR
              </button>
            </div>
          </form>
          <p className="mt-3 text-black">Ou faça login com</p>
          <div className="flex gap-6 ">
            <a href=""><GoogleLogo size={32} className="mt-3 " /></a>
            <a href=""><LinkedinLogo size={32} className="mt-3" /></a>
            <a href=""><FacebookLogo size={32} className="mt-3" /></a>
          </div>
          <div className="ml-[85%]">
            <button className="bg-login-botao rounded-full" onClick={clienteVendedor}>
             <Question size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="modal rounded-2xl md:p-10 p-5" id="modal">
          <p className="font-bold">Ao se cadastrar no nosso e-commerce sustentável, você tem a opção de se registrar como cliente ou vendedor.</p>
          <p><span className="text-login-botao font-bold">Cliente:</span> Caso deseje apenas comprar produtos sustentáveis, basta se cadastrar como cliente. Você terá acesso a uma ampla variedade de produtos eco-friendly para melhorar seu dia a dia com responsabilidade ambiental.</p>
          <p><span className="text-login-botao font-bold">Vendedor:</span> Se você é um produtor ou revendedor de produtos sustentáveis e deseja fazer parte da nossa comunidade, pode se registrar como vendedor. Isso permitirá que você liste seus produtos no nosso marketplace, alcance novos clientes e promova a sustentabilidade.</p>
          <div className="flex justify-center mt-11 ">
          <button className="w-[80%] rounded bg-login-botao text-white p-2 fechar-modal">FECHAR</button>
          </div>
           
          </div>
      </div>
     
    </>
  );
}

export default Register;
