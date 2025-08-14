import Pana from '../../assets/bodySectionPNGs/pana.png'

const Calender = () => {
  return (
        <section className='w-full px-5 md:py-16 flex flex-col gap-10 md:flex-row justify-center items-center'>
    
          <img src={Pana} alt="Pana" className=' md:w-1/4 ' />
    
          <div className='md:w-1/3 flex flex-col gap-4 md:gap-8'>
            <h2 className='font-semibold text-4xl text-grayHead leading-11'>The unseen of spending three years at Pixelgrade</h2>
            <p className='text-sm leading-5 font-normal text-grayPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="w-36 py-2.5 bg-primary text-white rounded-md ">Learn More</button>
          </div>
        </section>
  )
}

export default Calender