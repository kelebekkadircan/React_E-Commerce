
import { Routes, Route } from 'react-router-dom'
import './app.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CardPage'
import AuthPage from './pages/AuthPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import BlogDetailsPage from './pages/BlogDetailsPage'




function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/card' element={<CartPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/product/:id' element={<ProductDetailsPage />} />
      <Route path='/blog/:id' element={<BlogDetailsPage />} />


    </Routes>
  )
}

export default App
