'use client'

import { useEffect } from 'react'

import { useAppDispatch } from 'lib/hooks/redux'
import { initState } from 'lib/store/answersSlice/slice'

const StateInitializer: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const answers = localStorage.getItem('answers')

      if (answers) {
        dispatch(initState(JSON.parse(answers)))
      }
    }
  }, [dispatch])

  return null
}

export default StateInitializer
