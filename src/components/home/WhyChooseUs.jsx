import {
  HiShieldCheck,
  HiCube,
  HiCurrencyRupee,
  HiSupport,
  HiTruck,
  HiUserGroup,
} from 'react-icons/hi'
import SectionHeading from '../SectionHeading'
import ScrollAnimation from '../ScrollAnimation'
import { whyChooseUs } from '../../data/whyChooseUs'

const iconMap = {
  quality: HiShieldCheck,
  stock: HiCube,
  pricing: HiCurrencyRupee,
  support: HiSupport,
  delivery: HiTruck,
  service: HiUserGroup,
}

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for B2B Electrical Professionals"
            subtitle="We combine product authenticity, competitive wholesale pricing and reliable service to support your projects from start to finish."
          />
        </ScrollAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.id] || HiShieldCheck
            return (
              <ScrollAnimation key={item.id} delay={index * 80} animation="fade-up">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-700 h-full group dark:hover:scale-[1.03] dark:hover:border-indigo-500/50 dark:hover:shadow-[0_0_28px_rgba(79,70,229,0.35)]">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-indigo-500/20 flex items-center justify-center mb-5 group-hover:bg-primary dark:group-hover:bg-indigo-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary dark:text-indigo-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
