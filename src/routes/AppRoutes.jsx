import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import PageLoader from '../components/PageLoader'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Brands from '../pages/Brands'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageLoader><Home /></PageLoader>} />
        <Route path="products" element={<PageLoader><Products /></PageLoader>} />
        <Route path="brands" element={<PageLoader><Brands /></PageLoader>} />
        <Route path="about" element={<PageLoader><About /></PageLoader>} />
        <Route path="contact" element={<PageLoader><Contact /></PageLoader>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
