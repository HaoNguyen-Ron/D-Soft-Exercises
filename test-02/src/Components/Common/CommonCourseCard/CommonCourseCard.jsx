import React from 'react'

export default function CommonCourseCard({ course }) {
  return (
    <div className='course-card' key={course.id}>
      <div className='card-image'>
        <img className='img-fluid' src={course.image.courseImage} alt='Course Teacher' />
      </div>

      <div className='card-dashboard'>
        <p className='card-dashboard-rate'>
          <i className='ti ti-star'></i>
          {course.rate}
        </p>

        <p className='card-dashboard-view'>
          <i className='ti ti-eye'></i>
          {course.view}
        </p>

        <p className='card-dashboard-lesson'>
          <i className='ti ti-arrow-circle-right'></i>
          {course.lessonLength}
        </p>
      </div>

      <div className='card-info'>
        <div className='card-info-title'>{course.title}</div>

        <div className='card-info-content'>
          <div className='card-info-content-avatar'>
            <img src={course.avatar.courseAvatar} alt='Teacher Avatar' />
            <div>{course.name}</div>
          </div>

          <div className='card-info-content-price'>
            <div className='price-original'>{course.coursePrice}</div>

            <div className='price-sale'>{course.courseDiscount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
