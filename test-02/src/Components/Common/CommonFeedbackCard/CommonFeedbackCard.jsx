import React from 'react'

export default function CommonFeedbackCard({ feedback }) {
  let stars = []

  for (let i = 0; i < feedback.rate; i++) {
    stars.push(<i key={`${feedback.id}-${i}`} className='ti ti-star'></i>)
  }

  return (
    <div className='card' key={feedback.id}>
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
}
