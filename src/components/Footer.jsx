import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Footer = () => {

    return (
    <div className=" ">
            <div className='bg-[#050025] mx-auto bg-gradient-to-t from-[#FC466B]/20 via-[#b50ea2]/20 to-[#050030]/20 mt-32 '>
            <footer className="container mx-auto ">
                <div className="mx-auto max-w-screen-xl space-y-8  pt-16 pb-8  lg:space-y-16 ">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                            <div>
                                <p className="font-medium text-xl text-white px-5 md:px-0">Quick Links</p>
                                <ul className="mt-6 space-y-4 text-sm px-8 md:px-0">
                                    <li>
                                        <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Web Development </span>
                                    </li>
                                    <li>
                                        <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]  hover:opacity-75 cursor-pointer "> Mobile App </span>
                                    </li>
                                    <li>
                                        <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Ui/Ux Design </span>
                                    </li>
                                    <li>
                                        <span   className="text-gray-400 text-[17px]  hover:text-[#6318F1]  hover:opacity-75 cursor-pointer "> Cloud Computing </span>
                                    </li>
                                    <li>
                                        <span   className="text-gray-400 transition hover:text-[#6318F1]  hover:opacity-75 cursor-pointer"> QA Testing </span>
                                    </li>
                                    <li>
                                        <span   className="text-gray-400 transition hover:text-[#6318F1]  hover:opacity-75 cursor-pointer"> Custom Solution </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <p className="font-medium text-xl text-white px-5 md:px-0">Quick Links</p>
                                <ul className="mt-6 space-y-4 text-sm text-white px-8 md:px-0">
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> My Account </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Block Chain & AI </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Graphic Design </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Recruitmnet </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Case Studies </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <p className="font-medium text-xl text-white px-5 md:px-0">Company</p>
                                <ul className="mt-6 space-y-4 text-sm text-white px-8 md:px-0">
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Recent NBews </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Testimonials  </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer ">     <AnchorLink  offset='100' href='#about'>About Us </AnchorLink> </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Contact Us </span>
                                    </li>
                                    <li>
                                    <span   className="text-gray-400 text-[17px] hover:text-[#6318F1]   hover:opacity-75 cursor-pointer "> Help Center & FAQs </span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div>
                            <div className="text-lg font-semibold text-white nd:text-start text-center my-4 md:my-0 ">
                                <h1>Subscribe to our New Website</h1>
                            </div>
                            <div className=" my-4">
                        
                            <input id="email" type="text" className=" w-full px-4 py-3 mt-2 text-blue-600  rounded-full bg-transparent formBorder-gradient  focus:outline-none focus:ring-0" placeholder='enter your Email' />
                               
                            </div>
                            <ul className="mt-8 flex gap-4 text-white flex-wrap">                                                                                                         
                                <li className='p-2  justify-center items-center flex bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 hover:from-[#FC466B]/30 rounded-md hover:to-[#3F5EFB]/30 duration-200 hover:scale-125 cursor-pointer'>
                                    <span >
                                       <RiFacebookFill size={25}/>
                                    </span>
                                </li>
                                <li className='p-2  justify-center items-center flex bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 hover:from-[#FC466B]/30 rounded-md hover:to-[#3F5EFB]/30 duration-200 hover:scale-125 cursor-pointer'>
                                    <span >
                                       <FaTwitter size={25}/>
                                    </span>
                                </li>
                                <li className='p-2  justify-center items-center flex bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 hover:from-[#FC466B]/30 rounded-md hover:to-[#3F5EFB]/30 duration-200 hover:scale-125 cursor-pointer'>
                                    <span >
                                       <FaLinkedinIn size={25}/>
                                    </span>
                                </li>
                                <li className='p-2  justify-center items-center flex bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 hover:from-[#FC466B]/30 rounded-md hover:to-[#3F5EFB]/30 duration-200 hover:scale-125 cursor-pointer'>
                                    <span >
                                       <FaInstagram size={25}/>
                                    </span>
                                </li>
                                <li className='p-2  justify-center items-center flex bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 hover:from-[#FC466B]/30 rounded-md hover:to-[#3F5EFB]/30 duration-200 hover:scale-125 cursor-pointer'>
                                    <span >
                                       <FaYoutube size={25}/>
                                    </span>
                                </li>
                                <li className='p-2  justify-center items-center flex bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 hover:from-[#FC466B]/30 rounded-md hover:to-[#3F5EFB]/30 duration-200 hover:scale-125 cursor-pointer'>
                                    <span >
                                       <IoLogoWhatsapp size={25}/>
                                    </span>
                                </li>
                                <li className='p-2  justify-center items-center flex bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10 hover:from-[#FC466B]/30 rounded-md hover:to-[#3F5EFB]/30 duration-200 hover:scale-125 cursor-pointer'>
                                    <span >
                                       <VscGithub size={25}/>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <hr className='w-full bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] border-none mx-auto' />
                        <div className='flex  justify-between items-start pt-6'>
                            <p className="text-sm text-gray-300">© 2024. KeepcodeIn. All rights reserved.</p>
                            <div className='flex text-sm text-gray-300 gap-x-5'>
                                <span>Privacy Policy</span>
                                <span>Terms & Conditions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    )
}

export default Footer