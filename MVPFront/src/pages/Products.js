import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Item from "../components/Item"
import banner from '../assets/banner.png'
import axios from 'axios'
import products from '../products.json'

export default function Products() {
  const [productList, setProductList] = useState([])
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setProductList(products.movs)
//    axios.get('http://127.0.0.1:5000/produtos')
//      .then(res => setProductList(res.data.produtos))
//      .catch(error => console.log(error))
  }, [])
console.log(productList)

// Filtragem segundo o menu

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
      <button className="botao" onClick={() => navigate('/menu') }>Voltar</button>
      <p></p>
      <button className="botao" onClick={() => navigate('/') }>Sair</button>
      <footer className="footer">
        <p>Estes exercícios foram criados para efeito de demonstração.
        Não nos responsabilizamos pelos possíveis efeitos derivados de sua prática.</p>
      </footer>
    </div>
  )
}
