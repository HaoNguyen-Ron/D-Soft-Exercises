import { COURSE_FAKE_API } from 'constants/constant'
import React from 'react'

export default function Course() {
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

        <div className='course__list'>
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
          <button id='prev-btn' className='course__slider-btn' disabled>
            <i className='ti ti-arrow-left'></i>
          </button>

          <div className='course__slider-track'>
            <div className='course__slider-thumb'></div>
          </div>

          <button id='next-btn' className='course__slider-btn'>
            <i className='ti ti-arrow-right'></i>
          </button>
        </div>
      </div>
    </section>
  )
}
