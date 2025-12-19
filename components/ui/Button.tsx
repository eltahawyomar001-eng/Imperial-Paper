'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'
import { forwardRef, ReactNode } from 'react'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: 'bg-primary-900 text-white hover:bg-primary-800',
      secondary: 'bg-white text-primary-900 border border-primary-200 hover:bg-primary-50 hover:border-primary-300',
      ghost: 'text-primary-600 hover:bg-primary-100 hover:text-primary-900',
      accent: 'bg-accent text-white hover:bg-accent-dark shadow-glow hover:shadow-glow-strong',
      icon: 'bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }

    const roundedness = variant === 'ghost' ? 'rounded-lg' : 'rounded-full'

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          roundedness,
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button

// Link styled as button
interface ButtonLinkProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
}: ButtonLinkProps) {
  const variants = {
    primary: 'bg-primary-900 text-white hover:bg-primary-800',
    secondary: 'bg-white text-primary-900 border border-primary-200 hover:bg-primary-50 hover:border-primary-300',
    ghost: 'text-primary-600 hover:bg-primary-100 hover:text-primary-900',
    accent: 'bg-accent text-white hover:bg-accent-dark shadow-glow hover:shadow-glow-strong',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const roundedness = variant === 'ghost' ? 'rounded-lg' : 'rounded-full'

  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        roundedness,
        className
      )}
      {...linkProps}
    >
      {children}
    </motion.a>
  )
}
