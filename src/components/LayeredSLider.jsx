// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import Cards from './Cards';

import health from '../assets/CGI/health.png'; 



const LayeredSLider = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={0}

      loop={true}
    slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        loop: true
      }}
      autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto play with a delay of 3000ms (3 seconds)
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="swiper_container shadow-xl "
    >



      < SwiperSlide>
        <Cards
          img={health}
          heading={"Web Developmenet"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          img={health}
          heading={"Mobile App Developmenet"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          img={health}
          heading={"Web Developmenet"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          img={health}
          heading={"Web Developmenet"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          img={health}
          heading={"Web Developmenet"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          img={health}
          heading={"Web Developmenet"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Cards
          img={health}
          heading={"Web Developmenet"}
        />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>

    </Swiper>

  )
}

export default LayeredSLider