import { BarraDeNav } from "../BarraDeNav/BarraDeNav";
import slide1 from "./ImagensProdutos/Piso1.png"

export const ProdutoInfos = () => {

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


            
            <h1 className="ms-auto">a</h1>
            </div>


        </div>

    );
}