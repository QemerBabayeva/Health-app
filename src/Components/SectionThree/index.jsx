import React from 'react'
import Image1 from "../../assets/Images/img1.jpg" 
import Image6 from "../../assets/Images/img6.jpg" 
import Image9 from "../../assets/Images/img9.jpg" 
import Image10 from "../../assets/Images/img10.jpg" 
import Image12 from "../../assets/Images/img12.jpg" 
import Image13 from "../../assets/Images/img13.jpg" 

const SectionThree = () => {
  return (
    <div className='flex-col h-[35vh] w-full px-[6vw]'>
                  <div>
                <button className=' mb-[2vw] text-[1.2vw] bg-orange-500 h-[5.5vh] w-[9vw] text-white'>Discover</button>
            </div>


            <div className='flex gap-[1.8vw]'>
                <div className='flex flex-col items-center gap-1'>
                    <img className='h-[15vh] w-[13vw] object-cover' src={Image1} alt="" />
                    <p className='font-semibold'>GAMES</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <img className='h-[15vh] w-[13vw] object-cover' src={Image6} alt="" />
                    <p className='font-semibold'>SPORTS</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <img className='h-[15vh] w-[13vw] object-cover' src={Image9} alt="" />
                    <p className='font-semibold'>HUMOUR</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <img className='h-[15vh] w-[13vw] object-cover' src={Image10} alt="" />
                    <p className='font-semibold'>GADGETS</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <img className='h-[15vh] w-[13vw] object-cover' src={Image12} alt="" />
                    <p className='font-semibold'>MOVIES</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <img className='h-[15vh] w-[13vw] object-cover' src={Image13} alt="" />
                    <p className='font-semibold'>NITENDO</p>
                </div>
                
            </div>
    </div>
  )
}

export default SectionThree
