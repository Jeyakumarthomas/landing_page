import React from 'react';
import Illustration from '../assets/Illustration.png';

const Homehero = () => {
  return (
        // <div className='w-full bg-silver py-24 px-32 flex'>

        //     <div className=' w-1/2 flex justify-center'>
        //       <div className='flex flex-col justify-center gap-5 '>
        //         <h1 className='text-[64px] font-semibold text-grayHead leading-[76px] '>Lessons and insights<br/> <span className='text-primary'>from 8 years</span></h1>
        //         <p className=' text-grayPara leading-6'>Where to grow your business as a photographer: site or social media?</p>
        //         <button className="w-32 py-3.5 px-8 bg-primary text-white rounded-md ">Register</button>
        //       </div>
        //     </div>

        //     <div className='w-1/2 flex justify-center  '>
        //       <div className='w-[391-px] h-[407px]'>
        //         <img src={Illustration} alt="Illustration"  />
        //       </div>
        //     </div>
            
        // </div>  

        <section className='w-full flex flex-col md:flex-row px-5 py-32 justify-center items-center bg-silver'>

          <div className='md:w-1/2 flex flex-col gap-8'>
             <h1 className='text-6xl font-semibold text-grayHead leading-16 '>Lessons and insights<br/> <span className='text-primary'>from 8 years</span></h1>
             <p className=' text-grayPara leading-6'>Where to grow your business as a photographer: site or social media?</p>
             <button className="w-32 py-3.5 px-8 bg-primary text-white rounded-md ">Register</button>
          </div>
        
          <img src={Illustration} alt="Illustration" className='md:w-1/4' />
          
           
        </section>
  )
}

export default Homehero