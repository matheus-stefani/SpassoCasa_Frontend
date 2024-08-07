import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
import { Contatos,Login,PaginaInicial,Produtos,Sobre,Cadastro} from "../pages"
import { ProdutoInfos } from "../pages/Produtos/ProdutoInfos"
import { AdicionarProduto } from "../pages/Produtos/AdicionarProduto"
import { ProdutosGenerico } from "../pages/Produtos/ProdutosGenerico"
import { EditarProduto } from "../pages/Produtos/EditarProduto"
import { ProdutoInfosGenericos} from "../pages/Produtos/ProdutoInfosGenerico"

export const Routes = () => {
    return (

        <BrowserRouter>

            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial/>} />
                <Route path="/contato" element={<Contatos/>} />
                <Route path="/produtos" element={<ProdutosGenerico/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/produtos/*" element={<ProdutoInfosGenericos/>} />
                <Route path="/produtos/editar/*" element={<EditarProduto/>} />
                <Route path="/produtos/adicionar-produto" element={<AdicionarProduto/>} />
                

                <Route path="*" element={<Navigate to ="/pagina-inicial"/>} />
            </Switch>
        </BrowserRouter>


    )
}