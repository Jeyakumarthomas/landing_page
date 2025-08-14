import React from 'react'
import Right from '../../assets/bodySectionPNGs/Right.png'
import Down from '../../assets/bodySectionPNGs/Down.png'

const footerFrame = () => {
  return (
    <div className=' flex flex-col items-center'>
        <h2 className=' w-[887px] py-8 flex flex-col gap-8 font-semibold text-[64px] leading-[76px] text-[#263228] text-center'>Pellentesque suscipit fringilla libero eu.</h2>
        <div className='py-3.5 px-8 flex items-center bg-primary rounded-sm gap-2 '>
            <button className='text-white leading-3 font-medium'>Get a Demo</button>
            <img src={Down} alt="" className='w-4 h-4 text-white'/></div>
    </div>
  )
}

export default footerFrame