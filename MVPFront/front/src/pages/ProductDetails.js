import { useLocation, useNavigate } from "react-router-dom"
import { VIDEOS_TYPES } from "../components/constGifs";
import banner from '../assets/banner.png'

export default function ProductDetails() {
    const { state } = useLocation()
    const navigate = useNavigate()

    return(
        <div className="content-products">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>

            <div className="imagem">
                <img src={VIDEOS_TYPES[state.productInfo.image] } align= "center"  alt="Julia"/>
                {/* IMAGEM */}"
            </div>
            <div className="imagem">
                <h2>{state.productInfo.nome}</h2>
                <p>{state.productInfo.texto}</p>
            </div>
            <div>
            <button className="botaoComprido" onClick={() => 
                navigate('/products/') }>Voltar</button>
            <p></p>
            <button className="botaoComprido" onClick={() => 
                navigate('/') }>Sair</button>
            </div>
        </div>
    )
}