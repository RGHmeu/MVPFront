import { useEffect, useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Item from "../components/Item"
import banner from '../assets/banner.png'
import axios from 'axios'
import products from '../products.json'
import menu from '../components/Menu'

export default function Products(props) {
  const [productList, setProductList] = useState([])
  const [menuList, setMenuList] = useState()
  const { state } = useLocation()
  const navigate = useNavigate()

//  console.log(menuList.menuTab[0, 0]);
//  console.log(products.movs[0, 0]);
// Filtragem segundo o menu

  useEffect(() => {
    setProductList(products.movs)
//    axios.get('http://127.0.0.1:5000/produtos')
//      .then(res => setProductList(res.data.produtos))
//      .catch(error => console.log(error))
  }, [])


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

      <section className="main-products">
        {productList.map((p, index) => (
          <Item key={index} product={p} 
          />
        ))}
      </section>
      <button className="botaoComprido" onClick={() => 
        navigate('/menu') }>Voltar</button>
      <p></p>
      <button className="botaoComprido" onClick={() => 
        navigate('/') }>Sair</button>
      <p></p>
      <footer className="footer">
        <p>Estes exercícios foram criados para efeito de demonstração.
        Não nos responsabilizamos pelos possíveis efeitos derivados de sua prática.</p>
      <p></p>
      </footer>
    </div>
  )
}
