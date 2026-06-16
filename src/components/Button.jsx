const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary shadow-md hover:shadow-lg',
    secondary:
      'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary shadow-md hover:shadow-lg',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-500 dark:hover:border-indigo-500 dark:hover:text-white dark:focus-visible:ring-indigo-400',
    ghost:
      'text-primary hover:bg-primary/10 focus-visible:ring-primary dark:text-indigo-300 dark:hover:bg-indigo-500/15 dark:focus-visible:ring-indigo-400',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20bd5a] focus-visible:ring-[#25D366] shadow-md hover:shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
