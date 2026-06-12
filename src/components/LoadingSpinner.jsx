const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  return (
    <div className={`flex items-center justify-center ${className}`} role="status">
      <div
        className={`${sizes[size]} border-primary/20 border-t-primary rounded-full animate-spin`}
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadingSpinner
