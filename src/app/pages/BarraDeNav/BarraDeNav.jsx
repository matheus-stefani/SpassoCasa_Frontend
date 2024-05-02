import { Link } from "react-router-dom"
import logo from "./Imagens/logo spasso.jpg"



export const BarraDeNav = () => {


    return (

        <div>

            <nav className="navbar bg-light navbar-expand-sm">

                <div className="container">


                    <Link to="/pagina-inicial"><img src={logo} alt="Logo Spasso Casa" className="p-2 me-5" style={{ height: '100px' }}/></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#menuNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="menuNavbar">

                        <div className="navbar-nav gap-3 ">


                            <Link to={"/pagina-inicial"} className="nav-link active">Pagina inicial</Link>
                            <Link to={"/produtos"} className="nav-link active">Produtos</Link>
                            <Link to={"/contato"} className="nav-link active">Contato</Link>
                            <Link to={"/sobre"} className="nav-link active">Sobre</Link>


                        </div>
                    </div>
                    <Link to={"/login"} className="nav-link active text-truncate">Login</Link>

                </div>


            </nav>


            <hr />
        </div>



    )
}