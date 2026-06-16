import {
  HiShieldCheck,
  HiLightBulb,
  HiUserGroup,
  HiLocationMarker,
} from 'react-icons/hi'
import MetaTags from '../components/MetaTags'
import SectionHeading from '../components/SectionHeading'
import ScrollAnimation from '../components/ScrollAnimation'
import InquiryCTA from '../components/home/InquiryCTA'
import { business } from '../data/business'

const milestones = [
  {
    title: 'Wholesale Focus',
    description:
      'Dedicated B2B operations catering exclusively to contractors, electricians, builders and industrial clients.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Every product sourced through authorised channels with genuine brand packaging and warranty support.',
  },
  {
    title: 'Local Expertise',
    description:
      "Deep understanding of Mumbai's construction and industrial landscape with fast local delivery.",
  },
  {
    title: 'Customer First',
    description:
      'Personalised service from inquiry to delivery, building long-term relationships with our trade partners.',
  },
]

const About = () => {
  return (
    <>
      <MetaTags page="about" />
      <section className="py-16 bg-primary dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">About Us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Company Profile</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Building trust in Mumbai&apos;s electrical trade through quality products and reliable wholesale service.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation animation="fade-right">
              <SectionHeading eyebrow="Who We Are" title="Prakash N Electricals" align="left" />
              <div className="space-y-4 text-gray-600 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-primary dark:text-white">Prakash N Electricals</strong> is a professionally managed
                  electrical spare parts wholesaler based in Charkop Sector 9, Kandivali West, Mumbai. Under the
                  leadership of <strong className="text-primary dark:text-white">{business.owner}</strong>, we have established
                  ourselves as a dependable supply partner for the electrical trade community.
                </p>
                <p>
                  Our business specialises in wholesale distribution of electrical components including wires and
                  cables, circuit breakers (MCB & MCCB), switches and sockets, contactors, relays, LED drivers,
                  cable glands, terminal blocks and a comprehensive range of industrial electrical accessories.
                </p>
                <p>
                  We serve residential contractors, commercial builders, facility managers, panel builders and
                  industrial maintenance teams across Mumbai and surrounding areas.
                </p>
                <p>
                  As a GST-registered entity (GSTIN: {business.gstin}), we provide proper tax invoices and
                  documentation for all transactions.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={100}>
              <div className="bg-background dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-6">Business Information</h3>
                <dl className="space-y-4">
                  <div className="flex gap-3">
                    <HiUserGroup className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold text-primary dark:text-white">Owner</dt>
                      <dd className="text-gray-600 dark:text-slate-300">{business.owner}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <HiShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold text-primary dark:text-white">GSTIN</dt>
                      <dd className="text-gray-600 dark:text-slate-300">{business.gstin}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <HiLocationMarker className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold text-primary dark:text-white">Location</dt>
                      <dd className="text-gray-600 dark:text-slate-300">{business.address.full}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <HiLightBulb className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-sm font-semibold text-primary dark:text-white">Specialisation</dt>
                      <dd className="text-gray-600 dark:text-slate-300">
                        Electrical spare parts wholesale — residential, commercial & industrial
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <SectionHeading
              eyebrow="Our Values"
              title="What Drives Our Business"
              subtitle="Four pillars that define our approach to serving the electrical trade."
            />
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 gap-6">
            {milestones.map((item, index) => (
              <ScrollAnimation key={item.title} delay={index * 80} animation="fade-up">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 transition-all duration-300 dark:hover:scale-[1.03] dark:hover:border-indigo-500/50 dark:hover:shadow-[0_0_28px_rgba(79,70,229,0.35)]">
                  <div className="w-10 h-10 rounded-lg bg-secondary text-white flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <InquiryCTA />
    </>
  )
}

export default About
