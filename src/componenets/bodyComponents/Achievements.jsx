import Img1 from '../../assets/bodySectionPNGs/Vector1.png'
import Img2 from '../../assets/bodySectionPNGs/Vector2.png'
import Img3 from '../../assets/bodySectionPNGs/Vector3.png'
import Img4 from '../../assets/bodySectionPNGs/Vector4.png'

const Achievements = () => {
  return (

    <section id='Product' className='w-full px-4 md:px-16 md:py-36 flex flex-col md:flex-row gap-10 md:gap-0 justify-around md:items-center bg-silver '>
       
       {/* Left */}
        <div className='md:w-1/2 flex flex-col gap-2' >
            <h2 className='font-semibold text-4xl text-grayHead leading-11'>Helping a local<br/> <span className='text-primary'>business reinvent itself</span></h2>
            <p className=' font-normal text-grayClientBG leading-6'>We reached here with our hard work and dedication</p>
        </div>

        {/* Right */}

        <div className='md:w-1/2 flex justify-center'>
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
    </section>

  )
}

export default Achievements