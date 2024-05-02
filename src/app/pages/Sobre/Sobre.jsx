import { BarraDeNav } from "../BarraDeNav/BarraDeNav"
import spassoLocal from "./ImagensSlideSobre/espacoLocalSpasso.png"


export const Sobre = ()=>{

    return (
        <div>
            <BarraDeNav/>
            
            <div className="container mt-4 ">

            <img src={spassoLocal} alt="" className="img-fluid float-start me-4 shadow-lg" style={{ height: '350px' }}/>
            <p className="lead">
            A Spasso Casa é uma empresa localizada na cidade de Rio das Pedras, no endereço Rua Prudente de 
            Moraes, 630. Trata-se de uma boutique especializada em Porcelanatos, Pisos, Revestimentos, 
            Faixas Decorativas, Pastilhas de Vidro e Cerâmicas, além de Louças, Metais e Projetos 3D.

            </p>
            <p className="lead">
            Empresa fundada em maio de 2009.
            
            </p>
            </div>
            
        </div>
        
    )
}