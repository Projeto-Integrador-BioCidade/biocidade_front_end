import { createContext, ReactNode, useState } from "react";
import Produto from "../models/produto";
import { ToastAlerta } from "../utils/ToastAlerta";


export interface Items extends Produto{
    quantidade: number;
}

interface CartContextProps {
    adicionarProduto: (produto: Produto) => void;
    aumentarProduto: (produtoId: number) => void;
    removerProduto: (produtoId: number) => void;
    limparCart: () => void;
    items: Items[];
    quantidadeItems: number;
    valorTotal: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    
    const [items, setItems] = useState<Items[]>([]);

    // Calcula o número total de itens no carrinho (quantidade acumulada)
    const quantidadeItems = items.reduce((acc, item) => acc + item.quantidade, 0);

    // Calcula o valor total da compra
    const valorTotal = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    // Função para adicionar produtos ao carrinho
    function adicionarProduto(produto: Produto) {
        const itemIndex = items.findIndex(item => item.id === produto.id);
        
        if (itemIndex !== -1) {
            // Produto já está no carrinho, aumenta a quantidade
            const novoCart = [...items];
            novoCart[itemIndex].quantidade += 1;
            setItems(novoCart);
           ToastAlerta('01 item adicionado!', "info");
        } else {
            // Produto não está no carrinho, adiciona novo item
            setItems(prevItems => [...prevItems, { ...produto, quantidade: 1 }]);
           ToastAlerta('Produto adicionado ao carrinho!', "info");
        }
    }

    function aumentarProduto(produtoId: number) {
        const itemIndex = items.findIndex(item => item.id === produtoId);
        
        if (itemIndex !== -1) {
            const novoCart = [...items];
            novoCart[itemIndex].quantidade += 1;
            setItems(novoCart);
            ToastAlerta('01 item adicionado!', "info");
        } else {
            ToastAlerta('Produto não encontrado no carrinho!', "info");
        }
    }

    // Função para remover produtos do carrinho (reduz a quantidade ou remove)
    function removerProduto(produtoId: number) {
        const itemIndex = items.findIndex(item => item.id === produtoId);
        
        if (itemIndex !== -1) {
            const novoCart = [...items];
            
            if (novoCart[itemIndex].quantidade > 1) {
                // Reduz a quantidade do produto
                novoCart[itemIndex].quantidade -= 1;
                setItems(novoCart);
               ToastAlerta('01 Item removido!', "info");
            } else {
                // Remove o produto se a quantidade for 1
                novoCart.splice(itemIndex, 1);
                setItems(novoCart);
               ToastAlerta('Produto removido!', "info");
            }
        }
    }

    // Função para limpar o carrinho
    function limparCart() {
       ToastAlerta('Compra efetuada com sucesso!', "sucesso");
        setItems([]);
    }

    return (
        <CartContext.Provider 
            value={{ adicionarProduto, aumentarProduto, removerProduto, limparCart, items, quantidadeItems, valorTotal }}
        >
            {children}
        </CartContext.Provider>
    );
}
