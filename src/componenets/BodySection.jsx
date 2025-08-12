import React from 'react'
import Unlock from '../componenets/bodyComponents/Unlock.jsx'

const BodySection = () => {
  return (
    <div className='border-2 flex flex-col gap-12 overflow-y-auto'>
      
          <Unlock/>
        
        <div className=''>achievements</div>
        <div className=''>calender</div>
        <div className=''>customer's</div>
        <div className=''>community update</div>
    </div>
  )
}

export default BodySection