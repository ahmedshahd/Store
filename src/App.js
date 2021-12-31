import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Login from './pages/Login'
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="productList" element={<ProductList />} />
                <Route path="product" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
