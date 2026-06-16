import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-[96px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default Layout
