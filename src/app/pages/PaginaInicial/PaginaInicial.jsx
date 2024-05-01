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
                <div className="carousel slide" data-bs-ride="carousel" id="#ads">
                    <div class="carousel-indicators">
                        <button class="active" data-bs-target="#ads" data-bs-slide-to="0"></button>
                        <button class="" data-bs-target="#ads" data-bs-slide-to="1"></button>
                        <button class="" data-bs-target="#ads" data-bs-slide-to="2"></button>
                        <button class="" data-bs-target="#ads" data-bs-slide-to="3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slide1} className="d-block w-90"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slide2 } className="d-block w-90"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slide3} className="d-block w-90"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slide4} className="d-block w-90"></img>
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#ads" data-bs-slide="prev" >
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" data-bs-target="#ads" data-bs-slide="next" >
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </div>

    )
}