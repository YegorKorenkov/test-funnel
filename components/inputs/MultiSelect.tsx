import { FC, useEffect, useState } from 'react'
import { SelectInputType } from 'types/data'

import { Button } from 'components/elements/Button'
import { TextField } from 'components/elements/TextField'

type Props = SelectInputType & {
  selectedValue: string[] | undefined | null
  onSubmit: (v: string[]) => void
}

const MultiSelect: FC<Props> = ({ options, selectedValue, onSubmit }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(selectedValue || [])
  const [otherValue, setOtherValue] = useState<string | undefined>(undefined)

  const onSelect = (v: string) => {
    if (v === 'Other') {
      setOtherValue(otherValue !== undefined ? undefined : '')
      return
    }

    if (selectedValues?.includes(v)) {
      setSelectedValues(prev => prev?.filter(value => v !== value))
    } else {
      setSelectedValues(prev => [...prev, v])
    }
  }

  const submit = () => {
    const valuesForSubmit = [...selectedValues]

    if (!!otherValue) {
      valuesForSubmit.push(otherValue)
    }

    onSubmit(valuesForSubmit)
  }

  useEffect(() => {
    if (selectedValue) {
      const optionsValues = options.map(({ value }) => value)

      setSelectedValues(selectedValue.filter(v => optionsValues.includes(v)))

      setOtherValue(selectedValue.filter(v => !optionsValues.includes(v))[0] || '')
    }
  }, [selectedValue])

  return (
    <div>
      {options.map(({ value, label }) => (
        <Button
          key={value}
          className='mb-4 last-of-type:mb-0'
          selected={value !== 'Other' ? selectedValues?.includes(value) : otherValue !== undefined}
          onClick={() => onSelect(value)}
        >
          {label}
        </Button>
      ))}

      {otherValue !== undefined && (
        <TextField value={otherValue} onChange={e => setOtherValue(e.target.value)} placeholder='Please clarify' />
      )}

      <Button onClick={submit} className='bg-green-100 mt-8'>
        Next
      </Button>
    </div>
  )
}

export default MultiSelect
