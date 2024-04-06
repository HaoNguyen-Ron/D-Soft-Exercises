import React from 'react'

export default function CommonCard({ course }) {
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
}
