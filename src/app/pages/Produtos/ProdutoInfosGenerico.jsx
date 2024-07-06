import { useState,useEffect } from "react";
import { BarraDeNav } from "../BarraDeNav/BarraDeNav";
import Axios from "axios"


export const ProdutoInfosGenericos = () => {

    const teste = ()=>{

        try{
            return require("./ImagensProdutos/"+urlImg)
        }
        catch{
            return "";
        }
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
            setQuantidadeEstoque(e.quantidade)
        }).catch(()=>console.log("Erro ao pegar as propriedades de produto!"))
        
    },[])

    const [quantidade, setQuantidade] = useState(1);

    const menosBotao = () => {

        if (quantidade == 1) return;
        
        setQuantidade((o) => setQuantidade(o - 1))
    }

 

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [quantidadeEstoque, setQuantidadeEstoque] = useState(0);
    const [anti, setAnti] = useState("");
    const [coeficiente, setCoeficiente] = useState("");
    const [urlImg, setUrlImg] = useState("");
    const [desc, setDesc] = useState("");

    return (

        <div>
            <BarraDeNav />


            <div className="container py-5 d-flex" >


                <div className="col-4">

                    <div className="carousel slide" data-bs-ride="carousel" id="ads">
                        <div className="carousel-indicators">
                            <button className="active" data-bs-target="#ads" data-bs-slide-to="0"></button>
                        </div>
                        <div className="carousel-inner ">
                            <div className="carousel-item active " data-bs-interval="50000">
                                <img src={teste()} className="d-block w-100" ></img>
                            </div>

                        </div>
                        <button className="carousel-control-prev opacity-100 " data-bs-target="#ads" data-bs-slide="prev" >
                            <span className="carousel-control-prev-icon "></span>
                        </button>
                        <button className="carousel-control-next opacity-100 shadow-lg text-info" data-bs-target="#ads" data-bs-slide="next" >
                            <span className="carousel-control-next-icon "></span>
                        </button>
                    </div>


                </div>



                <div className="col-6 ms-auto">
                    <h3 className="mb-4">{nome}</h3>
                    <h5 className="ms-auto mb-4"><strong className="bg-warning rounded p-1">{preco}</strong></h5>
                    <small>Quantidade no estoque: {quantidadeEstoque}</small>
                    <div className="mb-4 mt-2 col-xxl-4 col-xl-5 col-md-7 col-sm-9 col-sm-8 col-12 d-flex">
                        <button onClick={() => menosBotao()} className="btn" style={{ background: "rgb(211,211,211)" }}>-</button>
                        <input type="number" className="form-control mx-2 text-center" value={quantidade} onAbort={(e) => 
                            {
                                setQuantidade(e.target.value > 0 ? e.target.value : 1)
                                setQuantidade(e.target.value >= quantidadeEstoque ? quantidadeEstoque : e.target.value)
                            }
                        } 
                        
                        
                        
                        />
                        <button onClick={() => {
                            if(quantidade>=quantidadeEstoque)return;
                            setQuantidade(() => quantidade + 1)
                        }} className="btn" style={{ background: "rgb(211,211,211)" }}>+</button>
                    </div>
                    <h5 className="ms-auto"><label className="bg-primary rounded p-2 text-white">Adicionar ao carrinho</label></h5>
                </div>
            </div>

            <div className="container">
                <h3>Descrição do produto</h3>

                <div className="col-9">

                    <p>{desc}</p>
                </div>

                <div className="mb-4 col-xxl-4 col-xl-5 col-md-7 col-sm-9 col-sm-8 col-12">

                    <h3>Especificações</h3>

                    <div className="d-flex rounded align-items-center p-1">
                        <strong>Antiderrapante</strong>
                        <label className="ms-auto">{anti}</label>
                    </div>
                    <div className="d-flex  rounded align-items-center p-1" style={{ background: "rgb(211,211,211)" }}>
                        <strong>Coeficiente de Atrito</strong>
                        <label className="ms-auto">{coeficiente}
                        </label>

                    </div>

                </div>

            </div>


        </div>

    );
}