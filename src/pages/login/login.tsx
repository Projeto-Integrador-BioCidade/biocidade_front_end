import { Link } from "react-router-dom"
import imagem from "../../assets/biocidade_bg.png"

function login() {

    return (
        <>
            <div className="w-screen h-[75vh] flex items-center justify-center">
                <div className="flex items-center justify-center w-[50%]">
                    <img src={imagem} alt="Cidade com muitas paisagens verdes" className="w-[400px] h-auto"/>
                </div>
                <div className="flex items-center justify-center w-[50%]">
                    <form className="w-[500px] *:rounded-lg flex flex-col items-center justify-center" onSubmit={login}>
                        <h2 className="text-5xl font-roboto font-bold">Faça Login!</h2>
                        <div className="flex flex-col w-full">
                            <label htmlFor="usuario">E-mail</label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Insira seu E-mail"
                                className="bg-lime-300 h-10 p-2"
                            //   value={usuarioLogin.usuario} 
                            //   onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Insira sua senha"
                                className="bg-lime-300 h-10 p-2"
                            //   value={usuarioLogin.senha} 
                            //   onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <button type='submit' className="bg-lime-500 mt-10 w-full h-10">
                            {/* {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> : */}
                            <span>Entrar</span>
                        </button>

                        <hr className="border-slate-800 w-full" />

                        <p>Ainda não tem uma conta?{' '}
                            <Link to="/cadastro" className="text-indigo-800 hover:underline">
                                Cadastre-se
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}

export default login