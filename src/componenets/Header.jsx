import React from 'react'
import {Link} from 'react-scroll'
import Logo from '../assets/Logo.png'
import './Header.css'

const Header = () => {
  return (
        <header className='flex justify-around items-center text-black h-[84px] bg-white sticky top-0 z-10'>

            {/* logo  */}
            <a href="#"> <img src={Logo} alt="" className='w-[155px] h-6'/></a>

            {/* group */}
            <div>
                <ul className=' flex justify-between text-md h-[24px] w-[588px]'>
                <li className="hover:text-gray-600 duration-300 cursor-pointer"><Link to="Home" smooth={true} duration={500}>Home</Link></li>
                <li className="hover:text-gray-600 duration-300 cursor-pointer"><Link to="Service" smooth={true} duration={500}>Service</Link></li>
                <li className="hover:text-gray-600 duration-300 cursor-pointer"><Link to="Feature" smooth={true} duration={500}>Feature</Link></li>
                <li className="hover:text-gray-600 duration-300 cursor-pointer"><Link to="Product" smooth={true} duration={500}>Product</Link></li>
                <li className="hover:text-gray-600 duration-300 cursor-pointer"><Link to="Testimonial" smooth={true} duration={500}>Testimonial</Link></li>
                <li className="hover:text-gray-600 duration-300 cursor-pointer"><Link to="FAQ" smooth={true} duration={500}>FAQ</Link></li>
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