import { COURSE_FAKE_API } from 'constants/constant'
import React from 'react'
import Slider from 'react-slick'
import CommonCard from '../CommonCard'

function CommonSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {COURSE_FAKE_API.map((course) => {
          return <CommonCard course={course} key={course.id} />
        })}
      </Slider>
    </div>
  )
}

export default CommonSlider
