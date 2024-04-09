import React from 'react'

export default function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className='wrapper'>
        <div className='hero-content'>
          <h1 className='hero-content-title'>Know about learning platform</h1>

          <div className='hero-content-desc'>
            With our growing datalog of over 30 Nanodegree programs from beginner to advance , you are sure to find one
            that fits your career goals
          </div>

          <ul className='hero-content-list'>
            <li>
              <i className='fa-regular fa-square-check'></i>
              Free E-Book,Video & Consolation
            </li>
            <li>
              <i className='fa-regular fa-square-check'></i>
              Top instructors around the world
            </li>
            <li>
              <i className='fa-regular fa-square-check'></i>
              Top courses for your team
            </li>
          </ul>

          <div className='hero-content-btn'>
            <button>Start learning now</button>
          </div>
        </div>
        <div className='hero-image'>
          <div className='hero-image-border'>
            <img
              src='https://img.freepik.com/free-photo/smiling-asian-man-using-tablet-computer_1262-18324.jpg?t=st=1711732474~exp=1711736074~hmac=926f5f8ce71307394f7dcf083eb0072d1dfa305bac7ee6a895e105b8a657d6e5&w=1380'
              alt='teacher'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
