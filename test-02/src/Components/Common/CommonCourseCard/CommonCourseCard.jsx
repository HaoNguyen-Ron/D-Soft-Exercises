import React from 'react'

export default function CommonCourseCard({ course }) {
  return (
    <div className='card' key={course.id}>
      <div className='card__image'>
        <img className='img-fluid' src={course.image.courseImage} alt='Course Teacher' />
      </div>

      <div className='card__dashboard'>
        <p className='card__dashboard-rate'>
          <i className='ti ti-star'></i>
          {course.rate}
        </p>

        <p className='card__dashboard-view'>
          <i className='ti ti-eye'></i>
          {course.view}
        </p>

        <p className='card__dashboard-lesson'>
          <i className='ti ti-arrow-circle-right'></i>
          {course.lessonLength}
        </p>
      </div>

      <div className='card__info'>
        <div className='card__info-title'>{course.title}</div>

        <div className='card__info-content'>
          <div className='card__info-content-avatar'>
            <img src={course.avatar.courseAvatar} alt='Teacher Avatar' />
            <div>{course.name}</div>
          </div>

          <div className='card__info-content-price'>
            <div className='price-original'>{course.coursePrice}</div>

            <div className='price-sale'>{course.courseDiscount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
