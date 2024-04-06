import CommonFeedbackCard from 'Components/Common/CommonFeedbackCard'
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
            return <CommonFeedbackCard feedback={feedback} key={feedback.id} />
          })}
        </div>
      </div>
    </div>
  )
}
