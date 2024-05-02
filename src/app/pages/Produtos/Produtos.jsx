import { BarraDeNav } from "../BarraDeNav/BarraDeNav"
import piso1 from "./ImagensProdutos/Piso1.png"
import "./produtos.css"
import { Link } from "react-router-dom"
export const Produtos = () => {

    return (
        <div>
            <BarraDeNav />
            <div className="container ">

                <div className="row row-cols-xl-6 row-cols-xl-5 row-cols-md-4 row-cols-sm-3 row-cols-2">


                    <div className="col mb-5">


                        <div className="card border-0 " style={{ height: "350px" }}>
                            <Link to="/login" className="text-decoration-none text-dark">
                                <div className="card-body p-3 d-flex" style={{ height: "350px" }}>
                                    <div className="justify-content-center">
                                        <img src={piso1} className="img-fluid" style={{ height: "125px" }} />
                                        <h6 className="mt-3 card-text col-11 mb-3 text-break">Piso Vinílico Colado Injoy Papoula Rústico 20,8x123x0,2cm Caixa com 4,09 m² Tarkett</h6>
                                        <strong className="bg-warning rounded p-1 card-text">R$ 41,32/m²</strong>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>


                    <div className="col mb-5">

                        <div className="card  border-0 " style={{ height: "350px" }}>
                            <Link to="/login" className="text-decoration-none text-dark">
                                <div className="card-body p-3 d-flex" style={{ height: "350px" }}>
                                    <div className="justify-content-center">
                                        <img src={piso1} className="img-fluid" style={{ height: "125px" }} />
                                        <h6 className="mt-3 card-text col-11 mb-3 text-break">Piso Vinílico Colado Injoy Papoula Rústico 20,8x123x0,2cm Caixa com 4,09 m² Tarkett</h6>
                                        <strong className="bg-warning rounded p-1 card-text">R$ 41,32/m²</strong>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>


                    <div className="col mb-5">

                        <div className="card  border-0 " style={{ height: "350px" }}>
                            <Link to="/login" className="text-decoration-none text-dark">
                                <div className="card-body p-3 d-flex" style={{ height: "350px" }}>
                                    <div className="justify-content-center">
                                        <img src={piso1} className="img-fluid" style={{ height: "125px" }} />
                                        <h6 className="mt-3 card-text col-11 mb-3 text-break">Piso Vinílico Colado Injoy Papoula Rústico 20,8x123x0,2cm Caixa com 4,09 m² Tarkett</h6>
                                        <strong className="bg-warning rounded p-1 card-text">R$ 41,32/m²</strong>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>


                    <div className="col mb-5">

                        <div className="card  border-0 " style={{ height: "350px" }}>
                            <Link to="/login" className="text-decoration-none text-dark">
                                <div className="card-body p-3 d-flex" style={{ height: "350px" }}>
                                    <div className="justify-content-center">
                                        <img src={piso1} className="img-fluid" style={{ height: "125px" }} />
                                        <h6 className="mt-3 card-text col-11 mb-3 text-break">Piso Vinílico Colado Injoy Papoula Rústico 20,8x123x0,2cm Caixa com 4,09 m² Tarkett</h6>
                                        <strong className="bg-warning rounded p-1 card-text">R$ 41,32/m²</strong>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    </div>

                    <div className="col mb-5">

                        <div className="card  border-0 " style={{ height: "350px" }}>
                            <Link to="/login" className="text-decoration-none text-dark">
                                <div className="card-body p-3 d-flex" style={{ height: "350px" }}>
                                    <div className="justify-content-center">
                                        <img src={piso1} className="img-fluid" style={{ height: "125px" }} />
                                        <h6 className="mt-3 card-text col-11 mb-3 text-break">Piso Vinílico Colado Injoy Papoula Rústico 20,8x123x0,2cm Caixa com 4,09 m² Tarkett</h6>
                                        <strong className="bg-warning rounded p-1 card-text">R$ 41,32/m²</strong>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>






                </div>






            </div>



        </div>

    )
}