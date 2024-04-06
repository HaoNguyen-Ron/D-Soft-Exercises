import React, { useEffect, useRef, useState } from 'react'

import { COURSE_FAKE_API } from 'constants/constant'
import CommonCard from 'Components/Common/CommonCard'

export default function Course() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [thumbProgress, setThumbProgress] = useState(0)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)

  const courseRef = useRef()

  const handleSlideClick = (direction) => {
    if (courseRef.current) {
      direction === 'prev' ? setCurrentIndex((prev) => prev - 1) : setCurrentIndex((prev) => prev + 1)

      const slideAmount = courseRef.current.clientWidth * currentIndex
      courseRef.current.scrollBy({
        left: slideAmount,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (courseRef.current) {
      // const checkScrollMax = courseRef.current.scrollWidth - courseRef.current.clientWidth
      // if (courseRef.current.scrollLeft <= 0) {
      //   setPrevBtnDisabled(true)
      // } else if (courseRef.current.scrollLeft >= checkScrollMax) {
      //   setNextBtnDisabled(true)
      // }
    }
  }, [])

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
            return <CommonCard course={course} key={course.id} />
          })}
        </div>

        <div className='course__slider'>
          <button id='prev-btn' className='course__slider-btn' onClick={() => handleSlideClick('prev')}>
            <i className='ti ti-arrow-left'></i>
          </button>

          <div className='course__slider-track'>
            <div className='course__slider-thumb'></div>
          </div>

          <button
            id='next-btn'
            className='course__slider-btn'
            onClick={() => handleSlideClick('next')}
            disabled={nextBtnDisabled ? 'disabled' : ''}
          >
            <i className='ti ti-arrow-right'></i>
          </button>
        </div>
      </div>
    </section>
  )
}
