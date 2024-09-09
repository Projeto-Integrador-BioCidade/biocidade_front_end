import imagem from "../../assets/biocidade_bg.png";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import Usuario from "../../models/usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Register() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [isSeller, setIsSeller] = useState(false);
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
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
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
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
        ToastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o Usuário", "erro");
      }
    } else {
      ToastAlerta("Dados inconsistentes. Verifique as informações de cadastro.", "erro");
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <div className="flex justify-center items-center h-[90vh] w-full bg-bio-City-cream">
      <div className="hidden w-1/2 md:flex items-center justify-center">
        <img src={imagem} className="h-full" alt="" />
      </div>
      <div className="flex flex-col w-full h-full justify-center items-center p-5 md:w-1/2">
        <h2 className="sm:text-2xl md:text-3xl lg:text-5xl text-xl font-roboto font-medium">Crie sua conta!</h2>
        <form action="" onSubmit={cadastrarNovoUsuario} className=" w-full flex flex-col justify-center itemce gap-2">
          <label className="font-bold" htmlFor="Nome">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Nome"
            placeholder="Insira seu nome"
            className=" h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="Usuario">
            Email
          </label>
          <input
            type="email"
            name="usuario"
            value={usuario.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Usuario"
            placeholder="Insira seu email"
            className=" h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="Senha">
            Senha
          </label>
          <input
            type="password"
            name="senha"
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Senha"
            placeholder="Insira seu Senha"
            className=" h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="confirmesuasenha">
            Confirme sua senha
          </label>
          <input
            type="password"
            name="confirmaSenha"
            id="confirmesuasenha"
            placeholder="Confirme sua senha"
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            className=" h-12 rounded-lg p-2"
          />
          <div className="w-full flex justify-center">
            <div className="flex flex-col">
              <p>Desejar ser um vendedor?</p>
              <div className=" p-0 rounded-xl max-w-[186px]">
                <label htmlFor="toggle-seller" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100">
                  <input id="toggle-seller" type="checkbox" checked={isSeller} onChange={handleChange} className="hidden peer" />
                  <span className={`px-7 py-2 rounded-lg  transition-colors duration-300 rounded-r-none ${isSeller ? "bg-bio-City-input-color text-black" : "bg-gray-500 text-black "}`}>Sim</span>
                  <span className={`px-7 py-2 rounded-lg transition-colors duration-300 rounded-l-none ${isSeller ? "bg-gray-500 text-black" : "bg-bio-City-input-color text-black "}`}>Não</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="max-w-[500px] min-w-[250px] bg-bio-City-main-green w-full rounded-lg p-2 font-bold">
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
