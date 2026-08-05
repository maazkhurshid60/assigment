import React from 'react'
import { TiEyeOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";

const Cards = ({img, heading}) => {
  return (
        
                            <div className="flex-shrink-0 w-[250px] bg-gradient-to-l bg-[#110D2E]  from-[#110D2E] via-[#110D2E] to-[#fc466a4a] shadow-lg rounded-xl p-3">
                                <div className="flex flex-col ">
                                    <div className>

                                        <div className="relative h-42 w-full mb-3">
                                            <div className="absolute rounded-3xl w-20 border bg-white flex flex-col top-3 right-2 py-[2px] px-1">
                                                <div className='flex text-black bg-wh justify-center items-center gap-x-2'>
                                                    <span>1.2k</span>
                                                    <span><FaHeart className='text-red-600'/></span>
                                                </div>

                                            </div>
                                            <img src={img} alt="Just a flower" className=" w-full   object-fill  rounded-2xl" />
                                            <div className="flex absolute -bottom-3 left-4 justify-start items-center bg-white text-black text-xs w-32 h-6  ml-2 rounded-full">
                                                <div className=' bg-red-400 rounded-full items-center flex justify-center'>
                                                    <img 
                                                    src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"alt="" 
                                                    className='w-8 h-full rounded-full'/>
                                                </div>
                                                <div className='px-4 text-sm text-nowrap'>keep code</div>
                                            </div>
                                        </div>

                                        <div className="flex-auto justify-evenly">
                                            <div className="flex flex-wrap ">

                                        


                                                <div className="flex items-center w-full justify-between min-w-0 mt-5">
                                                    <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                                                        {heading}
                                                    </h2>

                                                </div>

                                            </div>

                                            <div className="flex items-center w-full justify-between min-w-0 mt-2">
                                                <h2 className="text-sm mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                                                    Customized</h2>
                                                <div className="flex items-center  font-semibold text-white text-sm  rounded-lg">
                                                    33 days
                                                </div>
                                            </div>

                                                <hr class="h-px my-5 bg-gradient-to-r  from-gray-500 to-gray-800 border-0 " />


                                            <div className="flex space-x-2 text-sm font-medium justify-between">
                                                <span className='flex items-center text-gray-400 justify-center gap-x-1 '>
                                                    <TiEyeOutline className='h-6 w-6' />
                                                    <span>View Project</span>
                                                </span>
                                                <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-[#6318F1] px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full  hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 ">
                                                    <span>View</span>
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
      


  )
}

export default Cards