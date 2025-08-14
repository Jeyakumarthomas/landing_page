import Illustration from '../assets/Illustration.png';

const Homehero = () => {
  return (
        <section className='w-full flex flex-col md:flex-row px-5 py-32 justify-center items-center bg-silver'>

          <div className='md:w-1/2 flex flex-col gap-4 md:gap-8'>
             <h1 className=' text-3xl font-medium md:text-6xl md:font-semibold text-grayHead leading-10 md:leading-16 '>Lessons and insights<br/> <span className='text-primary'>from 8 years</span></h1>
             <p className=' text-grayPara md:leading-6'>Where to grow your business as a photographer: site or social media?</p>
             <button className="w-32 py-2 md:py-3.5 px-8 bg-primary text-white rounded-md ">Register</button>
          </div>
        
          <img src={Illustration} alt="Illustration" className=' md:w-1/4' />
              
        </section>
  )
}

export default Homehero