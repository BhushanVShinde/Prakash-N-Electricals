import ScrollAnimation from './ScrollAnimation'

const BrandCard = ({ brand, index = 0 }) => {
  return (
    <ScrollAnimation delay={index * 80} animation="scale">
      <article className="group bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 dark:border-slate-700 h-full flex flex-col items-center text-center dark:hover:scale-[1.03] dark:hover:border-indigo-500/50 dark:hover:shadow-[0_0_28px_rgba(79,70,229,0.35)]">
        <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] flex items-center justify-center mb-6 overflow-hidden">
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
              <span className="text-6xl font-black tracking-tighter" style={{ color: brand.color }}>
                {brand.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-primary dark:text-white mb-3">{brand.name}</h3>
        <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed flex-1">{brand.description}</p>
        <div
          className="mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-full"
          style={{ backgroundColor: brand.color }}
        />
      </article>
    </ScrollAnimation>
  )
}

export default BrandCard
