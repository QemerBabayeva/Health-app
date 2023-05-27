import React from 'react'
import Image17 from "../../../assets/Images/img17.jpg"
import Image9 from "../../../assets/Images/img9.jpg"
import Image1 from "../../../assets/Images/img1.jpg"
import Image13 from "../../../assets/Images/img13.jpg"
import {Link} from "react-router-dom"

const SectionOne = () => {
  return (
    <div className='flex gap-[1vw] px-[6vw] py-[4vh] w-full 2xl:flex xl:flex lg:flex '>
        <Link to="/featured" className=' h-[67vh] w-[45vw] xl:h-[67vh] lg:h-[67vh]  md:h-[67vh] md:w-full sm:w-full'>
            <img className='h-[67vh] w-[45vw] xl:h-[67vh] lg:h-[67vh] md:w-full md:h-[67vh] sm:w-full object-cover' src={Image17} alt="" />
            <div className=' flex flex-col justify-center px-[1vw] relative bottom-[20vh] 2xl:bottom-[18vh] xl:bottom-[20vh] lg:bottom-[17vh] md:bottom-[17vh] sm:bottom-[15vh]'>
                <button className='h-[7vh] w-[8vw]  2xl:h-[6vh] 2xl:w-[11vw] xl:h-[6vh] xl:w-[10vw] lg:h-[6vh] lg:w-[10vw] sm:h-[5vh] sm:w-[12vh]  bg-red-500 text-white font-bold text-[1vw] tracking-[3px] md:w-[10vw] md:h-[6vh]'>FEATURED</button>
                <h3 className='text-white text-[1.7vw] font-semibold'>Google To Boost Android Security in Few Days</h3>
                <p className='text-white text-[1.1vw]'>by Salman 5 June-2022</p>
            </div>
        </Link>


        <div className='flex flex-col gap-5'>

        <Link to="/sportsecond" className='h-[32vh] w-[45vw]'>
            <img className='h-[32vh] w-[45vw] object-cover' src={Image13} alt="" />
            <div className=' flex flex-col justify-center px-[1vw] relative bottom-[15vh]'>
                <button className='h-[5vh] w-[6vw] bg-green-700 text-white font-bold text-[1vw] tracking-[3px]'>SPORT</button>
                <h3 className='text-white text-[1.3vw] font-semibold'>More than billion football fans attend Brazil world cup</h3>
                <p className='text-white text-[1.1vw]'>by Alex 12 August-2022</p>
            </div>
        </Link>



            <div className='flex gap-5'>

            <Link to="/fashion" className='h-[32vh] w-[21.5vw]'>
            <img className='h-[32vh] w-[21.5vw] object-cover' src={Image9} alt="" />
            <div className=' flex flex-col justify-center px-[1vw] relative bottom-[17vh]'>
                <button className='h-[5vh] w-[7.5vw] bg-violet-700 text-white font-bold text-[1vw] tracking-[3px]'>FASHION</button>
                <h3 className='text-white text-[1.1vw] font-semibold'>No escaping new new high tech speed cameras</h3>
                <p className='text-white text-[1vw]'>by Alex 12 August-2022</p>
            </div>
                </Link>


                <Link to="/technology" className='h-[32vh] w-[22vw]'>
            <img className='h-[32vh] w-[22vw] object-cover' src={Image1} alt="" />
            <div className=' flex flex-col justify-center px-[1vw] relative bottom-[17vh]'>
                <button className='h-[5vh] w-[10vw] bg-yellow-600 text-white font-bold text-[1vw] tracking-[3px]'>TECHNOLOGY</button>
                <h3 className='text-white text-[1.1vw] font-semibold'>More than billion football fans attend Brazil world cup</h3>
                <p className='text-white text-[1vw]'>by Alex 12 August-2022</p>
            </div>
                </Link>

                
                

            </div>


        </div>





    </div>
  )
}

export default SectionOne