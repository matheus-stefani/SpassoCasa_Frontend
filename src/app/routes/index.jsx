import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
import {PaginaInicial} from "../pages/index"
export const Routes = () => {
    return (

        <BrowserRouter>

            <Switch>
                <Route path="/pagina-inicial" element={<PaginaInicial/>} />

                <Route path="*" element={<Navigate to ="/pagina-inicial"/>} />
            </Switch>
        </BrowserRouter>


    )
}