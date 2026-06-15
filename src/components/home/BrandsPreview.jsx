import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeading from '../SectionHeading'
import ScrollAnimation from '../ScrollAnimation'
import Button from '../Button'
import { brands } from '../../data/brands'

const BrandsPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <SectionHeading
            eyebrow="Our Brands"
            title="Authorised Supply from Leading Manufacturers"
            subtitle="We stock and supply genuine products from India's most trusted electrical brands for every application."
          />
        </ScrollAnimation>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
          {brands.map((brand, index) => (
            <ScrollAnimation key={brand.id} delay={index * 60} animation="scale">
              <div className="h-full bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] flex items-center justify-center mb-5 overflow-hidden">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className="w-full h-full rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${brand.color}15` }}
                    >
                      <span className="text-5xl font-black" style={{ color: brand.color }}>
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-lg lg:text-xl font-bold text-primary leading-snug">
                  {brand.name}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation animation="fade-up" className="text-center">
          <Link to="/brands">
            <Button variant="outline">
              View All Brands
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default BrandsPreview
