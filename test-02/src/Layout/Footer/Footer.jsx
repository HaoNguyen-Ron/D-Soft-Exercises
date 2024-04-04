import React from 'react'

import { FOOTER_INFOS } from 'constants/constant'

export default function Footer() {
  return (
    <footer>
      <div class='footer__wrapper'>
        <div class='wrapper'>
          <div class='footer__info__list'>
            {FOOTER_INFOS.map((info) => {
              return (
                <div class='footer__info' key={info.id}>
                  <div class='footer__info-title'>{info.title}</div>

                  <ul class='footer__info-link'>
                    {info.links.map((link, index) => {
                      return (
                        <li class='link' key={index}>
                          <a href='/'>{link}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
          <div class='footer__bottom'>
            <p class='footer__bottom-trademark'>@2015-2020 Skillfy Education Private Limited. All rights servered</p>
            <div class='footer__bottom-medias'>
              <i class='fa-brands fa-facebook'></i>
              <i class='fa-brands fa-twitter'></i>
              <i class='fa-brands fa-google'></i>
              <i class='fa-brands fa-linkedin'></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
