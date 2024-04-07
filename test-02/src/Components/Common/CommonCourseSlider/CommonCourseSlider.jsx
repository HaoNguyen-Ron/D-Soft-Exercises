import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y } from 'swiper/modules'

import CommonCard from 'Components/Common/CommonCourseCard'

import { COURSE_FAKE_API } from 'constants/constant'

import CommonSliderBtn from './CommonCourseSliderBtn'

import 'swiper/scss'
import 'swiper/scss/scrollbar'

export default function CommonCourseSlider() {
  return (
    <Swiper
      modules={[Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      scrollbar={{ draggable: true, el: '.common__slider__button-track' }}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
    >
      {COURSE_FAKE_API.map((course) => {
        return (
          <SwiperSlide key={course.id}>
            <CommonCard course={course} />
          </SwiperSlide>
        )
      })}
      <div className='common__slider__wrapper mt-5'>
        <CommonSliderBtn />
      </div>
    </Swiper>
  )
}
