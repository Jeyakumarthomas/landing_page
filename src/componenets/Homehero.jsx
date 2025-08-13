import React from 'react';
import Illustration from '../assets/Illustration.png';

const Homehero = () => {
  return (
        <div className='flex justify-between w-full bg-silver py-24 px-32'>

            <div className='flex w-1/2 justify-center'>
              <div className='flex flex-col justify-center gap-5 '>
                <h1 className='font-semibold text-[64px] leading-[76px] text-grayHead'>Lessons and insights<br/> <span className='text-primary'>from 8 years</span></h1>
                <p className='leading-6 text-grayPara'>Where to grow your business as a photographer: site or social media?</p>
                <button className="bg-primary text-white py-3.5 px-8 rounded-md w-32">Register</button>
              </div>
            </div>

            <div className='flex justify-center w-1/2 '>
              <div className='w-[391-px] h-[407px]'>
                <img src={Illustration} alt="Illustration"  />
              </div>
            </div>
        </div>
  )
}

export default Homehero