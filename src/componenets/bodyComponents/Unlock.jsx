import React from 'react'
import Frame1 from '../../assets/bodySectionPNGs/Frame1.png'

const Unlock = () => {
  return (
    // <section id="Feature" className='w-full px-36 flex gap-8 justify-between overflow-y-auto '>

    //     {/* left side */}
    //    <div className=' w-1/2 flex justify-center '>
    //     <img src={Frame1} alt="" className='w-[442] h-[433]' />
    //    </div>

    //     {/* right side */}
    //     <div className='w-1/2 flex flex-col gap-8 justify-around items-center '>
    //     <div className='flex flex-col gap-4 w-[601px] '>
    //         <div className='flex flex-col gap-4 '>
    //         <h2 className='font-semibold text-4xl text-grayHead leading-11'>The unseen of spending three years at Pixelgrade</h2>
    //         <p className='text-sm leading-5 font-normal text-grayPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
    //      </div>
    //             <button className="bg-primary text-white py-2.5 rounded-md w-36">Learn More</button>
    //     </div>
    //     </div>
         

    // </section>
    
    <section id='Feature' className='w-full px-5 md:py-16 flex flex-col md:gap-10 md:flex-row justify-center items-center'>

      <img src={Frame1} alt="Frame1" className=' md:w-1/4 ' />

      <div className='md:w-1/3 flex flex-col gap-4 md:gap-8'>
        <h2 className='font-semibold text-4xl text-grayHead leading-11'>The unseen of spending three years at Pixelgrade</h2>
        <p className='text-sm leading-5 font-normal text-grayPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <button className="w-36 py-2.5 bg-primary text-white rounded-md ">Learn More</button>
      </div>
    

    </section>
  )
}

export default Unlock