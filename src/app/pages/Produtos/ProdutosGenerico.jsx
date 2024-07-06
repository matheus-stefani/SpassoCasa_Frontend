import { BarraDeNav } from "../BarraDeNav/BarraDeNav"
import "./produtos.css"
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios"
import { useEffect, useState } from "react"







const RetornaProdutos = (props) => {

    const history = useNavigate();
    const btnRemover = (e) => {

        if (!window.confirm("Tem certeza que quer deletar esse produto?")) {
            return;
        }
        const pegarId = e.target.parentNode.className;

        Axios.delete('https://localhost:7032/Produtos/' + pegarId
        ).then(() => {
            alert("O produto com o id " + pegarId + " foi removido com sucesso")
            window.location.reload();
        })
            .catch((res) => alert("Erro ao remover o produto!!!"))

    }


    const teste = ()=>{

        try{
            return require("./ImagensProdutos/"+props.imgSrc)
        }
        catch{
            return "";
        }
    }

    return (


        <div className="col mb-5">

            <div className="d-flex">
                <Link to={"/produtos/editar/" + props.idProduto} className="text-decoration-none text-dark">
                    <p className="bg-success rounded px-2 p-1 card-text text-white h-100">Editar</p>
                </Link>
                <div className={props.idProduto}>
                    <button onClick={(e) => btnRemover(e)} className="btn bg-danger rounded p-1 card-text text-white ms-auto">Remover</button>
                </div>

            </div>
            <div className="card border-0 " style={{ height: "350px" }}>
                <Link to={"/produtos/" + props.idProduto} className="text-decoration-none text-dark">
                    <div className="card-body p-3 d-flex" style={{ height: "350px" }}>
                        <div className="justify-content-center">
                            <img src={teste()} className="img-fluid" style={{ height: "125px" }} />
                            <h6 className="mt-3 card-text col-11 mb-3 text-break">{props.nomeProduto}</h6>
                            <strong className="bg-warning rounded p-1 card-text opacity-75">R$ {props.precoProduto}</strong>
                        </div>
                    </div>
                </Link>
            </div>

        </div>

    )
}



export const ProdutosGenerico = () => {



    const [pegarProdutosDoGet, setPegarProdutosDoGet] = useState([""]);

    useEffect(() => {

        Axios.get('https://localhost:7032/Produtos')
            .then((res) => res.data).then((res) => {

                setPegarProdutosDoGet(res);
                console.log(pegarProdutosDoGet);

            }).catch((res) => alert("Erro ao buscar os produtos!!!"))

    }, []);

    return (
        <div>
            <BarraDeNav />
            <div className="container ">

                <Link to="/produtos/adicionar-produto"><button className="btn btn-primary my-4 ">Adicionar produto</button></Link>
                <div className="row row-cols-xl-6 row-cols-xl-5 row-cols-md-4 row-cols-sm-3 row-cols-2">

                    {pegarProdutosDoGet.length > 1 && pegarProdutosDoGet.map((e) => {
                        return (
                            <div key={e.produtoId}>
                                <RetornaProdutos idProduto={e.produtoId} nomeProduto={e.nome} precoProduto={e.preco} imgSrc={e.urlImagem} />
                            </div>
                        )

                    })}








                </div>






            </div>



        </div>

    )
}