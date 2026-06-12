import { HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import ScrollAnimation from '../ScrollAnimation'
import Button from '../Button'
import { business, getPhoneLink, getWhatsAppLink } from '../../data/business'

const InquiryCTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollAnimation animation="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Quotation for Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Contact us today for bulk pricing, product availability and expert recommendations. We respond quickly to all B2B inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={getPhoneLink(business.phones[0])} variant="secondary" size="lg">
                <HiPhone className="w-5 h-5" />
                Call {business.phones[0]}
              </Button>
              <Button
                href={getWhatsAppLink('Hello, I would like to submit a product inquiry for my project.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default InquiryCTA
