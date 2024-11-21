import { config } from 'configuration/config'
import { QuestionnaireType } from 'types/data'

export const fetchScreenDataById = (id: string | undefined) => {
  return (config as QuestionnaireType).screens.find(screen => screen.id === id)
}
