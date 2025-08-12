import React from 'react'
import Logo from '../assets/Logo.png'
import './Header.css'

const Header = () => {
  return (
        <header className='flex justify-around items-center text-black h-[84px] bg-white'>

            {/* logo  */}
            <a href="#"> <img src={Logo} alt="" className='w-[155px] h-6'/></a>

            {/* group */}
            <div>
                <ul className=' flex justify-between text-md h-[24px] w-[588px]'>
                <li className="h-[24px]">Home</li>
                <li className="h-[24px]">Service</li>
                <li className="h-[24px]">Feature</li>
                <li className="h-[24px]">Product</li>
                <li className="h-[24px]">Testimonial</li>
                <li className="h-[24px]">FAQ</li>
            </ul>
            </div>

            {/* login & SignUp */}
            <div className=' flex items-center gap-2 w-[182px] h-[40px]'>
             
                    <button className=" py-2.5 px-5 text-sm rounded-md text-primary">Login</button>
                
                    <button className=" py-2.5 px-5 text-sm text-white rounded-md bg-primary">Sign up</button>
                
            </div>
        </header>
)
}

export default Header