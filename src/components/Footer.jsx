import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { navLinks } from '../data/navLinks'
import { business, getPhoneLink, getWhatsAppLink } from '../data/business'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-slate-950 text-white border-t border-transparent dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={business.images.logo}
                alt="Prakash N Electricals"
                className="h-12 w-12 object-contain rounded-lg bg-white p-1"
              />
              <div>
                <p className="text-lg font-bold">Prakash N Electricals</p>
                <p className="text-xs text-white/60 uppercase tracking-wide">
                  Wholesale Supplier
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for quality electrical spare parts and
              components in Mumbai. Serving contractors, builders and industries.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-3">
              {business.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={getPhoneLink(phone)}
                    className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                  >
                    <HiPhone className="w-4 h-4 text-secondary shrink-0" />
                    +91 {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <HiMail className="w-4 h-4 text-secondary shrink-0" />
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 text-secondary shrink-0" />
                  WhatsApp Inquiry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Address</h3>
            <address className="not-italic text-white/70 text-sm leading-relaxed">
              <p className="flex items-start gap-2">
                <HiLocationMarker className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                  <br />
                  {business.address.line3}
                  <br />
                  {business.address.line4}
                  <br />
                  {business.address.line5}
                  <br />
                  {business.address.line6}
                </span>
              </p>
            </address>
            <p className="mt-4 text-xs text-white/50">GSTIN: {business.gstin}</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} Prakash N Electricals. All rights reserved.</p>
          <p>Owner: {business.owner}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
