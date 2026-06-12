import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppLink } from '../data/business'

const FloatingWhatsApp = ({
  message = 'Hello Prakash N Electricals, I would like to inquire about your products.',
  label = 'Chat on WhatsApp',
  tooltip = 'Chat with us',
  className = '',
}) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center ${className}`}
    >
      <span
        className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-whatsapp-pulse"
        aria-hidden="true"
      />
      <span
        className="absolute w-14 h-14 rounded-full bg-[#25D366]/40 animate-whatsapp-pulse animation-delay-300"
        aria-hidden="true"
      />

      <a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 group"
        aria-label={label}
      >
        <FaWhatsapp className="w-7 h-7" aria-hidden="true" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
          {tooltip}
        </span>
      </a>
    </div>
  )
}

export default FloatingWhatsApp
