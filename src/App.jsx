import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
