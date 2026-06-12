const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignment =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center'

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-widest text-secondary">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-gray-600'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-16 rounded-full bg-secondary ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  )
}

export default SectionHeading
