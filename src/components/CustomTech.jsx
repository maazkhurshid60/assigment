import React from 'react'
import ShadowBox from './ShadowBox'
import ShadowCircle from './ShadowCircle'
import imgTech from '../assets/Group 785.png'; // Adjust the path as per your directory structure


const CustomTech = () => {
  return (
    <div className='container mx-auto'>
      <div className='relative w-full flex justify-center flex-col items-center overflow-hidden'>

        <div className='absolute top-10 left-[19%] animate-pulse'>
          <ShadowBox width={60} height={60} border={"border-gradient-l"} />
        </div>

        <div className='absolute top-0 left-[15%] animate-pulse animate-first'>
          <ShadowCircle width={16} height={16} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"} />
        </div>

        <div className='absolute top-36 left-[17%] animate-pulse animate-second'>
          <ShadowCircle width={6} height={6} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"} />
        </div>

        <div className='absolute top-56 left-[10%] animate-pulse animate-third'>
          <ShadowCircle width={4} height={4} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"} />
        </div>

        <div className='absolute top-36 left-[30%] animate-pulse animate-first'>
          <ShadowCircle width={4} height={4} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"} />
        </div>

        <div className='absolute top-64 -left-10 animate-pulse animate-first opacity-60 '>
          <ShadowCircle width={96} height={96} position={"bl"} fromColor={"#59D3AA"} toColor={"#b46ffe"} />
        </div>

        <div className='absolute top-5 right-[20%] animate-pulse '>
          <ShadowBox width={60} height={60} border={"border-gradient-r"} />
        </div>


        <div className='absolute top-0 right-[15%] animate-pulse animate-second opacity-60'>
          <ShadowCircle width={16} height={16} position={"br"} fromColor={"#b46ffe"} toColor={"#050023"} />
        </div>

        <div className='absolute -top-6 right-[30%] animate-pulse animate-third'>
          <ShadowCircle width={5} height={5} position={"bl"} fromColor={"#1e0347"} toColor={"#b46ffe"} />
        </div>

        <div className='absolute top-16 right-[30%] animate-pulse animate-first'>
          <ShadowCircle width={3} height={3} position={"bl"} fromColor={"#1e0347"} toColor={"#b46ffe"} />
        </div>

        <div className='absolute top-16 right-10 lg:right-0 animate-pulse animate-first opacity-60 ' >
          <ShadowCircle width={60} height={60} position={"bl"} fromColor={"#b46ffe"} toColor={"#050023"} />
        </div>

        <div className='xl:w-[80%] md:w-[100%] w-[100%]  px-4  flex flex-col md:justify-start  justify-center  text-white gap-y-10 z-10'>
          <h1 className='lg:text-9xl md:text-6xl text-5xl font-bold '>CUSTOM</h1>
          <h1 className='lg:text-9xl md:text-6xl text-5xl font-bold sm:text-end'>TECHNOLOGY</h1>
        </div>

        <div className='my-16 mx-4 text-white  text-center flex flex-col gap-y-8 text-lg'>
          <p> Enhance your digital presence, or revolutionize your industry.</p>
          <div className='flex justify-center gap-4'>
            <div className="">
              <button class="px-6 py-2 bg-gradient-to-r from-[#FC466B]/60 to-[#3F5EFB]/60 text-white font-semibold rounded-full transition-transform transform-gpu  hover:shadow-lg hover:scale-110">
                Apply Now
              </button>
            </div>

            <div className="bg-gradient-to-r p-[1px] from-[#FC466B] to-[#3F5EFB] rounded-full">
              <button class="px-6 py-2 bg-[#110D2E] rounded-full text-white font-semibold  transition-transform transform-gpu  hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-110 duration-150">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className='z-10 px-4 w-[80%]'>
          <img src={imgTech} alt="" className=' mx-auto'/>
        </div>
      </div>
    </div>
  )
}

export default CustomTech