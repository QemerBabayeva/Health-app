import React from 'react'
import Image5 from "../../../assets/Images/img5.jpg" 
import Image15 from "../../../assets/Images/img15.jpg" 
import Image4 from "../../../assets/Images/img4.jpg" 
import Image3 from "../../../assets/Images/img3.jpg" 
import Image2 from "../../../assets/Images/img2.jpg" 
import Image11 from "../../../assets/Images/img11.jpg" 
import Image14 from "../../../assets/Images/img14.jpg" 
import Image16 from "../../../assets/Images/img16.jpg" 
import Image7 from "../../../assets/Images/img7.jpg" 
import Image8 from "../../../assets/Images/img8.jpg" 
import Image19 from "../../../assets/Images/img19.jpg" 
import Image18 from "../../../assets/Images/img18.jpg" 
import {MdOutlineDateRange} from "react-icons/md"
import {BiRightArrowCircle} from "react-icons/bi"
import {TiMessages} from "react-icons/ti"
import Slider from "../Slider"




const SectionTwo = () => {
  return (
    <div className=' px-[6vw] py-[1vh] w-full h-[250vh] flex gap-7'>


        <div className=' flex flex-col h-full w-[64vw] bg-white gap-7'>

            <div>
                <button className=' text-[1.2vw] bg-orange-500 h-[5.5vh] w-[9vw] text-white'>Popular</button>
            </div>

            <div className=' flex flex-row gap-4'>

                <div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
                    <img className='h-[20vh] w-[15vw]' src={Image5} alt="" />
                    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1  bg-white'>
                        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
                        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
                        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
                        <div className=' hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[4vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh]'>Friends</div>
                    </div>
                </div>

                <div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
                    <img className='h-[20vh] w-[15vw]' src={Image4} alt="" />
                    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1 bg-white'>
                        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
                        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
                        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
                        <div className=' hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[4vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh] '>Travel</div>
                    </div>
                </div>
                
                
            </div>
            
            <div className=' flex flex-row gap-4'>

<div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
    <img className='h-[20vh] w-[15vw]' src={Image3} alt="" />
    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1  bg-white'>
        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
        <div className='  hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[4vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh]'>Food</div>
    </div>
</div>

<div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
    <img className='h-[20vh] w-[15vw]' src={Image15} alt="" />
    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1 bg-white'>
        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
        <div className='  hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[4vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh] '>Fun</div>
    </div>
</div>


</div>
<div className=' flex flex-row gap-4'>

<div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
    <img className='h-[20vh] w-[15vw]' src={Image2} alt="" />
    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1  bg-white'>
        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
        <div className='  hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[7vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh] '>Conversation</div>
    </div>
</div>

<div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
    <img className='h-[20vh] w-[15vw]' src={Image11} alt="" />
    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1 bg-white'>
        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
        <div className='  hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[4vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh] '>Animals</div>
    </div>
</div>


</div>
<div className=' flex flex-row gap-4'>

<div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
    <img className='h-[20vh] w-[15vw]' src={Image14} alt="" />
    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1  bg-white'>
        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
        <div className='  hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[4vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh] '>Fun</div>
    </div>
</div>

<div className='flex gap-4 bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
    <img className='h-[20vh] w-[15vw]' src={Image16} alt="" />
    <div className=' h-[20vh] w-[15vw] flex flex-col gap-1 bg-white'>
        <p className='text-[1.1vw] font-semibold'>Our Favorite Photos From <br /> All Around...</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>19.February 2019</p>
        <p className='text-[1vw] text-gray-500 font-semibold'>0</p>
        <div className=' hover:bg-orange-500 flex justify-center items-center text-[1vw] h-[4vh] w-[4vw] bg-black text-white relative right-[34vh] bottom-[15vh] 2xl:right-[24vh] 2xl:bottom-[10.5vh] xl:right-[30vh] xl:bottom-[13.5vh] lg:right-[25vh] lg:bottom-[11vh] md:right-[25.5vh] md:bottom-[11.5vh] sm:right-[22vh] sm:bottom-[12vh] '>Friends</div>
    </div>
</div>
</div>

            <div>
            <button className=' text-[1.2vw] bg-orange-500 h-[5.5vh] w-[9vw] text-white'>Popular Posts</button>
            </div>



            <div className='h-[53vh] w-full flex gap-3 bg-white'>
                <div className='flex flex-col gap-3 h-[53vh] w-[31.2vw] bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
                    <img className='h-[40vh] w-[31.2vw] object-cover' src={Image7} alt="" />
                    <p className='font-semibold ml-[1vw]'>We Went Deep Underground For This Amazing...</p>
                    <div className='  hover:bg-orange-500 flex justify-center h-[4vh] w-[4.5vw] bg-black text-white relative bottom-[47vh] 2xl:bottom-[44.5vh] xl:bottom-[44.5vh]
                    lg:bottom-[45vh] md:bottom-[44.5vh] sm:bottom-[44.5vh]'>World</div>
                    <div className='flex justify-start items-center gap-2 ml-[1vw] relative bottom-[6vh]'>
                    <div className='text-orange-500 text-[1vw]'><MdOutlineDateRange/></div> 
                        <p className='text-gray-500 font-semibold text-[1vw] relative '>19.February 2022</p>
                    </div>
                </div>


                <div className='flex flex-col gap-3 h-[53vh] w-[31.2vw] bg-white shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>
                    <img className='h-[40vh] w-[31.2vw] object-cover' src={Image8} alt="" />
                    <p className='font-semibold ml-[1vw]'>6 Reasons Why You Shouldn't Keep Breakfast...</p>
                    <div className='  hover:bg-orange-500 flex justify-center h-[4vh] w-[5vw] bg-black text-white relative bottom-[47vh]
                    2xl:bottom-[44.5vh] xl:bottom-[44.5vh]
                    lg:bottom-[45vh] md:bottom-[44.5vh] sm:bottom-[44.5vh]'>Health</div>
                    <div className='flex justify-start items-center gap-2 ml-[1vw] relative bottom-[6vh]'>
                    <div className='text-orange-500 text-[1vw]'><MdOutlineDateRange/></div> 
                        <p className='text-gray-500 font-semibold text-[1vw] relative '>19.February 2022</p>
                    </div>
                </div>
            </div>

            <div>
            <button className=' text-[1.2vw] bg-orange-500 h-[5.5vh] w-[9vw] text-white'>Music News</button>
            </div>


            <div className='flex-col h-[58vh] gap-[2vh]' >

                <div className='h-[28vh] flex shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>

                <div>
                    <img className='h-[28vh] w-[20vw] object-cover' src={Image19} alt="" />
                    <div className='  hover:bg-orange-500 flex justify-center h-[4vh] w-[5vw] bg-black text-white relative bottom-[28vh]'>Music</div>
                </div>


                <div className=' h-[28vh] flex flex-col gap-1 justify-center'>

                <p className='font-semibold ml-[1vw] text-[1.4vw]'>Natural Soonlight Boosts Your Immunity...</p>
                <div className='flex justify-start items-center gap-2 ml-[1vw]'>
                    <div className='text-orange-500 text-[1vw]'><MdOutlineDateRange/></div> 
                        <p className='text-gray-500 font-semibold text-[1vw]'>19.February 2022</p>
                </div>
               <p className='text-[1vw] ml-[1vw]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
                                              when an unknown printer took a galley of type and scrambled it to make a type <br />
                                              specimen book. It has survived not only five centuries.
                                              </p>
                <div className='flex gap-2 ml-[1vw] items-center'>
                    <div className='text-orange-500 text-[1vw]'><BiRightArrowCircle/></div>
                    <p className='font-semibold text-gray-500'>Share/</p>
                    <div className='text-orange-500 text-[1vw]'><TiMessages/></div>
                    <p className='font-semibold text-gray-500'>0</p>
                </div>
                </div>

                </div>


                <div className='h-[28vh] mt-[1.5vw] flex shadow-[0_20px_10px_-15px_rgba(0,0,0,0.2)]'>

                <div>
                    <img className='h-[28vh] w-[20vw] object-cover' src={Image18} alt="" />
                    <div className='  hover:bg-orange-500 flex justify-center h-[4vh] w-[4vw] bg-black text-white relative bottom-[28vh]'>Fun</div>
                </div>


                <div className=' h-[28vh] flex flex-col gap-1 justify-center'>

                <p className='font-semibold ml-[1vw] text-[1.4vw]'>Vote For The Top Tracks Of The Month...</p>
                <div className='flex justify-start items-center gap-2 ml-[1vw]'>
                    <div className='text-orange-500 text-[1vw]'><MdOutlineDateRange/></div> 
                        <p className='text-gray-500 font-semibold text-[1vw]'>19.February 2022</p>
                </div>
               <p className='text-[1vw] ml-[1vw]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
                                              when an unknown printer took a galley of type and scrambled it to make a type <br />
                                              specimen book. It has survived not only five centuries.
                                              </p>
                <div className='flex gap-2 ml-[1vw] items-center'>
                    <div className='text-orange-500 text-[1vw]'><BiRightArrowCircle/></div>
                    <p className='font-semibold text-gray-500'>Share/</p>
                    <div className='text-orange-500 text-[1vw]'><TiMessages/></div>
                    <p className='font-semibold text-gray-500'>0</p>
                </div>
                </div>
                
                </div>

            </div>

        </div>


        <Slider/>
    </div>
  )
}

export default SectionTwo