import { Link } from "react-router-dom"
import { BarraDeNav } from "../BarraDeNav/BarraDeNav"
import slide1 from "./ImagensSlide/Slide 1.png"
import slide2 from "./ImagensSlide/Slide 2.png"
import slide3 from "./ImagensSlide/Slide 3.png"
import slide4 from "./ImagensSlide/Slide 4.png"
export const PaginaInicial = () => {

    return (
        <div>
            <BarraDeNav />
            <div className="container py-5">
            <h1 className="d-flex justify-content-center mb-4">Temos {new Date(Date.now()).getFullYear()-2009} anos de história!</h1>
                <div className="carousel slide" data-bs-ride="carousel" id="ads">
                    <div className="carousel-indicators">
                        <button className="active" data-bs-target="#ads" data-bs-slide-to="0"></button>
                        <button className="" data-bs-target="#ads" data-bs-slide-to="1"></button>
                        <button className="" data-bs-target="#ads" data-bs-slide-to="2"></button>
                        <button className="" data-bs-target="#ads" data-bs-slide-to="3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="50000">
                            <img src={slide1} className="d-block w-100"></img>
                        </div>
                        <div className="carousel-item" data-bs-interval="50000">
                            <img src={slide2 } className="d-block w-100"></img>
                        </div>
                        <div className="carousel-item" data-bs-interval="50000">
                            <img src={slide3} className="d-block w-100"></img>
                        </div>
                        <div className="carousel-item" data-bs-interval="50000">
                            <img src={slide4} className="d-block w-100"></img>
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev opacity-100" data-bs-target="#ads" data-bs-slide="prev" >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next opacity-100 shadow-lg text-info" data-bs-target="#ads" data-bs-slide="next" >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
                
            <h3 className="mt-3">Principais produtos: <Link to="/produtos"><small className="">Ir para produtos</small></Link></h3>

            <h3 className="mt-3">Categoria produtos: <Link to="/produtos"><small className="">Ir para produtos</small></Link></h3>
            </div>
            
            
        </div>

    )
}