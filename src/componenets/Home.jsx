import React from 'react'
import './Home.css'
import Homehero from './Homehero'
import Homeclients from './Homeclients'

const Home = () => {
  return (
    <div className=' flex flex-col gap-10 justify-center items-center'>

        {/* Hero section */}
        <Homehero/>
        
        {/* Clients */}
        <Homeclients/>

        {/* Community */}
        <div>community</div>
    </div>
  )
}

export default Home