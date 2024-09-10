// import { useContext } from "react"
// import { CartContext, Items } from "../../../contexts/CartContext"
// import { Plus, Minus } from "@phosphor-icons/react"


// interface CardProdutosProps {
//     item: Items
// }

// function CardCart({ item }: CardProdutosProps) {

//     const { aumentarProduto, removerProduto } = useContext(CartContext)

//     return (
//         <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white'>
//             <div className='py-4'>

//                 <img src={item.imagem_produto} className='mt-1 h-40 max-w-75 mx-auto' alt={item.nome} />

//                 <div className='p-4'>
//                     <p className='text-sm text-center uppercase'>{item.nome}</p>
//                     <h3 className='text-xl text-center font-bold uppercase'>
//                         {Intl.NumberFormat('pt-BR', {
//                             style: 'currency',
//                             currency: 'BRL'
//                         }).format(item.preco)}
//                     </h3>
//                     <p className='text-sm italic text-center'>Categoria: {item.categoria?.descricao} </p>
//                     <h4 className='my-2 text-center'>
//                         <span className="font-semibold">Quantidade:</span> {item.quantidade} 
//                     </h4>
//                 </div>
//             </div>
//             <div className="flex flex-wrap">
//                 <button className='w-1/2 text-slate-100 bg-teal-500 hover:bg-teal-900
//                                    flex items-center justify-center py-2'
//                     onClick={() => aumentarProduto(item.id)}>
//                     <Plus size={32} />
//                 </button>
//                 <button className='w-1/2 text-slate-100 bg-teal-600 hover:bg-red-950
//                                    flex items-center justify-center py-2'
//                     onClick={() => removerProduto(item.id)}>
//                     <Minus size={32} />
//                 </button>
//             </div>
//         </div >
//     )
// }

// export default CardCart

import { useContext } from "react";
import { CartContext, Items } from "../../../contexts/CartContext";
import { Plus, Minus } from "@phosphor-icons/react";

interface CardProdutosProps {
    item: Items;
}

function CardCart({ item }: CardProdutosProps) {
    const { aumentarProduto, removerProduto } = useContext(CartContext);

    return (
        <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white shadow-md'>
            <div className='py-4'>

                <img 
                    src={item.imagem_produto} 
                    className='mt-1 h-40 max-w-75 mx-auto object-cover' 
                    alt={item.nome} 
                />

                <div className='p-4'>
                    <p className='text-base text-center font-semibold text-gray-800 mb-2'>
                        {item.nome}
                    </p>
                    <h3 className='text-2xl text-center font-extrabold text-teal-800'>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(item.preco)}
                    </h3>
                    <p className='text-sm italic text-center text-gray-500 mt-1'>
                        Categoria: {item.categoria?.descricao}
                    </p>
                    <h4 className='my-2 text-center'>
                        <span className="font-bold text-gray-700">Quantidade:</span> {item.quantidade}
                    </h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <button 
                    className='w-1/2 text-slate-100 bg-teal-500 hover:bg-teal-600 transition-all flex items-center justify-center py-2'
                    onClick={() => aumentarProduto(item.id)}>
                    <Plus size={32} />
                </button>
                <button 
                    className='w-1/2 text-slate-100 bg-teal-700 hover:bg-red-950 transition-all flex items-center justify-center py-2'
                    onClick={() => removerProduto(item.id)}>
                    <Minus size={32} />
                </button>
            </div>
        </div>
    );
}

export default CardCart;
