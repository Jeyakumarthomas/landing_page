import React from 'react';
import Img1 from '../../assets/bodySectionPNGs/Vector1.png'
import Img2 from '../../assets/bodySectionPNGs/Vector2.png'
import Img3 from '../../assets/bodySectionPNGs/Vector3.png'
import Img4 from '../../assets/bodySectionPNGs/Vector4.png'

const Achievements = () => {
  return (
    <div className='border-2 flex justify-around items-center bg-silver px-16 py-36'>
       
       {/* Left side */}
        <div className= ' w-[540px] flex flex-col gap-2'>
            <h2 className=' text-grayHead font-semibold text-4xl leading-11'>Helping a local<br/> <span className='text-primary'>business reinvent itself</span></h2>
            <p className=' leading-6 font-normal text-grayClientBG'>We reached here with our hard work and dedication</p>
        </div>

        {/* Right Side */}
        <div className=' flex flex-col gap-10 justify-between'>
            <div className=' flex gap-[30px] w-[540px] justify-between'>
                <div className=' flex items-center gap-4 w-[225px]'>
                    <div className=' w-12 h-12 flex items-center '>
                        <img src={Img1} alt="vectorIcon" className='w-[46px] h-[31px]'/>
                    </div>    
                    <div>
                        <h3 className='font-bold text-[28px] leading-9 text-grayHead'>2,245,341</h3>
                        <p className='font-normal leading-6 text-grayPara'>Members</p>
                    </div>
                </div>
                <div className=' flex items-center gap-4 w-[225px]'>
                    <div className=' w-12 h-12 flex items-center '>
                        <img src={Img2} alt="vectorIcon" className='w-[32px] h-[30px]'/>
                    </div>    
                    <div>
                        <h3 className='font-bold text-[28px] leading-9 text-grayHead'>46,328</h3>
                        <p className='font-normal leading-6 text-grayPara'>clubs</p>
                    </div>
                </div>
            </div>
            <div className=' flex gap-[30px] w-[540px] justify-between'>
                <div className=' flex items-center gap-4 w-[225px]'>
                    <div className=' w-12 h-12 flex items-center '>
                        <img src={Img3} alt="vectorIcon" className='w-[32px] h-[36px]'/>
                    </div>    
                    <div>
                        <h3 className='font-bold text-[28px] leading-9 text-grayHead'>828,867</h3>
                        <p className='font-normal leading-6 text-grayPara'>Event Booking</p>
                    </div>
                </div>
                <div className=' flex items-center gap-4 w-[225px]'>
                    <div className=' w-12 h-12 flex items-center '>
                        <img src={Img4} alt="vectorIcon" className='w-[42px] h-[33px]'/>
                    </div>    
                    <div>
                        <h3 className='font-bold text-[28px] leading-9 text-grayHead'>1,926,,436</h3>
                        <p className='font-normal leading-6 text-grayPara'>Payments</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements