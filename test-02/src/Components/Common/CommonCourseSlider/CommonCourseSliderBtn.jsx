import React from 'react'
import { useSwiper } from 'swiper/react'

export default function CommonCourseSliderBtn() {
  const swiper = useSwiper()

  return (
    <div className='common__slider__button'>
      <button id='prev-btn' className='common__slider__button-prev' onClick={() => swiper.slidePrev()}>
        <i className='ti ti-arrow-left'></i>
      </button>

      <div className='common__slider__button-track'>
        <div className='common__slider__button-track-thumb swiper-scrollbar-drag'></div>
      </div>

      <button id='next-btn' className='common__slider__button-next' onClick={() => swiper.slideNext()}>
        <i className='ti ti-arrow-right'></i>
      </button>
    </div>
  )
}
