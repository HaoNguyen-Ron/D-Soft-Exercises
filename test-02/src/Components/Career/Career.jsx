import CommonDotDeco from 'Components/Common/CommonDotDeco'
import React from 'react'

export default function Career() {
  return (
    <div className='career__wrapper'>
      <div className='career__deco'>
        <div className='career__deco__dot'>
          <CommonDotDeco />
        </div>

        <div className='career__deco__dot'>
          <CommonDotDeco />
        </div>
      </div>
      <div className='wrapper'>
        <div className='career__list'>
          <div className='career'>
            <img
              src='https://img.freepik.com/free-photo/women-all-ages-using-laptop_23-2148462931.jpg?t=st=1711816890~exp=1711820490~hmac=1256f2354b3812b5740577ae206c3acaced62e9c8b1de64271def4faf1f81aee&w=1380'
              className='career__image'
              alt='career img'
            />
            <div className='career__content'>
              <div className='career__content-title'>Become a teacher</div>
              <p className='career__content-desc'>
                Teacher what you love. Coursector gives you the tools to create a course
              </p>
              <button className='career__content-btn'>Apply as teacher</button>
            </div>
          </div>

          <div className='career'>
            <img
              src='https://img.freepik.com/free-photo/women-all-ages-using-laptop_23-2148462931.jpg?t=st=1711816890~exp=1711820490~hmac=1256f2354b3812b5740577ae206c3acaced62e9c8b1de64271def4faf1f81aee&w=1380'
              className='career__image'
              alt='career img'
            />
            <div className='career__content'>
              <div className='career__content-title'>Coursector for Business</div>
              <p className='career__content-desc'>
                Get unlimited access to +3000 of Coursector's top courses for your team
              </p>
              <button className='career__content-btn'>Get Skillfy for Business</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
