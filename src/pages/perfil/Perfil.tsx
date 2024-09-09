import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden'>

            <img 
                className='w-full h-80 object-cover border-b-8 border-white' 
                src="src/assets/bio_cidade.jpeg" alt="Capa do Perfil" />

            <img 
                className='rounded-full w-52 h-52  mx-auto mt-[-8rem] border-8 border-bio-City-main-green relative z-10' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div 
                className="relative mt-[-4rem] h-72 flex flex-col 
                      text-2xl items-center justify-center"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
                <p>Tipo de Usuário: {usuario.tipo}</p>
            </div>

        </div>
    )
}

export default Perfil;