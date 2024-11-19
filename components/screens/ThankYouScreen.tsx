import questionnaire from 'public/config.json'
import { FC, useEffect } from 'react'

import { AnswersState } from 'lib/store/answersSlice/slice'
import { replaceDynamicValues } from 'lib/utils/replaceDynamicValues'

type Props = AnswersState & {
  title: string
}

const ThankYouScreen: FC<Props> = ({ answers, title }) => {
  useEffect(() => {
    localStorage.removeItem('answers')
  }, [])

  return (
    <div>
      <h3 className='text-2xl font-bold mb-6'>{title}</h3>

      {Object.entries(answers).map(answer => (
        <div key={answer[0]} className='mb-8 last-of-type:mb-0'>
          <p>Q:{replaceDynamicValues(questionnaire.screens.find(s => s.id === answer[0])?.question || '', answers)}</p>

          <p>A:{typeof answer[1] === 'object' ? answer[1].join(', ') : answer[1]}</p>
        </div>
      ))}
    </div>
  )
}

export default ThankYouScreen
