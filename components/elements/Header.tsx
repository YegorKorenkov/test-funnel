import React from 'react'

import Logo from 'components/icons/Logo'

const Header = () => {
  return (
    <header className='w-full py-5 flex justify-center items-center container relative'>
      <div id='back-button-root' className='absolute top-1/2 left-8 -translate-y-1/2 flex items-center'></div>

      <Logo />
    </header>
  )
}

export default Header
