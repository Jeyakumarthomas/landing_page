import React from 'react';
import Pana from '../../assets/bodySectionPNGs/pana.png'

const Calender = () => {
  return (
    <div className='border-2 w-full flex gap-8 justify-between overflow-y-auto px-36'>

        {/* left side */}
      <div className='border-2 flex justify-center w-1/2 '>
          <img src={Pana} alt="Pana Image" className='w-[442] h-[433] border-2' />
      </div>

        {/* right side */}
        <div className='border-2 w-1/2 flex flex-col gap-8 justify-around items-center '>
        <div className='border-2 flex flex-col gap-4 w-[601px] '>
            <div className='flex flex-col gap-4 '>
            <h2 className='font-semibold text-4xl text-grayHead leading-11'>How to design your site footer like we did</h2>
            <p className='text-sm leading-5 font-normal text-grayPara'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
         </div>
                <button className="bg-primary text-white py-2.5 rounded-md w-36">Learn More</button>
        </div>
        </div>
         

    </div>
  )
}

export default Calender