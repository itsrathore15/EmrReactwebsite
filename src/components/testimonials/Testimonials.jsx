import React from 'react'
import './testimonials.css';
import deepan from '../../asset/deepan.jpg';
import priyanshi from "../../asset/priyanshi.jpg";
import sunil from "../../asset/Sunil-img.png"
import prashant from "../../asset/prashant.jpg"
import priyanshu from "../../asset/priyanshu.jpg"
import arina from "../../asset/Arina.jpg"
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
       <h5>Leaders</h5>
        <h2>Team members</h2>
        <Swiper className='container testimonials_container'
              // install Swiper modules
          modules={[Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
            <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src={deepan} alt="deepan" />
              </div>
               <h5 className='client_name'>Deepan Adak</h5>
               <small className='client_review'>President</small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src={priyanshi} alt="deepan" />
              </div>
               <h5 className='client_name'>Priyanshi Rao</h5>
               <small className='client_review'>Vice-President</small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src={sunil} alt="deepan" />
              </div>
               <h5 className='client_name'>Sunil Rathore</h5>
               <small className='client_review'>Secretary</small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src={prashant} alt="deepan" />
              </div>
               <h5 className='client_name'>Prashant Rai</h5>
               <small className='client_review'>Project Head</small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src={priyanshu} alt="deepan" />
              </div>
               <h5 className='client_name'>Priyanshu Narwaria</h5>
               <small className='client_review'>Joint Secretary</small>
            </SwiperSlide>

            <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src={arina} alt="deepan" />
              </div>
               <h5 className='client_name'>Arina Halwasia</h5>
               <small className='client_review'>Additional Secretary</small>
            </SwiperSlide>

             <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src="https://cdn.pixabay.com/photo/2016/12/13/21/20/alien-1905155_1280.png" alt="deepan" />
              </div>
               <h5 className='client_name'>Abhishek</h5>
               <small className='client_review'>Embedded Head</small>
            </SwiperSlide>

             <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src="https://cdn.pixabay.com/photo/2016/12/13/21/20/alien-1905155_1280.png" alt="deepan" />
              </div>
               <h5 className='client_name'>Anubhav</h5>
               <small className='client_review'>DIP head</small>
            </SwiperSlide>

             <SwiperSlide className='testimonial'>
              <div className='client_avatar'>
                <img src="https://cdn.pixabay.com/photo/2016/12/13/21/20/alien-1905155_1280.png" alt="deepan" />
              </div>
               <h5 className='client_name'>Gaurav</h5>
               <small className='client_review'>Recent Tech Head</small>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonials