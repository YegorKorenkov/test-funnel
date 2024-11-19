'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAppDispatch } from 'lib/hooks/redux'
import { initState } from 'lib/store/answersSlice/slice'
import { getStartRoute } from 'lib/utils/getRoute'

const StateInitializer: React.FC = () => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const answers = localStorage.getItem('answers')

      if (answers) {
        dispatch(initState(JSON.parse(answers)))
      } else {
        push(`/${getStartRoute()}`)
      }
    }
  }, [dispatch])

  return null
}

export default StateInitializer
