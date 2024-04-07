import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y } from 'swiper/modules'

import { FEEDBACK_FAKE_API } from 'constants/constant'

import CommonFeedbackCard from 'Components/Common/CommonFeedbackCard/CommonFeedbackCard'

import 'swiper/scss'
import 'swiper/scss/scrollbar'

export default function CommonFeedbackSlider() {
  return (
    <Swiper
      modules={[Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={false}
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
  )
}
