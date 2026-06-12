import { useEffect, useRef, useState } from 'react'

const ScrollAnimation = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  const animations = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'fade-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    'fade-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    scale: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animations[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
