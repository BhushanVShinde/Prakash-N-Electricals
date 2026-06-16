import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiDocumentText,
} from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import MetaTags from '../components/MetaTags'
import ScrollAnimation from '../components/ScrollAnimation'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
import { business, getPhoneLink, getWhatsAppLink } from '../data/business'

const Contact = () => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${business.address.coords}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <>
      <MetaTags page="contact" />
      <section className="py-16 bg-primary dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Get in Touch</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Reach out for product inquiries, bulk quotations or visit our store in Kandivali West, Mumbai.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-20 bg-background dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <ScrollAnimation animation="fade-right">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                  <h2 className="text-xl font-bold text-primary dark:text-white mb-6">Contact Details</h2>
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <HiPhone className="w-5 h-5 text-primary dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary dark:text-white">Phone</p>
                        {business.phones.map((phone) => (
                          <a
                            key={phone}
                            href={getPhoneLink(phone)}
                            className="block text-gray-600 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary transition-colors"
                          >
                            +91 {phone}
                          </a>
                        ))}
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <HiMail className="w-5 h-5 text-primary dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary dark:text-white">Email</p>
                        <a
                          href={`mailto:${business.email}`}
                          className="text-gray-600 dark:text-slate-300 hover:text-secondary transition-colors break-all"
                        >
                          {business.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <HiLocationMarker className="w-5 h-5 text-primary dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary dark:text-white">Address</p>
                        <address className="not-italic text-gray-600 dark:text-slate-300 leading-relaxed">
                          {business.address.line1}<br />
                          {business.address.line2}<br />
                          {business.address.line3}<br />
                          {business.address.line4}<br />
                          {business.address.line5}<br />
                          {business.address.line6}
                        </address>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <HiDocumentText className="w-5 h-5 text-primary dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary dark:text-white">GSTIN</p>
                        <p className="text-gray-600 dark:text-slate-300">{business.gstin}</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-slate-700">
                    <Button
                      href={getWhatsAppLink('Hello, I would like to get in touch regarding your products.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="whatsapp"
                      size="sm"
                      className="flex-1"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      WhatsApp
                    </Button>
                    <Button href={getPhoneLink(business.phones[0])} variant="primary" size="sm" className="flex-1">
                      <HiPhone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-right" delay={100}>
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                  <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-primary dark:text-white">Our Location</h3>
                      <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Near Swami Samarth Mandir, Kandivali West</p>
                    </div>
                    <a
                      href={business.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-indigo-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                    >
                      <HiLocationMarker className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                  <div className="aspect-video bg-gray-100 dark:bg-slate-700 relative">
                    <iframe
                      title="Prakash N Electricals Location"
                      src={mapEmbedUrl}
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:col-span-3">
              <ScrollAnimation animation="fade-left">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-primary dark:text-white mb-2">Send an Inquiry</h2>
                  <p className="text-gray-600 dark:text-slate-300">
                    Fill out the form below and we will respond to your requirement at the earliest.
                  </p>
                </div>
                <ContactForm />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
