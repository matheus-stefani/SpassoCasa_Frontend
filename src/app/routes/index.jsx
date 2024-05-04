import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
import { Contatos,Login,PaginaInicial,Produtos,Sobre,Cadastro } from "../pages"
import { ProdutoInfos } from "../pages/Produtos/ProdutoInfos"

export const Routes = () => {
    return (

        <BrowserRouter>

            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial/>} />
                <Route path="/contato" element={<Contatos/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/produtos/1" element={<ProdutoInfos/>} />
                

                <Route path="*" element={<Navigate to ="/pagina-inicial"/>} />
            </Switch>
        </BrowserRouter>


    )
}