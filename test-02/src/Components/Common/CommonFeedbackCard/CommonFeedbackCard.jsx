import React from 'react'

export default function CommonFeedbackCard({ feedback }) {
  let stars = []

  for (let i = 0; i < feedback.rate; i++) {
    stars.push(<i key={`${feedback.id}-${i}`} className='ti ti-star'></i>)
  }

  return (
    <div className='feedback-card' key={feedback.id}>
      <div className='card-title'>
        <div className='card-title-student'>
          <img className='card-title-student-avatar' src={feedback.avatar} alt='Student img' />
          <div className='card-title-student-name'>
            {feedback.major}
            <p>{feedback.role}</p>
          </div>
        </div>

        <div className='card-title-rate'>{stars}</div>
      </div>

      <p className='card-title-desc'>{feedback.comment}</p>
    </div>
  )
}
