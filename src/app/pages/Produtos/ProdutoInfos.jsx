import { useState } from "react";
import { BarraDeNav } from "../BarraDeNav/BarraDeNav";
import slide1 from "./ImagensProdutos/Piso1.png"

export const ProdutoInfos = () => {

    const [quantidade, setQuantidade] = useState(1);

    const menosBotao = () => {

        if (quantidade == 1) return;

        setQuantidade((o) => setQuantidade(o - 1))
    }

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
                                <img src={slide1} className="d-block w-100" ></img>
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
                    <h3 className="mb-4">Piso Vinílico Colado Injoy Papoula Rústico 20,8x123x0,2cm Caixa com 4,09 m² Tarkett</h3>
                    <h5 className="ms-auto mb-4"><strong className="bg-warning rounded p-1">R$ 41,32/m²</strong></h5>
                    <div className="mb-4 col-xxl-4 col-xl-5 col-md-7 col-sm-9 col-sm-8 col-12 d-flex">
                        <button onClick={() => menosBotao()} className="btn" style={{ background: "rgb(211,211,211)" }}>-</button>
                        <input type="number" className="form-control mx-2 text-center" value={quantidade} onChange={(e) => setQuantidade(e.target.value > 0 ? e.target.value : 1)} />
                        <button onClick={() => setQuantidade((o) => quantidade + 1)} className="btn" style={{ background: "rgb(211,211,211)" }}>+</button>
                    </div>
                    <h5 className="ms-auto"><label className="bg-primary rounded p-2 text-white">Adicionar ao carrinho</label></h5>
                </div>
            </div>

            <div className="container">
                <h3>Descrição do produto</h3>

                <div className="col-9">

                    <p>Tinta Acrílica Standard Concentrada Acabamento Fosco Rende Muito Branco Interior E Exterior 20l Coral

                        Pintar com qualidade ficou ainda mais fácil. Coral Rende Muito é uma tinta lavável de alta consistência e cobertura, além do seu baixo odor.

                        Rendimento: até 555m²
                        Indicação de uso:Reboco, gesso, concreto, blocos de cimento, massa corrida ou acrílica.
                        Tempo de secagem:Ao toque: 30 minutos. Entre demãos: 4 horas. Final: 4 horas</p>
                </div>

                <div className="mb-4 col-xxl-4 col-xl-5 col-md-7 col-sm-9 col-sm-8 col-12">

                    <h3>Especificações</h3>

                    <div className="d-flex rounded align-items-center p-1">
                        <strong>Antiderrapante</strong>
                        <label className="ms-auto">Não</label>
                    </div>
                    <div className="d-flex  rounded align-items-center p-1" style={{ background: "rgb(211,211,211)" }}>
                        <strong>Coeficiente de Atrito</strong>
                        <label className="ms-auto">Menor ou igual a 0,4
                        </label>

                    </div>

                </div>

            </div>


        </div>

    );
}