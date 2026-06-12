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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-10">
          {brands.map((brand, index) => (
            <ScrollAnimation key={brand.id} delay={index * 60} animation="scale">
              <div className="bg-background rounded-xl p-5 text-center border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                <div
                  className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${brand.color}15` }}
                >
                  <span className="text-lg font-black" style={{ color: brand.color }}>
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-bold text-primary">{brand.name}</p>
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
