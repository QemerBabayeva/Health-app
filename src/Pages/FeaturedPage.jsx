import React from 'react'
import Slider from '../Components/HomePage/Slider'
import SwiperUp from '../Components/HomePage/Swiper'
import {FaFacebookF} from "react-icons/fa"
import {FaPinterest} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa" 
import Image17 from "../assets/Images/img17.jpg"

const FeaturedPage = () => {
  return (
    <div className='flex flex-col gap-1'>
        <div  className='h-[20vh] w-full mt-9'>
          <SwiperUp/>
        </div>

        <div  className='flex flex-row gap-5 py-[3vw] px-[6vw]'>

        <div className=' flex flex-col gap-5 w-[64vw] h-[105vw]'>
          <div>
            <h5 className='text-black text-[2.5vw] font-bold'>Google To Boost Android Security in Few Days</h5>
          </div>

          <div>
            <p className='font-semibold'>by Salman On <span className='text-gray-500 font-semibold'>5 June-2022</span></p>
          </div>

          <div className='flex flex-row gap-5'>
            <div className='h-[6vh] w-[8vw] flex flex-row gap-2 justify-center items-center bg-blue-700 text-white'><FaFacebookF/>SHARE</div>
            <div className='h-[6vh] w-[10vw] flex flex-row gap-2 justify-center items-center bg-red-700 text-white'><FaTwitter/>TWITTER</div>
            <div className='h-[6vh] w-[6vw] flex flex-row gap-2 justify-center items-center bg-blue-500 text-white'><FaPinterest/></div>
            <div className='h-[6vh] w-[6vw] flex flex-row gap-2 justify-center items-center bg-pink-600 text-white' ><FaInstagram/></div>
          </div>

          <p>
           Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>

          <img className='w-full h-[80vh] object-cover' src={Image17} alt="" />

          <h5 className='font-bold text-[2vw]'>Starting a new company is easy</h5>

          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          </p>
          
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>

          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
        </div>

        <Slider/>
        </div>
        
    </div>
  )
}

export default FeaturedPage