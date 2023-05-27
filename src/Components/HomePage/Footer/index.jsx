import React from 'react'
import {MdMail} from "react-icons/md"
import {FiHeadphones} from "react-icons/fi"
import {IoIosArrowForward} from "react-icons/io"
import Image17 from "../../../assets/Images/img17.jpg"
import Image14 from "../../../assets/Images/img14.jpg"
import Image7 from "../../../assets/Images/img7.jpg"

const Footer = () => {
  return (
    <div className='bg-black w-full h-[55vh] gap-[3.5vw] flex justify-center items-center text-white'>
        <div className='flex-col justify-start '>
            <div className='flex justify-start items-center mb-[1.1vw]'>
                <div className='h-6 w-6 bg-pink-700 flex justify-center items-center font-bold rounded-xl '>T</div>
                <p className='font-bold text-[1.3vw]'>TECH</p>
            </div>
            <p className='text-white mb-[1vw]'>Busan is an amazing magazine Blogger <br />
               Theme that is easy to customize for <br />
               your needs</p>
            <div className='mb-[1vw]'>
                <div className='flex items-center gap-1'><MdMail/>hello@beautiful.com</div>
                <div className='flex items-center gap-1'><FiHeadphones/>+91 60521488</div>
                
            </div>
        </div>

        <div className='flex-col'>
            <p className='mt-6 font-semibold'>SPORT</p>
            <div className='flex items-center gap-3 mt-6'>
                <img className='h-[10vh] w-[10vh] object-cover' src={Image17} alt="" />
                <p className='text-[1.1vw]'>Google To Boost Android <br />
                                            Security In Few Days</p>
            </div>
            <div className='flex items-center gap-3 mt-6'>
                <img className='h-[10vh] w-[10vh] object-cover' src={Image14} alt="" />
                <p className='text-[1.1vw]'>Cespedes Play The <br />
                                            winning Baseball Game</p>
            </div>
        </div>


        <div className='flex-col'>
            <p className='mt-6 font-semibold'>CRICKET</p>
            <div className='flex items-center gap-3 mt-6'>
                <img className='h-[10vh] w-[10vh] object-cover' src={Image7} alt="" />
                <p className='text-[1.1vw]'>Google To Boost Android <br />
                                            Security In Few Days</p>
            </div>
            <div className='flex items-center gap-3 mt-6'>
                <img className='h-[10vh] w-[10vh] object-cover' src={Image17} alt="" />
                <p className='text-[1.1vw]'>Cespedes Play The <br />
                                            winning Baseball Game</p>
            </div>
        </div>

        <div className='flex-col '>
        <p className='mt-6 font-semibold'>LABELS</p>
        <div className='flex gap-[8vw] mt-8'>
            <div className='flex gap-1 items-center '><IoIosArrowForward/>Boxing</div>
            <p>(5)</p>
        </div>

        <div className='flex gap-[7.5vw] mt-4'>
            <div className='flex gap-1 items-center '><IoIosArrowForward/>Fashion</div>
            <p>(5)</p>
        </div>

        <div className='flex gap-[8vw] mt-4'>
            <div className='flex gap-1 items-center '><IoIosArrowForward/>Health</div>
            <p>(5)</p>
        </div>

        <div className='flex gap-[8vw] mt-4'>
            <div className='flex gap-1 items-center '><IoIosArrowForward/>Nature</div>
            <p>(5)</p>
        </div>
        
        </div>
    </div>
  )
}

export default Footer