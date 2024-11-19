import React, { FC, useEffect, useState } from 'react'

import { Button } from 'components/elements/Button'
import { TextField } from 'components/elements/TextField'

type Props = {
  value: string | undefined
  onSubmit: (value: string) => void
  type: string
  inputProps: {
    placeholder: string
  }
}

const TextInput: FC<Props> = ({ value, onSubmit, type, inputProps }) => {
  const [inputValue, setInputValue] = useState(value || '')
  const [error, setError] = useState('')

  const onClick = () => {
    if (!inputValue.trim()) {
      setError('Please enter an answer')

      return
    }

    onSubmit(inputValue)
  }

  useEffect(() => {
    if (value) setInputValue(value)
  }, [value])

  return (
    <div>
      <TextField
        type={type}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className='mb-1'
        {...inputProps}
      />
      {error && <div className='text-destructive'>{error}</div>}

      <Button className='mt-4' onClick={onClick}>
        Next
      </Button>
    </div>
  )
}

export default TextInput
