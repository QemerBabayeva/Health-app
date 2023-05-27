import React from 'react'
import Image6 from "../../../assets/Images/img6.jpg" 
import Image1 from "../../../assets/Images/img1.jpg" 
import Image10 from "../../../assets/Images/img10.jpg"
import {FaFacebookF} from "react-icons/fa"
import {FaPinterest} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa" 

const Slider = () => {
  return (
    <div>
        <div className='h-[230vh] w-[21.8vw] flex flex-col gap-[2vw]'>

<div>
 <button className='text-[1.2vw] bg-black h-[5.5vh] w-[10vw] text-white'>Stay Connected</button>
 </div>

 <div className='flex flex-col gap-4'>
     <div className='flex items-center gap-3 h-[7vh] w-[21.8vw] bg-blue-700 text-white text-[1.1vw]'>
     <div className='ml-4'><FaFacebookF/></div>12,740 likes
     </div>

     <div className='flex items-center gap-3 h-[7vh] w-[21.8vw] bg-red-700 text-white text-[1.1vw]'>
     <div className='ml-4'><FaPinterest/></div>5,600 fans
     </div>

     <div className='flex items-center gap-3 h-[7vh] w-[21.8vw] bg-blue-500 text-white text-[1.1vw]'>
     <div className='ml-4'><FaTwitter/></div>8,700 followers
     </div>

     <div className='flex items-center gap-3 h-[7vh] w-[21.8vw] bg-pink-600 text-white text-[1.1vw]'>
     <div className='ml-4'><FaInstagram/></div>22,700 followers
     </div>

     <div className='flex items-center gap-3 h-[7vh] w-[21.8vw] bg-red-600 text-white text-[1.1vw]'>
     <div className='ml-4'><FaYoutube/></div>2,700 subscriber
     </div>

 </div>


 <div>
 <button className='text-[1.2vw] bg-black h-[5.5vh] w-[10vw] text-white'>Subscribe</button>
 </div>

 <div className='flex flex-col gap-4 items-start justify-center h-[35vh] w-[21.8vw] border-2 border-solid border-black '>
     <p className='font-semibold text-[1.4vw] md:text-[1.6vw] ml-4 md'>Subscribe to Our New <br />
        Stories
     </p>
     <input className='h-[5vh] w-[19.4vw] md:w-[17.5vw] sm:w-[17vw] border-2 border-gray-400 ml-4' type="text" placeholder='  Email Address...' />
     <button className='h-[5vh] w-[19.4vw] md:w-[17.5vw] sm:w-[17vw] bg-red-600 text-white ml-4'>SUBMIT</button>

 </div>

 <div>
     <img className='h-[28vh] w-[21.8vw] object-cover' src={Image6} alt="" />
     <div className='flex justify-center items-center h-[10vh] w-full bg-black text-white font-bold text-[1.8vw]'>HEALTH<span className='text-orange-500'>CARE</span> </div>

 </div>


 <div>
 <button className='text-[1.2vw] bg-black h-[5.5vh] w-[10vw] text-white'>Tiktok Post</button>
 </div>


 <div className='flex flex-col gap-7'>
     <div className='flex flex-row gap-3'>
         <img className='h-[14vh] w-[9vw] object-cover' src={Image1} alt="" />
         <div className='flex flex-col justify-between' >
             <h5 className='text-[1.3vw] 2xl:text-[1.5vw] xl:text-[1.3vw] lg:text-[1.5vw] md:text-[1.6vw] sm:text-[1.6vw]'>US Promises to give intel
                 aid to lo...</h5>
             <p className='text-gray-500 md:text-[1.4vw] sm:text-[1.4vw]'>a year ago</p>
         </div>
     </div>

     <div className='flex flex-row gap-3'>
         <img className='h-[14vh] w-[9vw] object-cover' src={Image10} alt="" />
         <div className='flex flex-col justify-between' >
             <h5 className='text-[1.3vw] 2xl:text-[1.5vw] xl:text-[1.3vw] lg:text-[1.5vw] md:text-[1.6vw] sm:text-[1.6vw]'>US Promises to give intel
                 aid to lo...</h5>
             <p className='text-gray-500 md:text-[1.4vw] sm:text-[1.4vw]'>a year ago</p>
         </div>
     </div>

 </div>

 <div>
 <button className='text-[1.2vw] bg-black h-[5.5vh] w-[10vw] text-white'>Categorys</button>
 </div>


 <div className='flex flex-col gap-5'>

 <div className='flex items-center h-[6vh] w-[21.8vw] bg-black text-white text-[1.1vw] hover:bg-orange-500'>
     <p className='ml-4'>Business</p> 
 </div>

 <div className='flex items-center h-[6vh] w-[21.8vw] bg-black text-white text-[1.1vw] hover:bg-orange-500'>
 <p className='ml-4'>Health</p> 
 </div>


 <div className='flex items-center h-[6vh] w-[21.8vw] bg-black text-white text-[1.1vw] hover:bg-orange-500'>
 <p className='ml-4'>Technology</p> 
 </div>

 

 </div>


</div>
    </div>
  )
}

export default Slider