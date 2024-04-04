import { FEEDBACK_FAKE_API } from 'constants/constant'
import React from 'react'

export default function Feedback() {
  return (
    <div className='feedback__wrapper'>
      <div className='wrapper'>
        <div className='feedback__slider'>
          <h1 className='feedback__slider-title'>What our students have to say</h1>
          <div className='feedback__slider-btn'>
            <button id='prev-btn' disabled>
              <i className='ti ti-arrow-left'></i>
            </button>
            <button id='next-btn'>
              <i className='ti ti-arrow-right'></i>
            </button>
          </div>
          <div className='feedback__slider-btn responsive'>
            <button id='prev-btn' disabled>
              <i className='ti ti-arrow-up'></i>
            </button>
            <button id='next-btn'>
              <i className='ti ti-arrow-down'></i>
            </button>
          </div>
        </div>

        <div className='feedback__cards'>
          {FEEDBACK_FAKE_API.map((feedback) => {
            let stars = []

            for (let i = 0; i < feedback.rate; i++) {
              stars.push(<i key={feedback.id} className='ti ti-star'></i>)
            }

            return (
              <div className='card'>
                <div className='card__title'>
                  <div className='card__title-student'>
                    <img className='card__title-student-avatar' src={feedback.avatar} alt='Student img' />
                    <div className='card__title-student-name'>
                      {feedback.major}
                      <p>{feedback.role}</p>
                    </div>
                  </div>

                  <div className='card__title-rate'>{stars}</div>
                </div>

                <p className='card__title-desc'>{feedback.comment}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
