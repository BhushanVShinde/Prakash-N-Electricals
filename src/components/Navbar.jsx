import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { navLinks } from '../data/navLinks'
import { business, getPhoneLink, getWhatsAppLink } from '../data/business'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-200 ${
      isActive ? 'text-secondary' : 'text-gray-700 hover:text-primary'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white py-4 shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2"
            onClick={closeMenu}
            aria-label="Prakash N Electricals - Home"
          >
            <img
              src={business.images.logo}
              alt="Prakash N Electricals"
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 object-contain rounded-lg shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm sm:text-lg font-bold text-primary leading-tight truncate">
                Prakash N
              </p>
              <p className="text-[10px] sm:text-xs font-semibold text-secondary tracking-wide uppercase truncate">
                Electricals
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button href={getPhoneLink(business.phones[0])} variant="outline" size="sm">
              <HiPhone className="w-4 h-4" />
              Call
            </Button>
            <Button
              href={getWhatsAppLink('Hello, I would like to inquire about electrical products.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
          </button>
        </div>

        <div
          className={`lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-300 ${
            isOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1 p-6 border-t border-gray-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-100">
              <Button href={getPhoneLink(business.phones[0])} variant="outline" className="w-full">
                <HiPhone className="w-5 h-5" />
                Call {business.phones[0]}
              </Button>
              <Button
                href={getWhatsAppLink('Hello, I would like to inquire about electrical products.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="w-full"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
