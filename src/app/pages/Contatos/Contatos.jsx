import { BarraDeNav } from "../BarraDeNav/BarraDeNav"
import { Whatsapp } from 'react-bootstrap-icons';


export const Contatos = () => {

    return (
        <div>
            <BarraDeNav />

            <div className="container">
                <div className="container mt-3">
                    <h2>Localização</h2>
                    <p>Rio das Pedras, no endereço Rua Prudente de
                        Moraes, 630.</p>
                </div>
                <div className="container mt-3">
                    <h2>Horário de funcionamento</h2>
                    <p>De segunda a sexta das 8 horas da manhã até 18:00 horas da noite.</p>
                    <p>E aos sábados 8 horas da manhã até 12:00 horas da manhã.</p>
                </div>

                <div className="container">



                    <h2 className="mb-4">Contato dos donos</h2>

                    <div className="border border-dark p-3 rounded col-xl-3 col-md-6 col-sm-10 col-12 mb-4">
                        <h4 className="mb-4">Rosangela Cristina Stefani</h4>
                        <div className="d-flex">
                            <Whatsapp className="fs-1 me-2 shadow-lg" style={{ color: "rgb(37,211,102)" }} />
                            <h4 className="mb-4 p-1">(19) 99999-9999</h4>
                        </div>
                    </div>

                    <div className="border border-dark p-3 rounded col-xl-3 col-md-6 col-sm-10 col-12">
                        <h4 className="mb-4">Sandro</h4>
                        <div className="d-flex">
                            <Whatsapp className="fs-1 me-2 shadow-lg" style={{ color: "rgb(37,211,102)" }} />
                            <h4 className="mb-4 p-1">(19) 99999-9999</h4>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}