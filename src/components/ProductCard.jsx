import { useState } from 'react'
import {
  HiOutlineLightningBolt,
  HiOutlineCube,
  HiOutlineSwitchHorizontal,
  HiOutlineChip,
  HiOutlineCog,
  HiOutlineCollection,
  HiOutlineTemplate,
  HiOutlineSun,
  HiOutlineLink,
  HiOutlineViewGrid,
} from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import Button from './Button'
import ScrollAnimation from './ScrollAnimation'
import LoadingSpinner from './LoadingSpinner'
import { getWhatsAppLink } from '../data/business'

const iconMap = {
  cable: HiOutlineLink,
  mcb: HiOutlineLightningBolt,
  mccb: HiOutlineCube,
  switch: HiOutlineSwitchHorizontal,
  socket: HiOutlineTemplate,
  contactor: HiOutlineCog,
  relay: HiOutlineChip,
  industrial: HiOutlineCollection,
  led: HiOutlineSun,
  gland: HiOutlineLink,
  terminal: HiOutlineViewGrid,
  conduit: HiOutlineLink,
  tray: HiOutlineViewGrid,
  db: HiOutlineTemplate,
  panel: HiOutlineCollection,
}

const ProductCard = ({ product, index = 0 }) => {
  const Icon = iconMap[product.icon] || HiOutlineCube
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const inquiryMessage = `Hello, I am interested in ${product.name}. Please share availability and quotation.`
  const showImage = product.image && !imageError

  return (
    <ScrollAnimation delay={index * 80} animation="fade-up">
      <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          {showImage ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <LoadingSpinner size="md" />
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="h-full bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
                <Icon className="w-10 h-10 text-white" />
              </div>
            </div>
          )}
          <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full">
            Wholesale
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{product.description}</p>
          <Button
            href={getWhatsAppLink(inquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="sm"
            className="w-full"
          >
            <FaWhatsapp className="w-4 h-4" />
            Inquiry on WhatsApp
          </Button>
        </div>
      </article>
    </ScrollAnimation>
  )
}

export default ProductCard
