import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <div>
            <ul className=' h-[9vh] xl:h-[9vh] lg:h-[8vh] md:h-[7vh] sm:h-[5vh] w-full flex justify-start items-center px-[6vw] bg-black gap-[2.5vw] text-[1.3vw] xl:text-[1.5vw] lg:text-[1.6vw] md:text-[1.7vw] text-white'>
                <Link to="/">Home</Link>
                <Link to="/culture">Culture</Link>
                <Link to="/politics">Politics</Link>
                <Link to="/memes">Memes</Link>
                <Link to="sport">Sport</Link>
                <Link to="boxed">Boxed</Link>
                <Link to="reviews">Reviews</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar