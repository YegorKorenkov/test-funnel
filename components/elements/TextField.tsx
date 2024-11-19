import cn from 'classnames'
import { FC } from 'react'

export const TextField: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      placeholder='Enter an answer'
      {...props}
      className={cn(
        'w-full p-5 text-base outline-none rounded-md border border-grey-main placeholder:text-gray-300 hover:border-gray-300 transition-colors focus:border-gray-400',
        {
          [`${className}`]: className
        }
      )}
    />
  )
}
