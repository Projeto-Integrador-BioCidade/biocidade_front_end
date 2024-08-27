
function Navbar() {
  return (
    <>
        <div className="w-full flex justify-center p-6 bg-[#84CC16]">
            <div className="container flex justify-between text-lg">
                
                <img className="h-20 rounded-full" src="src/assets/logoBioCidade.png" alt="Logo BioCidade"/>
            
                <div className="flex ">
                  <ul className="flex items-center gap-5 font-sans ">
                    <li className=' text-black hover:text-white'>Home</li>
                    <li className=' text-black hover:text-white'>Produtos</li>
                    <li className=' text-black hover:text-white'>Serviços</li>
                    <li className=' text-black hover:text-white'>Categoria</li>
                    <li className=' text-black hover:text-white'>Login</li>
                    <li className=' text-black hover:text-white'>Cadastre-se</li>
                  </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar