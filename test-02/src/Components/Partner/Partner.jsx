import React, { useCallback, useRef } from 'react'

import { PARTNER_FAKE_API } from 'constants/constant'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y, Navigation } from 'swiper/modules'

export default function Partner() {
  const swiperRef = useRef()

  const handleClickSlide = useCallback((slidePosition) => {
    if (swiperRef.current) {
      slidePosition === 'next' ? swiperRef.current.swiper.slideNext() : swiperRef.current.swiper.slidePrev()
    }
  }, [])

  return (
    <div className='partner-wrapper'>
      <div className='wrapper'>
        <div className='partner-slider'>
          <h1 className='partner-slider-title'>Trusted by our awesome partners</h1>

          <div className='partner-slider-btn'>
            <button id='prev-btn' onClick={() => handleClickSlide('prev')}>
              <i className='ti ti-arrow-left'></i>
            </button>

            <button id='next-btn' onClick={() => handleClickSlide('next')}>
              <i className='ti ti-arrow-right'></i>
            </button>
          </div>
        </div>

        <div className='partner-list'>
          <Swiper
            modules={[Scrollbar, A11y, Navigation]}
            navigation={false}
            ref={swiperRef}
            breakpoints={{
              0: {
                slidesPerView: 1
              },

              426: {
                slidesPerView: 3
              },
              991: {
                slidesPerView: 6,
                spaceBetween: 10
              }
            }}
          >
            {PARTNER_FAKE_API.map((partner) => {
              return (
                <SwiperSlide key={partner.id}>
                  <img className='partner' src={partner.logo} alt={`Partner ${partner.name}`} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
