import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeading from '../SectionHeading'
import ScrollAnimation from '../ScrollAnimation'
import Button from '../Button'
import { business } from '../../data/business'

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="fade-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 overflow-hidden p-2">
                  <img
                    src="/images/logo.png"
                    alt={`${business.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Prakash N Electricals</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Located in Kandivali West, Mumbai, we are a dedicated wholesale supplier of electrical spare parts serving contractors, electricians, builders and industrial clients.
                </p>
                <div className="space-y-2 text-sm text-white/70">
                  <p><span className="text-secondary font-semibold">Owner:</span> {business.owner}</p>
                  <p><span className="text-secondary font-semibold">GSTIN:</span> {business.gstin}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
            </div>
          </ScrollAnimation>
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Your Reliable Electrical Supply Partner"
              subtitle="We understand the demands of the electrical trade and deliver genuine products with competitive pricing and dependable service."
              align="left"
            />
            <ScrollAnimation animation="fade-up" delay={100}>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Prakash N Electricals, we specialise in wholesale supply of electrical components including wires and cables, circuit breakers, switches, contactors, relays and industrial accessories.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are working on a residential wiring project, a commercial building installation or an industrial automation panel, we provide the right products at the right price with prompt delivery across Mumbai.
              </p>
              <Link to="/about">
                <Button variant="primary">
                  Learn More About Us
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
