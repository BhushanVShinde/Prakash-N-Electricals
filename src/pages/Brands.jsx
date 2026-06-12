import MetaTags from '../components/MetaTags'
import SectionHeading from '../components/SectionHeading'
import ScrollAnimation from '../components/ScrollAnimation'
import BrandCard from '../components/BrandCard'
import InquiryCTA from '../components/home/InquiryCTA'
import { brands } from '../data/brands'

const Brands = () => {
  return (
    <>
      <MetaTags page="brands" />
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Brands</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Trusted Manufacturer Partners
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                We partner with India&apos;s leading electrical brands to deliver authentic, high-quality products for every project requirement.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <SectionHeading
              eyebrow="Authorised Supply"
              title="Brands We Supply"
              subtitle="Genuine products with proper documentation for contractors, builders and industrial buyers."
            />
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </section>
      <InquiryCTA />
    </>
  )
}

export default Brands
