import { FC } from 'react'

import { Button } from 'components/elements/Button'

type Props = {
  title?: string
  subText?: string
  buttonTitle: string
  onSubmit: () => void
}

const HowItWorkScreen: FC<Props> = ({ title, subText, buttonTitle, onSubmit }) => {
  return (
    <div>
      {title && <h3 className='text-2xl font-bold mb-5 text-center dark:text-light-text'>{title}</h3>}

      {subText && <p className='text-base text-center dark:text-light-text mb-8'>{subText}</p>}

      <Button onClick={onSubmit} className='dark:text-purple'>
        {buttonTitle}
      </Button>
    </div>
  )
}

export default HowItWorkScreen
