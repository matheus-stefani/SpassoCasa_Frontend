
import logo from "../BarraDeNav/Imagens/logo spasso.jpg"

import { Link,useNavigate } from "react-router-dom"

import "./removeButtonNumber.css"

import Axios from "axios"
import {useState } from "react"

export const Cadastro = ()=>{

    const history = useNavigate();

    const onClickButton =  ()=>{

      

        if(senha!==senhaC){
            alert("Senha não correspondem");
            return;
        }

        Axios.post('https://localhost:7032/Cadastro',
            {
  
                "nomeCompleto": nomeC,
                "email": email,
                "endereco": endereco,
                "telefone": telefone,
                "senha": senha
              }
        ).then((res)=>res.data).then((res)=>{
            alert("O id "+res+" foi criado com sucesso")
            history("/login");
        }).catch((res)=>alert("Erro!!!"))


    };

    const [nomeC,setNomeC] = useState("");
    const [email,setEmail] = useState("");
    const [endereco,setEndereco] = useState("");
    const [telefone,setTelefone] = useState("");
    const [senha,setSenha] = useState("");
    const [senhaC,setSenhaC] = useState("");

    const [mostrarSenha,setMostrarSenha] = useState(false);
    const [mostrarSenhaC,setMostrarSenhaC] = useState(false);

    return (
        <div className="container p-5 col-12 col-sm-12 col-md-10 col-lg-9 col-xl-5 col-xll-4">
            
            <div className="d-flex justify-content-center align-items-center" >
            <Link to="/pagina-inicial"> <img src={logo} alt="Logo Spasso Casa" className="p-2 mb-3" style={{ height: '125px' }} /> </Link>
            </div>
            <div className="border border-dark p-5 rounded">
            <h2 className="mb-4">Fazer cadastro:</h2>

            <div className="mb-3">
                    <label forhtml="nome" className="form-label">Nome completo:</label>
                    <input type="text" id="nome" value={nomeC} onChange={(e)=>setNomeC(e.target.value)} className="form-control" placeholder="Digite seu nome completo" />
                    
                </div>

                <div className="mb-3">
                    <label forhtml="email" className="form-label">Email:</label>
                    <input type="email" id="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Digite seu e-mail" />
                    
                </div>

                <div className="mb-3">
                    <label forhtml="endereco" className="form-label">Endereço:</label>
                    <input type="text" id="endereco" className="form-control" value={endereco} onChange={(e)=>setEndereco(e.target.value)} placeholder="Digite seu endereço" />
                </div>

                <div className="mb-3">
                    <label forhtml="telefone" className="form-label">Telefone:</label>
                    <input type="number" id="telefone" className="form-control" value={telefone} onChange={(e)=>setTelefone(e.target.value)} placeholder="Digite seu telefone" />
                </div>

                <div className="mb-2">
                    <label forhtml="senha" className="form-label">Senha:</label>
                    <input type={mostrarSenha ? "text" : "password"} id="senha" value={senha} onChange={(e)=>setSenha(e.target.value)}  className="form-control" placeholder="Digite sua senha" />
                    
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" id="mostrarSenha" className="form-check-input" onClick={()=>setMostrarSenha(!mostrarSenha)}/>
                    <label forhtml="mostrarSenha" className="ms-1 form-check-label" >Mostrar senha</label>

                </div>

                <div className="mb-2">
                    <label forhtml="senhaVerificacao" className="form-label">Confirme a senha:</label>
                    <input type={mostrarSenhaC ? "text" : "password"} id="senhaVerificacao" value={senhaC} onChange={(e)=>setSenhaC(e.target.value)} className="form-control" placeholder="Digite sua senha novamente" />
                </div>

                <div className="mb-4  form-check">
                    <input type="checkbox" id="mostrarSenhaC" onClick={()=>setMostrarSenhaC(!mostrarSenhaC)} className="form-check-input" />
                    <label forhtml="mostrarSenhaC" className="ms-1 form-check-label" >Mostrar o confirme senha</label>

                </div>
               

                <div className="row justify-content-between">
                    <div className="col-md-auto mb-3">
                    <Link to="/login" className="text-decoration-none text-white"> <button className="btn btn-secondary">Voltar para login </button></Link>     
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-warning" onClick={()=>onClickButton()}>Finalizar cadastro</button>
                    </div>
                </div>

            </div>
        </div>
    )
}