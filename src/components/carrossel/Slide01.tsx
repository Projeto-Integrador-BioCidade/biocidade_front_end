

function Slide01() {
    return (

        <div className="
                bg-bio-City-light-green
                flex 
                justify-center
                h-[100%]
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
                        md:gap-4 
                        items-center 
                        justify-center 
                        md:py-4
                        lg:mt-0
                    ">
                    <h2 className='
                            ml-14
                            text-xl
                            font-bold
                            md:text-5xl
                            lg:text-4xl
                            '>
                        Conheça nossos parceiros e descubra seus produtos sustentáveis, feitos com carinho e responsabilidade!
                    </h2>

                    <div className="flex justify-around gap-4">
                    </div>
                </div>

                <div className="flex justify-center ">
                    <img
                        src="https://i.imgur.com/VpRUgHY.png"
                        alt="Imagem Página Home"
                        className='md:w-2/3 '
                    />
                </div>
            </div>
        </div>
    )
}

export default Slide01