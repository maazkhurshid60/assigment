import React from 'react'
import ServiceCard from './ServiceCard'

import img1 from '../assets/squigly-line.png'; // Adjust the path as per your directory structure
import img2 from '../assets/square-illusion.png'; // Adjust the path as per your directory structure
import img3 from '../assets/round-triangle-chain.png'; // Adjust the path as per your directory structure
import img4 from '../assets/penta-holed-polygon.png'; // Adjust the path as per your directory structure
import img5 from '../assets/InnovatiNG (2) 1.png'; // Adjust the path as per your directory structure
import img6 from '../assets/InnovatiNG (1) 1.png'; // Adjust the path as per your directory structure



const servicesData = [
    {
      heading: 'Web / Mobile Development',
      paragraph: "Whether it's designing pixel-perfect websites that captivate your audience or developing sleek mobile apps that enhance user engagement, we're dedicated to delivering cutting-edge technology solutions that exceed expectations. With a focus on innovation, creativity, and user-centric design.",
      img: img3,
      animate: 'animate-cloud'
    },
    {
      heading: 'Graphics / Ui Ux Design',
      paragraph: "Elevate your brand with stunning graphics and intuitive UI/UX design that captivates your audience. From eye-catching logos to seamless user experiences, our design experts are here to bring your vision to life with style, creativity, innovation, and flair. Let's create something unforgettable together!",
      img: img1,
      animate: 'animate-cloud'
    },
    {
      heading: 'Cloud Computing',
      paragraph: "Unlock the power of the cloud and digital computing to revolutionize your business. From seamless data storage to scalable computing solutions, we're your trusted partner in navigating the digital landscape. Let's elevate your operations to new heights, together in the  cloud!",
      img: img5,
      animate: 'animate-cloud'
    },
    {
      heading: 'Q/A Testing',
      paragraph: 'Ensure perfection with our Q/A testing services! From bug hunting to user experience optimization, we leave no stone unturned in guaranteeing flawless software performance. Let us be your quality assurance ally, ensuring your product shines in the digital world!',
      img: img6,
      animate: 'animate-cloud'
    },
    {
      heading: 'Talent Acquisition',
      paragraph: "Discover top talent, unleash potential! Our talent acquisition team specializes in finding the perfect fit for your company culture and goals. Let us be your strategic partner in building a dynamic, high-performing team that drives success. Together, we'll shape the future of your organization!",
      img: img4,
      animate: 'animate-round'
    },
    {
      heading: 'Custom Solutions',
      paragraph: "Custom-made solutions for your unique needs! Say goodbye to cookie-cutter software and hello to tailored innovation. Our team crafts bespoke software solutions that fit your business like a glove, empowering you to outshine the competition. Let's create something extraordinary, together!",
      img: img2,
      animate: 'animate-zoom'
    }
  ];

const Services = () => {
    return (
        <div id='services' className='container mx-auto '>
            <div className='flex justify-center  items-center py-12 mt-16 flex-col text-white gap-y-4'>
                <h1 className='text-3xl font-semibold text-center'>Our Most in Demand Servuce</h1>
                <p className='mt-4 w-[50%] text-center'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas molestias
                </p>
            </div>

            <div className='relative lg:flex  lg:flex-wrap   lg:gap-8 lg:justify-center lg:px-8 2xl:px-20'>
            <div class=" absolute  right-0  top-32 -z-10  bg-gradient-to-b w-80 rounded-full  blur-3xl  from-purple-600 opacity-30 via-purple-500 to-purple-400 "></div>
            {servicesData.map((service, index) => (
                  <ServiceCard 
                    key={index} 
                    img={service.img} 
                    animate={service.animate}
                    heading={service.heading}
                    paragraph={service.paragraph}
                  />
                ))}
            </div>

        </div>
    )
}

export default Services