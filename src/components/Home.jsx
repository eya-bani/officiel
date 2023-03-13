import React from 'react'
import video from "/src/assets/video.webm"
const Home = () => {
  return (
    <div className='home1'>
      <video autoPlay={true} controls loop muted>
   <source  src={video}/>
      </video>
    </div>
  )
}

export default Home
