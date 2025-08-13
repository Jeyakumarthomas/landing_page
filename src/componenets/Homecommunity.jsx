import React from 'react';
import Icon1 from '../assets/communityIcons/Icon1.png'
import Icon2 from '../assets/communityIcons/Icon2.png'
import Icon3 from '../assets/communityIcons/Icon3.png'

const Homecommunity = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center'>
        
            {/* community Text */}
        <div className='flex flex-col items-center gap-2'>
            <h2 className='font-semibold text-4xl text-center w-[542px] h-[88px] text-grayHead leading-11'>Manage your entire community in a single system</h2>
            <p className='text-grayPara font-normal text-center leading-6'>Who is Nextcent suitable for?</p>
        </div>

            {/* community frame */}

            <div className='flex flex-col w-3/4'>
                        <div className=' flex px-6 py-8 gap-2 justify-around'>

            {/* 1 */}
            <div className='w-[299px] h-[260px] flex flex-col gap-4 items-center '>
               <div className='flex flex-col items-center justify-around w-[267px] h-36'>
                <a href=""><img src={Icon1} alt="communityIcons" /></a>
                <div className='text-center font-bold leading-9 text-[28px] text-grayHead'>Membership Organisations</div>
               </div>
                <div className='font-normal text-sm leading-5 text-center w-[251px] text-grayPara'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>

             {/* 2 */}
            <div className='w-[299px] h-[260px] flex flex-col gap-4 items-center '>
               <div className='flex flex-col items-center justify-around w-[267px] h-36'>
                <a href=""><img src={Icon2} alt="communityIcons" /></a>
                <div className='text-center font-bold leading-9 text-[28px] text-grayHead'>National Associations</div>
               </div>
                <div className='font-normal text-sm leading-5 text-center w-[240px] text-grayPara'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>

             {/* 3 */}
            <div className='w-[299px] h-[260px] flex flex-col gap-4 items-center '>
               <div className='flex flex-col items-center justify-around w-[267px] h-36'>
                <a href=""><img src={Icon3} alt="communityIcons" /></a>
                <div className='text-center font-bold leading-9 text-[28px] text-grayHead'>Clubs And Groups</div>
               </div>
                <div className='font-normal text-sm leading-5 text-center w-[251px] text-grayPara'>Our membership management software provides full automation of membership renewals and payments</div>
            </div>
        </div>
            </div>
            

    </div>
  )
}

export default Homecommunity