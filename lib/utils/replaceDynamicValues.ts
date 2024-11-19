import questionnaire from 'public/config.json'
import { QuestionnaireType, SelectInputType } from 'types/data'

import { AnswersState } from 'lib/store/answersSlice/slice'

export const replaceDynamicValues = (text: string, answers: AnswersState['answers']) => {
  return text.replace(/\{(\w+)\}/g, (_, key) => {
    const data = (questionnaire as QuestionnaireType).screens

    const foundedScreen = data?.find(({ id }) => key === id)?.inputProperties as SelectInputType

    return foundedScreen?.options?.find(({ value }) => answers[key] === value)?.dynamicValue ?? ''
  })
}
