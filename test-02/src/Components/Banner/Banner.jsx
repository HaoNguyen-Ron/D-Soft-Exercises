import React from 'react'

import banner from 'asset/image/banner-image.jpg'
import CommonDotDeco from 'Components/Common/CommonDotDeco'

export default function Banner() {
  return (
    <div className='banner__wrapper'>
      <div className='banner__deco'>
        <div className='banner__deco__dot'>
          <CommonDotDeco />
        </div>

        <div className='banner__deco__dot'>
          <CommonDotDeco />
        </div>
      </div>

      <div className='wrapper'>
        <div className='banner__content'>
          <div className='banner__content-title'>Turn your ambition into a success story</div>

          <div className='banner__content-desc'>
            Choose from over 100.000 online video courses with new addtions published every month.
          </div>

          <div className='banner__content-input d-flex'>
            <input type='text' placeholder='Search your favourite course' />
            <button>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>

        <div className='banner__image'>
          <i className='fa-solid fa-play'></i>

          <img src={banner} alt='Banner Teacher' />
        </div>
      </div>
    </div>
  )
}
