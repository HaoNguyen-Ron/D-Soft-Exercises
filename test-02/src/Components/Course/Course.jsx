import React, { useRef, useState } from 'react'

import { COURSE_FAKE_API } from 'constants/constant'

export default function Course() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [thumbProgress, setThumbProgress] = useState(0)

  const courseRef = useRef()

  const handleSlideClick = (direction) => {
    
  }

  return (
    <section className='course__wrapper'>
      <div className='wrapper'>
        <div className='course__selection'>
          <h1 className='course__selection-title'>Get choice of your courses</h1>

          <div className='course__selection-filter'>
            <button>
              Design
              <i className='ti ti-angle-down ms-1'></i>
            </button>
            <button>View all</button>
          </div>
        </div>

        <div className='course__list' ref={courseRef}>
          {COURSE_FAKE_API.map((course) => {
            return (
              <div className='course' key={course.id}>
                <div className='course__image'>
                  <img className='img-fluid' src={course.image.courseImage} alt='Course Teacher' />
                </div>

                <div className='course__dashboard'>
                  <p className='course__dashboard-rate'>
                    <i className='ti ti-star'></i>
                    {course.rate}
                  </p>

                  <p className='course__dashboard-view'>
                    <i className='ti ti-eye'></i>
                    {course.view}
                  </p>

                  <p className='course__dashboard-lesson'>
                    <i className='ti ti-arrow-circle-right'></i>
                    {course.lessonLength}
                  </p>
                </div>

                <div className='course__info'>
                  <div className='course__info-title'>{course.title}</div>

                  <div className='course__info-content'>
                    <div className='course__info-content-avatar'>
                      <img src={course.avatar.courseAvatar} alt='Teacher Avatar' />
                      <div>{course.name}</div>
                    </div>

                    <div className='course__info-content-price'>
                      <div className='price-original'>{course.coursePrice}</div>

                      <div className='price-sale'>{course.courseDiscount}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='course__slider'>
          <button id='prev-btn' className='course__slider-btn' onClick={() => handleSlideClick('prev')}>
            <i className='ti ti-arrow-left'></i>
          </button>

          <div className='course__slider-track'>
            <div className='course__slider-thumb'></div>
          </div>

          <button id='next-btn' className='course__slider-btn' onClick={() => handleSlideClick('next')}>
            <i className='ti ti-arrow-right'></i>
          </button>
        </div>
      </div>
    </section>
  )
}
