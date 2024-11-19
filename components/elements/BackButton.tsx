'use client'

import { useRouter } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import BackIcon from 'components/icons/BackIcon'

const BackButton: FC<{ prevHref: string }> = ({ prevHref }) => {
  const { push } = useRouter()

  const [backRoot, setBackRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setBackRoot(document.getElementById('back-button-root'))
  }, [])

  if (!backRoot) return null

  return ReactDOM.createPortal(
    <button onClick={() => push(prevHref)} className='border-none'>
      <BackIcon />
    </button>,

    backRoot
  )
}

export default BackButton
