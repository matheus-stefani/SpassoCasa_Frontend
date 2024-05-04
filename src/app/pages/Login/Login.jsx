import { Link , useNavigate } from "react-router-dom"
import logo from "../BarraDeNav/Imagens/logo spasso.jpg"
import { useState } from "react"
import Axios from "axios"

export const Login = () => {

    const history = useNavigate();

    const onClickButton = () => {


        Axios.post('https://localhost:7032/Login',
            {
                "email": email,
                "senha": senha
            }
        ).then((res) => res.data).then((res) => {
            alert("O login foi feito com sucesso")
            history("/pagina-inicial");
        }).catch((res) => alert("Erro no login!!!"))


    };




    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <div className="container p-5 col-12 col-sm-12 col-md-10 col-lg-9 col-xl-5 col-xll-4">

            <div className="d-flex justify-content-center align-items-center" >
                <Link to="/pagina-inicial"><img src={logo} alt="Logo Spasso Casa" className="p-2 mb-3" style={{ height: '125px' }} /></Link>

            </div>
            <div className="border border-dark p-5 rounded">
                <h2>Fazer login:</h2>

                <div className="mb-3">
                    <label forhtml="email" className="form-label">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Digite seu e-mail" />
                    <div className="form-text"> Não compartilhe seu e-mail com terceiros.</div>
                </div>


                <div className="mb-2">
                    <label forhtml="senha" className="form-label">Senha:</label>
                    <input type={mostrarSenha ? "text" : "password"} value={senha} onChange={(e) => setSenha(e.target.value)} id="senha" className="form-control" placeholder="Digite sua senha" />
                    <div className="form-text">Não compartilhe sua  senha com terceiros.</div>
                </div>
                <div className="mb-2 form-check">
                    <input type="checkbox" id="mostrarSenha" className="form-check-input" onClick={() => setMostrarSenha(!mostrarSenha)} />
                    <label forhtml="mostrarSenha" className="ms-1 form-check-label" >Mostrar senha</label>

                </div>
                <Link to="/esqueceu-a-senha" className="mb-2">Esqueceu sua senha</Link>




                <div className="mt-3 mb-5 form-check">
                    <input type="checkbox" id="lembrar" className="form-check-input" />
                    <label forhtml="lembrar" className="ms-1 form-check-label" >Lembrar de mim</label>

                </div>

                <div className="row justify-content-between">
                    <div className="col-md-auto mb-3">
                        <Link to="/cadastro" className="text-decoration-none text-white"> <button className="btn btn-secondary">Cadastrar</button></Link>
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-primary" onClick={() => onClickButton()} type="submit">Entrar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}