import imagem from "../../assets/biocidade_bg.png";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import Usuario from "../../models/usuario";
import { cadastrarUsuario } from "../../services/Service";

function Register() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [tipoUsuario, setTipoUsuario] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    tipo: "",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    tipo: "",
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

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
        alert("Usuário cadastrado com sucesso");
      } catch (error) {
        alert("Erro ao cadastrar o Usuário");
      }
    } else {
      alert("Dados inconsistentes. Verifique as informações de cadastro.");
      setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha(""); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <div className="flex justify-center items-center h-[82vh]">
      <div className="w-1/2 flex items-center justify-center h-2/3">
        <img src={imagem} className="h-full" alt="" />
      </div>
      <div className="w-1/2 flex h-full justify-center items-center">
        <form action="" onSubmit={cadastrarNovoUsuario} className="flex flex-col justify-center w-[500px] h-[400px] gap-4">
          <label className="font-bold" htmlFor="Nome">
            Nome
          </label>
          <input
            type="text"
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Nome"
            placeholder="Insira seu nome"
            className="bg-bio-City-input-color h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="Email">
            Email
          </label>
          <input
            type="text"
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            id="Email"
            placeholder="Insira seu Email"
            className="bg-bio-City-input-color h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="Senha">
            Senha
          </label>
          <input
            type="text"
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            id="Senha"
            placeholder="Insira seu Senha"
            className="bg-bio-City-input-color h-12 rounded-lg p-2"
          />
          <label className="font-bold" htmlFor="Confirmesuasenha">
            Confirme sua senha
          </label>
          <input type="text" id="Confirmesuasenha" placeholder="Confirme sua senha" className="bg-bio-City-input-color h-12 rounded-lg p-2" />
          <div className="w-full flex justify-center">
            <div className="flex flex-col">
              <p>Desejar ser um vendedor?</p>
              <div className="bg-gray-500/70 p-0 rounded-xl max-w-[186px]">
                <label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100">
                  <input value={tipoUsuario} id="Toggle3" type="checkbox" className="hidden peer " />
                  <span className="px-7 py-2 rounded-lg dark:bg-bio-City-input-color peer-checked:dark:bg-gray-500 text-black duration-300">Sim</span>
                  <span className="px-7 py-2 rounded-lg dark:bg-gray-500 peer-checked:dark:bg-bio-City-input-color text-black duration-300">Não</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="w-[420px] bg-bio-City-main-green rounded-lg p-2 font-bold">
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
