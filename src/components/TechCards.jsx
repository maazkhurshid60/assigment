import React from 'react'

const TechCards = ({ icon, title }) => {
  return (
    <div class=" ">
    <div class="w-40 h-14  flex px-2  justify-center rounded max-w-xs overflow-hidden shadow-md opacity-40 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] hover:shadow-xl transition-shadow duration-300 ease-in-out"  >
        <span className='flex gap-x-1 justify-center  items-center'> 
            {icon}
            <span className='text-xl text-gray-300'>{title}</span>
        </span>
    </div>
  </div>
  )
}

export default TechCards