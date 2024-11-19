import { Middleware, configureStore } from '@reduxjs/toolkit'

import answersReducer from './answersSlice/slice'

const localStorageMiddleware: Middleware = storeAPI => next => action => {
  const result = next(action)
  try {
    const state = storeAPI.getState()
    localStorage.setItem('answers', JSON.stringify(state?.answers))
  } catch (e) {
    console.error('Could not save state', e)
  }
  return result
}

export const makeStore = () => {
  return configureStore({
    reducer: {
      answers: answersReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
