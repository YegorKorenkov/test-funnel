import questionnaire from 'public/config.json'
import { QuestionnaireType } from 'types/data'

export const fetchScreenDataById = (id: string | undefined) => {
  return (questionnaire as QuestionnaireType).screens.find(screen => screen.id === id)
}
