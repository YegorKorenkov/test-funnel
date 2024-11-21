import { config } from 'configuration/config'

export const getStartRoute = () => {
  return config.screens[0].id || ''
}

export const getLastRoute = () => {
  return config.screens[config.screens.length - 1].id || ''
}
