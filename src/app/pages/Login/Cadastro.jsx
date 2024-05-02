
import logo from "../BarraDeNav/Imagens/logo spasso.jpg"

import { Link } from "react-router-dom"

export const Cadastro = ()=>{

    const onClickButton = (e)=>e.preventDefault();

    return (
        <div className="container p-5 col-12 col-sm-12 col-md-10 col-lg-9 col-xl-5 col-xll-4">
            
            <div className="d-flex justify-content-center align-items-center" >
            <Link to="/pagina-inicial"> <img src={logo} alt="Logo Spasso Casa" className="p-2 mb-3" style={{ height: '125px' }} /> </Link>
            </div>
            <form method="POST" className="border border-dark p-5 rounded">
            <h2 className="mb-4">Fazer cadastro:</h2>

            <div className="mb-3">
                    <label forhtml="nome" className="form-label">Nome completo:</label>
                    <input type="text" id="nome" className="form-control" placeholder="Digite seu nome completo" />
                    
                </div>

                <div className="mb-3">
                    <label forhtml="email" className="form-label">Email:</label>
                    <input type="email" id="email" className="form-control" placeholder="Digite seu e-mail" />
                    <div className="form-text"> Não compartilhe seu e-mail com terceiros.</div>
                </div>


                <div className="mb-3">
                    <label forhtml="senha" className="form-label">Senha:</label>
                    <input type="password" id="senha" className="form-control" placeholder="Digite sua senha" />
                    <div className="form-text">Não compartilhe sua  senha com terceiros.</div>
                </div>

                <div className="mb-5">
                    <label forhtml="senhaVerificacao" className="form-label">Confirme a senha:</label>
                    <input type="password" id="senhaVerificacao" className="form-control" placeholder="Digite sua senha novamente" />
                </div>
               

                <div className="row justify-content-between">
                    <div className="col-md-auto mb-3">
                    <button className="btn btn-secondary" onClick={(e)=>e.preventDefault()}><Link to="/login" className="text-decoration-none text-white">Voltar para login</Link></button>     
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-warning" type="submit">Finalizar cadastro</button>
                    </div>
                </div>

            </form>
        </div>
    )
}