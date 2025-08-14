import React from 'react'
import Logo1 from '../assets/clientsLogos/Logo1.png'
import Logo2 from '../assets/clientsLogos/Logo2.png'
import Logo3 from '../assets/clientsLogos/Logo3.png'
import Logo4 from '../assets/clientsLogos/Logo4.png'
import Logo5 from '../assets/clientsLogos/Logo5.png'
import Logo6 from '../assets/clientsLogos/Logo6.png'
import Logo7 from '../assets/clientsLogos/Logo7.png'

const Homeclients = () => {
  return (
    <div className='flex flex-col w-full gap-4'>

        {/* client text  */}
        <div id="Service" className=' flex flex-col gap-2 items-center'>
            <div className='text-grayHead font-semibold text-4xl '>Our Clients</div>
            <div className='text-grayPara'>We have been working with some Fortune 500+ clients</div>
            <div className='flex justify-between w-3/4 items-center mt-3'>
              <a href="#"><img src={Logo1} alt="Logo1" /></a>
              <a href="#"><img src={Logo2} alt="Logo2" /></a>
              <a href="#"><img src={Logo3} alt="Logo3" /></a>
              <a href="#"><img src={Logo4} alt="Logo4" /></a>
              <a href="#"><img src={Logo5} alt="Logo5" /></a>
              <a href="#"><img src={Logo6} alt="Logo6" /></a>
              <a href="#"><img src={Logo7} alt="Logo7" /></a>        
            </div>
        </div>

        {/* client logos */}
       
          
        
        
    </div>
    
    
  )
}

export default Homeclients