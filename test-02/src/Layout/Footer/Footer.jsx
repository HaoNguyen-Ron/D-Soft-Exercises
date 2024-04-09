import React from 'react'

import { FOOTER_INFOS } from 'constants/constant'
import CommonDotDeco from 'Components/Common/CommonDotDeco'

export default function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-deco'>
          <div className='footer__deco__dot'>
            <CommonDotDeco />
          </div>

          <div className='footer__deco__dot'>
            <CommonDotDeco />
          </div>
        </div>

        <div className='wrapper'>
          <div className='footer-info-list'>
            {FOOTER_INFOS.map((info) => {
              return (
                <div className='footer-info' key={info.id}>
                  <div className='footer-info-title'>{info.title}</div>

                  <ul className='footer-info-link'>
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
          <div className='footer-bottom'>
            <p className='footer-bottom-trademark'>@2015-2020 Skillfy Education Private Limited. All rights servered</p>

            <div className='footer-bottom-medias'>
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
