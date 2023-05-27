
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import Image1 from "../../../assets/Images/img1.jpg"
import Image2 from "../../../assets/Images/img2.jpg"
import Image4 from "../../../assets/Images/img4.jpg"
import Image5 from "../../../assets/Images/img5.jpg"
import Image6 from "../../../assets/Images/img6.jpg"
import Image7 from "../../../assets/Images/img7.jpg"
import Image8 from "../../../assets/Images/img8.jpg"
import Image9 from "../../../assets/Images/img9.jpg"
import Image10 from "../../../assets/Images/img10.jpg"
import Image11 from "../../../assets/Images/img11.jpg"
import Image12 from "../../../assets/Images/img12.jpg"
import Image13 from "../../../assets/Images/img13.jpg"
import Image14 from "../../../assets/Images/img14.jpg"
import Image15 from "../../../assets/Images/img15.jpg"


const SwiperUp = () => {

  const Data =[{
    id:1,
    title:"Is This The New  Boxing Champ",
    image:Image1,
  },
  {
    id:2,
    title:"Is This The New  Boxing Champ",
    image:Image2,
  },
  {
    id:4,
    title:"Is This The New  Boxing Champ",
    image:Image4,
  },
  {
    id:5,
    title:"Is This The New  Boxing Champ",
    image:Image5,
  },
  {
    id:6,
    title:"Is This The New  Boxing Champ",
    image:Image6,
  },
  {
    id:7,
    title:"Is This The New  Boxing Champ",
    image:Image7,
  },
  {
    id:8,
    title:"Is This The New  Boxing Champ",
    image:Image8,
  },
  {
    id:9,
    title:"Is This The New  Boxing Champ",
    image:Image9,
  },
  {
    id:10,
    title:"Is This The New  Boxing Champ",
    image:Image10,
  },
  {
    id:11,
    title:"Is This The New  Boxing Champ",
    image:Image11,
  },
  {
    id:12,
    title:"Is This The New  Boxing Champ",
    image:Image12,
  },
  {
    id:13,
    title:"Is This The New  Boxing Champ",
    image:Image13,
  },
  {
    id:14,
    title:"Is This The New  Boxing Champ",
    image:Image14,
  },
  {
    id:15,
    title:"Is This The New  Boxing Champ",
    image:Image15,
  },
  ]

  return (
       <Swiper
        slidesPerView={7}
        spaceBetween={10}
        className="mySwiper"
      >
        {Data.map(item=>(
           <SwiperSlide key={item.id}>
           <div className=" w-full h-full flex flex-col justify-center items-center">
           <img className="h-full w-full" src={item.image} alt="photo" />
           <p className="text-[0.9vw] text-white relative bottom-[1.3vw]">{item.title}</p>
           </div>
         </SwiperSlide>
        ))}
      </Swiper>
  )}

export default SwiperUp