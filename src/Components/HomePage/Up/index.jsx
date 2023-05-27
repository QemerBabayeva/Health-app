import React from 'react'
import Logo from "../../../assets/Images/logo.jpg"
import {Link} from "react-router-dom"

const Up = () => {
  return (
    <div>
        <div className='flex justify-between items-center px-[6vw] py-[2vh] xl:px-[6vw] xl:py-[2vh] md:px-[6vw] md:py-[2vh] sm:px-[6vw] sm:py-[1vh] '>
            <Link to="/" className='text-[3.8vw] text-black font-bold'>HEALTH<span className='text-orange-600'>CARE</span> </Link>
            <img className='h-[9vh] xl:h-[9vh] lg:h-[7vh] md:h-[7vh] sm:h-[6vh] w-[25vw] object-cover' src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Up