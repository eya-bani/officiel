import React from 'react'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'
import Home from './Home'
import Show from './Show'

const Allpages = () => {
  return (
    <div className='all'>
      <Navbar/>
      <Home/>
      <Show/>
      <Footer/>
    </div>
  )
}

export default Allpages
