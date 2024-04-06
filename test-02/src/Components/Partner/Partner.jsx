import { PARTNER_FAKE_API } from 'constants/constant'
import React from 'react'

export default function Partner() {
  return (
    <div className='partner__wrapper'>
      <div className='wrapper'>
        <div className='partner__slider'>
          <h1 className='partner__slider-title'>Trusted by our awesome partners</h1>

          <div className='partner__slider-btn'>
            <button id='prev-btn' disabled>
              <i className='ti ti-arrow-left'></i>
            </button>

            <button id='next-btn'>
              <i className='ti ti-arrow-right'></i>
            </button>
          </div>

          <div className='partner__slider-btn responsive'>
            <button id='prev-btn' disabled>
              <i className='ti ti-arrow-up'></i>
            </button>
            <button id='next-btn'>
              <i className='ti ti-arrow-down'></i>
            </button>
          </div>
        </div>
        <div className='partner__list'>
          {PARTNER_FAKE_API.map((partner) => {
            return <img className='partner' src={partner.logo} alt={`Partner ${partner.name}`} key={partner.id} />
          })}
        </div>
      </div>
    </div>
  )
}
