import { Link, useNavigate } from "react-router-dom"
import logo from "../BarraDeNav/Imagens/logo spasso.jpg"
import { useEffect, useState } from "react"
import Axios from "axios"

export const EditarProduto = () => {

    const teste = ()=>{

        try{
            return require("./ImagensProdutos/"+urlImg)
        }
        catch{
            return "";
        }
    }

    const history = useNavigate();

    const onClickButton = (e) => {

        
        Axios.put('https://localhost:7032/Produtos/'+pegarId(window.location.pathname),
            {
                
                "produtoId": pegarId(window.location.pathname),
                "nome": nome,
                "descricao": desc,
                "preco": preco,
                "especAntiDerrapante": anti,
                "especAntiCoeficiente": coeficiente,
                "urlImagem": urlImg,
                "quantidade": quantidade,
                

            }
        ).then((res) => res.data).then(() => {
            
            alert("O produto foi editado com sucesso")
            history("/produtos");
        }).catch((res) => alert("Erro ao editar o produto!!!"))


    };





    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [anti, setAnti] = useState("");
    const [coeficiente, setCoeficiente] = useState("");
    const [urlImg, setUrlImg] = useState("");
    const [desc, setDesc] = useState("");


    const pegarNomeImg = (img) => {
       
        let pegarIndexComeca = 0;
        
        let i = img.length-1;
       
        while (pegarIndexComeca!=0) {
            if(img[i] == "\\"){
                break;
            }
            
            pegarIndexComeca = i;
            i--;
        }
    
        let pegarNome = "";
        for (let i = pegarIndexComeca; i < img.length; i++) {
            pegarNome += img[i];
        }
        
        return pegarNome;
    }

    const pegarId = (url)=>{
        let id = "";
        let pos = 0;
        for(let i  = url.length-1  ; i>0;i--){
            if(url[i]=="/"){
                
                break;
            }

            pos=i;
        }

        for(let i = pos ; i<url.length;i++){
            id+=url[i];
        }

        return id;
    }


    useEffect(()=>{
        
        Axios.get('https://localhost:7032/Produtos/'+pegarId(window.location.pathname))
        .then((e)=>e.data).then((e)=>{
            setNome(e.nome);
            setPreco(e.preco);
            setAnti(e.especAntiDerrapante);
            setCoeficiente(e.especAntiCoeficiente);
            setUrlImg(e.urlImagem);
            setDesc(e.descricao);
            setQuantidade(e.quantidade)
        }).catch(()=>console.log("Erro ao pegar as propriedades de produto!"))
        
    },[])


    return (
        <div className="container p-5 col-12 col-sm-12 col-md-10 col-lg-9 col-xl-5 col-xll-4">

            <div className="d-flex justify-content-center align-items-center" >
                <Link to="/pagina-inicial"><img src={logo} alt="Logo Spasso Casa" className="p-2 mb-3" style={{ height: '125px' }} /></Link>

            </div>
            <div className="border border-dark p-5 rounded">
                <h2>Editar Produto:</h2>





                <div className="mb-3">
                    <label forhtml="nome" className="form-label">Nome do produto:</label>
                    <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="form-control" placeholder="Digite o nome do produto" />

                </div>


                <div className="mb-2">
                    <label forhtml="preco" className="form-label">Preço:</label>
                    <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} id="preco" className="form-control" placeholder="Digite o preço" />

                </div>

                <div className="mb-2">
                    <label forhtml="quantidade" className="form-label">Quantidade:</label>
                    <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} id="preco" className="form-control" placeholder="Digite a quantidade" />

                </div>

                <div className="mb-2">
                    <label forhtml="anti" className="form-label">Antiderrapante:</label>
                    <input type="text" value={anti} onChange={(e) => setAnti(e.target.value)} id="anti" className="form-control" placeholder="Digite o anti" />

                </div>

                <div className="mb-2">
                    <label forhtml="coeficiente" className="form-label">Coeficiente:</label>
                    <input type="text" value={coeficiente} onChange={(e) => setCoeficiente(e.target.value)} id="coeficiente" className="form-control" placeholder="Digite o coeficiente" />

                </div>

                <div className="mb-2">
                    <label forhtml="imagem" className="form-label">Imagem:</label>
                    <input type="text" id="coeficiente" value={urlImg} onChange={(e) => setUrlImg(e.target.value)} className="form-control" />
                    

                </div>


                <div className="form-group mb-4">
                    <label forhtml="exampleFormControlTextarea1">Descrição:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                </div>











                <div className="row justify-content-between">
                    <div className="col-md-auto mb-3">
                        <Link to="/produtos" className="text-decoration-none text-white"> <button className="btn btn-secondary">Cancelar</button></Link>
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-primary" onClick={(e) => onClickButton(e)}>Editar Produto</button>
                    </div>
                </div>

               

            <div className="card border-0 col-4" style={{ height: "350px" }}>
                <Link to={""} className="text-decoration-none text-dark">
                    <div className="card-body p-3 d-flex" style={{ height: "350px" }}>
                        <div className="justify-content-center">
                            <img src={teste()} className="img-fluid" style={{ height: "125px" }} />
                            <h6 className="mt-3 card-text col-11 mb-3 text-break">{nome}</h6>
                            <strong className="bg-warning rounded p-1 card-text opacity-75">R$ {preco}</strong>
                        </div>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    )
}
