import MetaTags from '../components/MetaTags'
import SectionHeading from '../components/SectionHeading'
import ScrollAnimation from '../components/ScrollAnimation'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Products = () => {
  return (
    <>
      <MetaTags page="products" />
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Products</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Electrical Components & Spare Parts
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Explore our wholesale product categories. Click inquiry to get pricing and availability via WhatsApp.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <SectionHeading
              eyebrow="Categories"
              title="Complete Product Range"
              subtitle="All products available at competitive B2B wholesale rates. Bulk orders welcome."
            />
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
