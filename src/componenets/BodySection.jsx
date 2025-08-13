import React from 'react'
import Unlock from '../componenets/bodyComponents/Unlock.jsx'
import Achievements from '../componenets/bodyComponents/Achievements.jsx'
import Calender from '../componenets/bodyComponents/Calender.jsx'

const BodySection = () => {
  return (
    <div className='border-2 flex flex-col gap-12 overflow-y-auto'>
      
          <Unlock/>
        
          <Achievements/>
       
          <Calender/>
        <div className=''>customer's</div>
        <div className=''>community update</div>
    </div>
  )
}

export default BodySection