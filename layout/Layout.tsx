import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export const Layout = ({children}) => {
  return (
    <div className='max-w-[1280px] w-full m-auto'>
     <Header/>
     <main>{children}</main>
     <Footer/>
    </div>
  )
}
