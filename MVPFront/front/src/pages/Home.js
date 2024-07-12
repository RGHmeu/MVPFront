import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.png'
import camposFuturos from '../assets/camposFuturos.png'

 
export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="content-product">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>
            <section>
                <div className="menu">
                    <button className='botaoComprido' onClick={() => 
                        navigate('/menu')}>Entrar</button>
                </div>
            </section>
            
            <section className="camposFuturos">
                
                <img src={camposFuturos} alt="Futuros campos" />
                <p></p>
            </section>
            <footer className="footer">
            <p>Em futuro próximo, o cadastramento poderá ser feito, 
            caso o usuário queira sugerir novos movimentos.</p>
            <p></p>
            </footer>
        </div>

    )

}