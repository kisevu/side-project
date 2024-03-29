import React from 'react'
import heroImage from '../assets/heroImage.png';
import notebookL from '../assets/notebookL.png';
import notebookM from '../assets/notebookM.png';
import mobileR from '../assets/mobileR.png';
import {TypeAnimation} from 'react-type-animation';

const Hero = () => {
  return (
    <div className='relative grid sm-grid-cols-3 gap-8 max-w-[1200px] md:h-[vh] mx-auto py-8'>
      <img className='absolute z-[-1] w-[400px] bottom-0 left-[-170px]' src={notebookL} alt="" />
      <img className='absolute z-[-1] w-[400px] bottom-0 left-[320px]' src={notebookM} alt=''/>
      <img className='absolute z-[-1] w-[200px] bottom-[500px] left-[450px]' src={mobileR} alt=''/>


      <div className='glass px-5 col-span-2 my-auto'>
        <h1 className='text-white text-4x1 sm:text-5x1 lg:text-8x1 font-extrabold'>

            <p className='mb-4 text-gray-500'> I'm a </p>
            <TypeAnimation 
               sequence={[
                "Frontend Dev",
                1000,
                "Backend Dev",
                1000,
                "Software Dev",
                1000
               ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </h1>
        <p className=' font-bold my-6 sm:text-lg lg:text-xl max-w-[200px] md:max-w-[600px] ml-1 text-gray-300'>
          My name is Kevin Ameda and I have over 3 years of experience in full stack development
        </p>
      </div>

{/* lg:w-[600px]  to be put after below w-[200px]*/} 
   <div className='absolute bottom-0 right-0 w-[200px] '>
    <img className='' src={heroImage} alt='' />
   </div>
    </div>
  )
}

export default Hero