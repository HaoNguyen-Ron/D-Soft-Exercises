import React from 'react'

import CommonCourseSlider from 'Components/Common/CommonCourseSlider'

export default function Course() {
  return (
    <section className='course__wrapper'>
      <div className='wrapper'>
        <div className='course__selection'>
          <h1 className='course__selection-title'>Get choice of your courses</h1>

          <div className='course__selection-filter'>
            <div className='dropdown course__selection-filter-dropdown'>
              <button type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Design
                <i className='ti ti-angle-down ms-1'></i>
              </button>

              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='/'>
                    Bussiness
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Bussiness Analyses
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    AWS
                  </a>
                </li>
              </ul>
            </div>

            <button>View all</button>
          </div>
        </div>

        <div className='course__carousel'>
          <CommonCourseSlider />
        </div>
      </div>
    </section>
  )
}
