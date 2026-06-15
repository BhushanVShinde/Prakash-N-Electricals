import { HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '../Button'
import ScrollAnimation from '../ScrollAnimation'
import { business, getPhoneLink, getWhatsAppLink } from '../../data/business'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary min-h-[85vh] flex items-center">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollAnimation animation="fade-up">
              <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
                B2B Wholesale Supplier
              </span>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Trusted Electrical Material Wholesaler in{' '}
                <span className="text-secondary">Mumbai</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Supplying Quality Electrical Components for Residential, Commercial and Industrial Projects
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={getPhoneLink(business.phones[0])} variant="secondary" size="lg">
                  <HiPhone className="w-5 h-5" />
                  Call Now
                </Button>
                <Button
                  href={getWhatsAppLink('Hello, I would like to request a quotation for electrical products.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Request Quotation
                </Button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-white/60 text-sm">Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">8+</p>
                  <p className="text-white/60 text-sm">Top Brands</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">B2B</p>
                  <p className="text-white/60 text-sm">Wholesale Rates</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-left" delay={200} className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {['MCB & MCCB', 'Wires & Cables', 'Contactors', 'Switches'].map((item) => (
                  <div
                    key={item}
                    className="bg-white/10 rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-secondary/30 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-secondary" fill="currentColor">
                        <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-secondary/20 rounded-xl border border-secondary/30">
                <p className="text-white text-sm font-medium">GST Registered Wholesaler</p>
                <p className="text-white/60 text-xs mt-1">GSTIN: {business.gstin}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Hero
