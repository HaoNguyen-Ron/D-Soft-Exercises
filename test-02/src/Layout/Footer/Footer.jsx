import React from 'react'

import { FOOTER_INFOS } from 'constants/constant'

export default function Footer() {
  return (
    <footer>
      <div className='footer__wrapper'>
        <div className='wrapper'>
          <div className='footer__info__list'>
            {FOOTER_INFOS.map((info) => {
              return (
                <div className='footer__info' key={info.id}>
                  <div className='footer__info-title'>{info.title}</div>

                  <ul className='footer__info-link'>
                    {info.links.map((link, index) => {
                      return (
                        <li className='link' key={index}>
                          <a href='/'>{link}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className='footer__bottom'>
            <p className='footer__bottom-trademark'>
              @2015-2020 Skillfy Education Private Limited. All rights servered
            </p>
            <div className='footer__bottom-medias'>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-google'></i>
              <i className='fa-brands fa-linkedin'></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
