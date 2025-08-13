import React from 'react';
import Image1 from '../../assets/bodySectionPNGs/image1.png';
import Image2 from '../../assets/bodySectionPNGs/image2.png';
import Image3 from '../../assets/bodySectionPNGs/image3.png';

const CommunityUpdates = () => {
  return (
    <div className='border-2 w-full flex flex-col gap-4 items-center'>
        {/* Top */}
        <div className='border-2 flex flex-col w-[1110px] min-h-[124px] items-center'>
            <h2 className='font-semibold text-4xl leading-11 text-center text-grayHead'>Caring is the new marketing</h2>
            <p className="w-[628px] h-[72px] font-normal  leading-6 text-center text-grayPara">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>

        {/* Bottom*/}
        <div className=' px-36 w-full flex justify-around gap-8'>
            <div className=' w-[368px] h-[366px]'>
                <div className=' w-[368px] h-[286px] flex flex-col items-center rounded-lg relative'>
                    <img src={Image1} alt="" />
                    <div className='p-4 min-w-[317px] min-h-[176px] flex flex-col gap-4 rounded-lg bg-[#ABBED1]  opacity-100 absolute top-45 shadow-lg'></div>
                </div>
            </div>
            <div className=' w-[368px] h-[366px]'>
                <div className=' w-[368px] h-[286px] flex flex-col items-center rounded-lg relative'>
                    <img src={Image2} alt="" />
                    <div className='p-4 min-w-[317px] min-h-[176px] flex flex-col gap-4 rounded-lg bg-[#ABBED1]  opacity-100 absolute top-45 shadow-lg'></div>
                </div>
            </div>
            <div className=' w-[368px] h-[366px]'>
                <div className=' w-[368px] h-[286px] flex flex-col items-center rounded-lg relative'>
                    <img src={Image3} alt="" />
                    <div className='p-4 min-w-[317px] min-h-[176px] flex flex-col gap-4 rounded-lg bg-[#ABBED1]  opacity-100 absolute top-45 shadow-lg'></div>
                </div>
            </div>
        
            
        </div>
    </div>
  )
}

export default CommunityUpdates