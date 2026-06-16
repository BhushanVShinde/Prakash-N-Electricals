import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { navLinks } from '../data/navLinks'
import { business, getPhoneLink, getWhatsAppLink } from '../data/business'
import Button from './Button'
import ThemeToggle from './ThemeToggle'

const HEADER_OFFSET = '96px'

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
      isActive
        ? 'text-secondary'
        : 'text-gray-700 hover:text-primary dark:text-slate-300 dark:hover:text-white'
    }`

  const mobileMenu = createPortal(
    <div
      className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={closeMenu}
        aria-label="Close menu"
      />
      <div
        className="absolute left-0 right-0 bottom-0 bg-white dark:bg-slate-900 shadow-xl overflow-y-auto overscroll-contain transition-colors duration-300"
        style={{ top: HEADER_OFFSET, maxHeight: `calc(100dvh - ${HEADER_OFFSET})` }}
      >
        <div className="flex flex-col gap-1 p-6 border-t border-gray-100 dark:border-slate-700 min-h-full bg-white dark:bg-slate-900 pb-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary dark:bg-indigo-500/15 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-slate-700">
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
    </div>,
    document.body
  )

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${
          isOpen
            ? 'bg-white dark:bg-slate-900 shadow-lg py-4'
            : isScrolled
              ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-4'
              : 'bg-white dark:bg-slate-900 py-5 shadow-sm dark:shadow-slate-950/40'
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
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain rounded-lg shrink-0"
              />
              <div className="min-w-0">
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-primary dark:text-white leading-tight truncate transition-colors duration-300">
                  Prakash N
                </p>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-secondary tracking-wider uppercase truncate">
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
              <ThemeToggle />
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

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                className="p-2 rounded-lg text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-slate-800 transition-colors shrink-0"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {mobileMenu}
    </>
  )
}

export default Navbar
