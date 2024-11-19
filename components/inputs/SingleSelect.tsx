import { FC } from 'react'
import { SelectInputType } from 'types/data'

import { Button } from 'components/elements/Button'

type Props = SelectInputType & {
  selectedValue: string | undefined | null
  onSelect: (answer: string) => void
}

const SingleSelect: FC<Props> = ({ options, selectedValue, onSelect }) => {
  return (
    <div>
      {options.map(({ value, label }) => (
        <Button
          key={value}
          className='mb-4 last-of-type:mb-0'
          selected={value === selectedValue}
          onClick={() => onSelect(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export default SingleSelect
