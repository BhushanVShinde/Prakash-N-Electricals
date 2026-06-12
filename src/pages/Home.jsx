import MetaTags from '../components/MetaTags'
import Hero from '../components/home/Hero'
import AboutPreview from '../components/home/AboutPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import BrandsPreview from '../components/home/BrandsPreview'
import ProductCategoriesPreview from '../components/home/ProductCategoriesPreview'
import InquiryCTA from '../components/home/InquiryCTA'

const Home = () => {
  return (
    <>
      <MetaTags page="home" />
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <BrandsPreview />
      <ProductCategoriesPreview />
      <InquiryCTA />
    </>
  )
}

export default Home
