import questionnaire from 'public/config.json'

export const getStartRoute = () => {
  return questionnaire.screens[0].id || ''
}

export const getLastRoute = () => {
  return questionnaire.screens[questionnaire.screens.length - 1].id || ''
}
