import React, { useCallback, useRef } from 'react'

import { FEEDBACK_FAKE_API } from 'constants/constant'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y, Navigation } from 'swiper/modules'
import CommonFeedbackCard from 'Components/Common/CommonFeedbackCard'

export default function Feedback() {
  const swiperRef = useRef()

  const handleClickSlide = useCallback((slidePosition) => {
    if (swiperRef.current) {
      slidePosition === 'next' ? swiperRef.current.swiper.slideNext() : swiperRef.current.swiper.slidePrev()
    }
  }, [])

  return (
    <div className='feedback-wrapper'>
      <div className='wrapper'>
        <div className='feedback-slider'>
          <h1 className='feedback-slider-title'>What our students have to say</h1>

          <div className='feedback-slider-btn'>
            <button className='feedback-slider-btn-prev' onClick={() => handleClickSlide('prev')}>
              <i className='ti ti-arrow-left'></i>
            </button>
            <button className='feedback-slider-btn-next' onClick={() => handleClickSlide('next')}>
              <i className='ti ti-arrow-right'></i>
            </button>
          </div>
        </div>

        <div className='feedback-cards'>
          <Swiper
            modules={[Scrollbar, A11y, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={false}
            ref={swiperRef}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 10
              }
            }}
          >
            {FEEDBACK_FAKE_API.map((feedback) => {
              return (
                <SwiperSlide key={feedback.id}>
                  <CommonFeedbackCard feedback={feedback} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
