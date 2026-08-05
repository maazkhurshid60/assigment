import React from 'react'
import CountUp from 'react-countup';
import img1 from '../assets/aboutimg.png';



const AboutUs = () => {
    return (
      <div id='about' className='container mx-auto'>
          <div className=' my-44 lg:flex justify-center md:mr-20 px-2 sm:mx-20'>
            <div className='lg:min-w-[55%] flex flex-col gap-y-6 md:px-16 '>
                <div className='inline-flex'>
                    <h1 class="text-2xl font-bold bg-gradient-to-r from-[#FC466B] to-[#3F5EFB]  text-transparent bg-clip-text">About Us</h1>
                </div>
                <h1 className='text-4xl font-bold text-white'>Empowering Businesses From Cutting Edge Technology</h1>
                    <p className='text-white'>At Keepcodein, innovation is at the heart of everything we do.
                        We stay ahead of the curve by embracing the latest technologies, trends,
                        and methodologies, ensuring that our clients always have access to the most
                        advanced solutions available.  We believe in building lasting partnerships with our
                        clients, working closely with them every step of the way to ensure their success.
                    </p>
           
                <div className='flex justify-between my-4'>
                    <div>
                        <div className='text-white flex flex-col gap-y-5'>
                            <div className='text-4xl text-white font-bold'> <CountUp start={0} end={1700} /> + </div>
                            <div>
                                <div>Vetted IT Experts </div>
                                <div className='text-green-400'>20,000+ acheiveenst</div>
                            </div>
                        </div>
                    </div>
                    <div className='md:block hidden'>
                        <div className='text-white flex flex-col gap-y-5'>
                            <div className='text-4xl text-white font-bold'> <CountUp start={0} end={99} /> % </div>
                            <div>
                                <div>Vetted IT Experts </div>
                                <div className='text-green-400'>20,000+ Rating Users</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-white flex flex-col gap-y-5'>
                            <div className='text-4xl text-white font-bold'> <CountUp start={0} end={3000} /> + </div>
                            <div>
                                <div>Vetted IT Experts </div>
                                <div className='text-green-400'>12,000+ Completions</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' lg:min-w-[40%] lg:py-0 py-6  lg:block hidden text-white text-3xl'>
                <div className='relative w-[80%] h-full bg-blue-500 mx-20 rounded-ss-[10%] rounded-se-[10%] rounded-ee-[30%] rounded-es-[10%]'>
                <img src={img1} alt="" className='absolute -left-20 -top-5 animate-cloud'/>
                </div>
            </div>

        </div>
      </div>
    )
}

export default AboutUs