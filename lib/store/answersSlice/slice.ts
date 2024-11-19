import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type AnswersType = {
  [key: string]: string | string[]
}

export interface AnswersState {
  answers: AnswersType
}

const initialState: AnswersState = {
  answers: {}
}

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<{ screenId: string; answer: string | string[] }>) => {
      state.answers[action.payload.screenId] = action.payload.answer
    },
    initState: (state, action: PayloadAction<{ answers: AnswersType }>) => {
      state.answers = { ...action.payload.answers }
    }
  }
})

export const { addAnswer, initState } = answersSlice.actions

export default answersSlice.reducer
