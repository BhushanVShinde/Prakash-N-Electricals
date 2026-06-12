import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeading from '../SectionHeading'
import ScrollAnimation from '../ScrollAnimation'
import Button from '../Button'
import { products } from '../../data/products'

const ProductCategoriesPreview = () => {
  const featured = products.slice(0, 6)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <SectionHeading
            eyebrow="Product Categories"
            title="Complete Range of Electrical Components"
            subtitle="From basic wiring accessories to industrial switchgear — find everything you need for your electrical projects."
          />
        </ScrollAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((product, index) => (
            <ScrollAnimation key={product.id} delay={index * 80} animation="fade-up">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="h-36 bg-gray-100 overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 text-primary" fill="currentColor">
                        <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation animation="fade-up" className="text-center">
          <Link to="/products">
            <Button variant="primary">
              Browse All Products
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default ProductCategoriesPreview
