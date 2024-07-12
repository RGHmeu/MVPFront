import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Menu from './pages/Menu'
import ProductDetails from './pages/ProductDetails'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/:texto/:nome' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

