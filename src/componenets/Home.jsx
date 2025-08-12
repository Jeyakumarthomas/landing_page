import React from 'react'
import './Home.css'
import Homehero from './Homehero'
import Homeclients from './Homeclients'
import Homecommunity from './Homecommunity'

const Home = () => {
  return (
    <div className=' flex flex-col gap-10 justify-center items-center'>

        {/* Hero section */}
        <Homehero/>
        
        {/* Clients */}
        <Homeclients/>

        {/* Community */}
        <Homecommunity/>
    </div>
  )
}

export default Home