import ScrollAnimation from './ScrollAnimation'

const BrandCard = ({ brand, index = 0 }) => {
  return (
    <ScrollAnimation delay={index * 80} animation="scale">
      <article className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${brand.color}15` }}
        >
          <span className="text-2xl font-black tracking-tighter" style={{ color: brand.color }}>
            {brand.name.charAt(0)}
          </span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">{brand.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{brand.description}</p>
        <div
          className="mt-5 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-full"
          style={{ backgroundColor: brand.color }}
        />
      </article>
    </ScrollAnimation>
  )
}

export default BrandCard
