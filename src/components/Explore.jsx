import React from 'react'
import Cards from './Cards'
import health from '../assets/CGI/health.png'; 
import robotics from '../assets/CGI/robotics.png'; 
import casino from '../assets/CGI/casino.png'; 
import contruction from '../assets/CGI/contruction.png'; 
import influencer from '../assets/CGI/influencer.png'; 
import NFT from '../assets/CGI/NFT.png'; 
import survey from '../assets/CGI/survey.png'; 
import sports from '../assets/CGI/sports.png'; 
import shoes from '../assets/CGI/shoes.png'; 
import portfolio from '../assets/CGI/portfolio.png'; 



const explorecards = [
  {
    heading: 'Health Care',
    img: health,
  },
  {
    heading: 'Robotics',
    img: robotics,
  },
  {
    heading: 'Casino Gmae',
    img: casino,
  },
  {
    heading: 'Construction',
    img: contruction,
  },
  {
    heading: 'Influencer',
    img: influencer,
  },
  {
    heading: 'NFT Platform',
    img: NFT,
  },
  {
    heading: 'Survey',
    img: survey,
  },
  {
    heading: 'Sports',
    img: sports,
  },
  {
    heading: 'Shoes',
    img: shoes,
  },
  {
    heading: 'Portfolio',
    img: portfolio,
  }
];



const Explore = () => {
  return (
    <>

      <div id='case-study' className='container mx-auto relative '>
        <div className=' flex lg:justify-between justify-center flex-wrap gap-x-20 gap-y-5 items-center text-white px-4 lg:px-20 pt-20 lg:pt-44 mx-20'>
          <h1 className='text-3xl order-1 md:order-1 text-white font-semibold'>Case Studies</h1>
          <div className='order-3 md:order-2'>

            <ul className='flex lg:gap-x-4 gap-x-2 items-center justify-center'>
              <li className='cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2 hover:scale-125 duration-200'>All</li>
              <li className='cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2 hover:scale-125 duration-200'>Fashion</li>
              <li className='cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2 hover:scale-125 duration-200'>Music</li>
              <li className='cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2 hover:scale-125 duration-200'>Video</li>
              <li className='cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2 hover:scale-125 duration-200'>Game</li>
              <li className='cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2 hover:scale-125 duration-200 text-nowrap'>Real Estate</li>
            </ul>

          </div>

          <div className='order-2 md:order-3'>
            <button class="px-6 py-2 bg-[#6318F1] text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg  hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-150">
              Apply Now
            </button>
          </div>

        </div>

        <div className='lg:block hidden'>
          <div class=" absolute inset-0 translate-x-[10px]  top-32 -z-10  bg-gradient-to-b w-80 rounded-full h-96 blur-3xl from-purple-600 opacity-30 via-purple-500 to-purple-400 "></div>
          <div className='flex flex-wrap gap-x-10  gap-y-10 mt-10 justify-center px-20'>
          {explorecards.map((explore, index) => (
                  <Cards 
                    key={index} 
                    img={explore.img} 
                    heading={explore.heading}
                  />
                ))}
          </div>
        </div>
      </div>

      <div class="lg:hidden xs:flex my-5  overflow-x-scroll no-scrollbar hide-scroll-bar"  >

        <div class="flex flex-nowrap gap-x-12 pt-5 px-8 py-10" >
        {explorecards.map((explore, index) => (
                  <Cards 
                    key={index} 
                    img={explore.img} 
                    heading={explore.heading}
                  />
                ))}
        </div>

      </div>

    </>

  )
}

export default Explore