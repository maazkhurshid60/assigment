
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoSvg from '../assets/keepcodein.svg'; // Adjust the path as per your directory structure
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { AiFillPieChart } from "react-icons/ai";
import { LuCopyPlus } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Header() {
  return (
    <Disclosure as="nav" className="bg-[#110D2E] w-full z-50 fixed top-0 line-clamp-3 kerning">
      {({ open }) => (
        <>
          <div className="mx-auto container px-2 sm:px-4 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between ">


              <div className="">
                <img
                  className="block h-10 w-auto aspect-w-16 aspect-h-9"
                  src={logoSvg}
                  alt='img'
                />
              </div>

              <div className="lg:flex justify-center px-2 hidden ml-2 xl:ml-6 ">
                <div class="p-[1px] relative bg-[#110D2E] opacity-60 rounded-full max-w-sm bg-gradient-to-r from-[#FC466B] to-[#3F5EFB]">
                  <input class="px-3 2xl:py-2 py-1 w-full text-[#3F5EFB] border-none  rounded-full bg-inherit z-50 focus:outline-none" type="text" id="name" placeholder="Enter Your Name" />
                  <button type="submit" class="absolute right-0 top-0 2xl:mt-3 mt-2 mr-4 z-50">
                    <CiSearch className='h-5 w-5 fill-current text-white' />
                  </button>
                </div>
              </div>

              <div className="hidden lg:ml-6 lg:block ">
                <div className="flex spax-x-2 xl:space-x-4 ">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <div className="rounded-md  px-3 py-2 font-medium text-sm 2xl:text-lg  text-white hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200 ">
                    Home
                  </div>

                  <div

                    className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200 "
                  >
                    <AnchorLink offset={10} href='#services'>Services </AnchorLink>
                  </div>
                  <div

                    className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200 "
                  >
                    <AnchorLink offset={10} href='#case-study' className='text-nowrap'>Case Studies</AnchorLink>
                  </div>
                  <div

                    className="rounded-md px-3 py-2  font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200 "
                  >
                    Careers
                  </div>
                  <div

                    className="rounded-md px-3 py-2  font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200 "
                  >
                    Testimonials
                  </div>
                  <div

                    className="rounded-md px-3 py-2  font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200 "
                  >
                    <AnchorLink offset={200} href='#about'>About</AnchorLink>
                  </div>
                  <div
                    className="rounded-md px-3 py-2  font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200 "
                  >
                    <AnchorLink offset={10} href='#contact'>Contact</AnchorLink>
                  </div>
                </div>
              </div>

              <div className="flex ">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>


              <div className="hidden ml-2 lg:block ">
                <button class="text-nowrap 2xl:px-6 px-2 py-2 bg-[#6318F1] text-[10px]  xl:text-sm text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-150">
                  Apply Now
                </button>
              </div>


            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-[#080326] mt-3 mx-10 py-4 pb-8 bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 ">

            <div class=" absolute inset-0 left-0 top-0  bg-gradient-to-b w-[33%] h-[200px] rounded-full  blur-3xl from-purple-600/60 opacity-50 -z-10 via-purple-500/60 to-purple-400/60 "></div>


            <div className="space-y-3 flex flex-col  mx-[15%]  pb-3 pt-2">

              <div class="p-[1px] relative  my-5 mt-10 ">
                <input id="username" type="text" className=" w-full px-4 py-2 mt-4 text-blue-600 opacity-70   bg-transparent  formBorder-gradient  focus:outline-none focus:ring-0" placeholder='enter your name' />
                <button type="submit" class="absolute right-0 top-0 mt-7 mr-4 z-50">
                  <CiSearch className='h-5 w-5 fill-current text-white' />
                </button>
              </div>

    

              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"

                className="block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-3'>
                  <span >  <IoHomeOutline className='' size={25} /></span>
                  <span className='text-xl '>Home</span>
                </div>


              </Disclosure.Button>

              <Disclosure.Button
                as="a"

                className="block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-3'>
                  <span >  <GrServices className='' size={25} /></span>
                  <span className='text-xl'>Services</span>
                </div>


              </Disclosure.Button>
              <Disclosure.Button
                as="a"

                className="block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-3'>
                  <span >  <AiFillPieChart className='' size={25} /></span>
                  <span className='text-xl'>Case Studies</span>
                </div>


              </Disclosure.Button>
              <Disclosure.Button
                as="a"

                className="block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-3'>
                  <span >  <LuCopyPlus className='' size={25} /></span>
                  <span className='text-xl'>Careers</span>
                </div>


              </Disclosure.Button>
              <Disclosure.Button
                as="a"

                className="block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-3'>
                  <span >  <MdAutoGraph className='' size={25} /></span>
                  <span className='text-xl'>Testimonials</span>
                </div>


              </Disclosure.Button>
              <Disclosure.Button
                as="a"

                className="block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-3'>
                  <span >  <IoHomeOutline className='' size={25} /></span>
                  <span className='text-xl'>About</span>
                </div>


              </Disclosure.Button>
              <Disclosure.Button
                as="a"

                className="block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300  hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"
              >
                <div className='flex gap-x-3'>
                  <span >  <GrContactInfo className='' size={25} /></span>
                  <span className='text-xl'>Contact</span>
                </div>


              </Disclosure.Button>
            </div>
            {/* <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  as="a"
                    
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                    
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                    
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div> */}

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
