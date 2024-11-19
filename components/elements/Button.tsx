import cn from 'classnames'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  selected?: boolean
  onClick: () => void
  className?: string
}

export const Button: FC<Props> = ({ children, selected, onClick, className }) => {
  return (
    <button
      className={cn(
        'w-full flex items-center justify-center transition-shadow rounded-xl p-5 bg-light-blue text-dark-text border border-grey-main hover:shadow-md',
        {
          'bg-main-gradient text-light-text': selected,
          [`${className}`]: className
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
