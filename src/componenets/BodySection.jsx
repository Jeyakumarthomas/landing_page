import React from 'react'
import Unlock from '../componenets/bodyComponents/Unlock.jsx'
import Achievements from '../componenets/bodyComponents/Achievements.jsx'
import Calender from '../componenets/bodyComponents/Calender.jsx'
import Customers from './bodyComponents/Customers.jsx'
import CommunityUpdates from './bodyComponents/CommunityUpdates.jsx'

const BodySection = () => {
  return (
    <div className=' flex flex-col gap-12 overflow-y-auto'>
      
          <Unlock/>
        
          <Achievements/>
       
          <Calender/>

          <Customers/>

          <CommunityUpdates/>
    </div>
  )
}

export default BodySection