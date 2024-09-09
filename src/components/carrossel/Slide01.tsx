

function Slide01() {
    return (

        <div className="
                bg-bio-City-light-green
                flex 
                justify-center
                ">
            <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-white
                    '>
                <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                    <h2 className='
                            text-5xl 
                            font-bold
                            '>
                        Conheça nossos parceiros e descubra seus produtos sustentáveis, feitos com carinho e responsabilidade!
                    </h2>

                    <div className="flex justify-around gap-4">
                        {/* <button className='
                                    rounded
                                    bg-slate-800 
                                    text-white 
                                    py-2 
                                    px-4
                                    '>
                            
                        </button> */}
                    </div>
                </div>

                <div className="flex justify-center ">
                    <img
                        src="https://i.imgur.com/VpRUgHY.png"
                        alt="Imagem Página Home"
                        className='w-2/3'
                    />
                </div>
            </div>
        </div>
    )
}

export default Slide01