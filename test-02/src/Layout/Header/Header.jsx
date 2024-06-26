import React from 'react'
import logo from 'asset/image/logo.png'
import { HEADER_NAV } from 'constants/constant'

export default function Header() {
  return (
    <header>
      <>
        <div className='header-wrapper'>
          <div className='wrapper'>
            <a href='/' className='header-logo'>
              <img src={logo} alt='Skillfy main logo' className='img-fluid' />
            </a>

            <nav className='header-nav'>
              <ul className='nav-list d-flex'>
                {HEADER_NAV.map((nav, index) => {
                  return (
                    <li className='nav-item d-flex align-items-center' key={index}>
                      {nav}
                      <i className='ti ti-angle-down ms-1'></i>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className='header-action'>
              <div className='header-action-search'>
                <button>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </button>
              </div>
              <div className='header-action-cart'>
                <button>
                  <i className='ti ti-shopping-cart'></i>
                </button>
              </div>
              <div className='header-action-register'>
                <button className='btn-primary'>Register</button>
              </div>
            </div>
          </div>
        </div>

        <div className='header-responsive'>
          <div className='wrapper'>
            <a href='/' className='header-logo'>
              <img src={logo} alt='Skillfy main logo' className='img-fluid' />
            </a>

            <div className='header-nav'>
              <button
                className='btn header-toggle-nav'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasWithBothOptions'
                aria-controls='offcanvasWithBothOptions'
              >
                <i className='fa-solid fa-bars'></i>
              </button>

              <div
                className='offcanvas offcanvas-start'
                data-bs-scroll='true'
                tabIndex='-1'
                id='offcanvasWithBothOptions'
                aria-labelledby='offcanvasWithBothOptionsLabel'
              >
                <div className='offcanvas-header'>
                  <h1 className='offcanvas-title' id='offcanvasWithBothOptionsLabel'>
                    Skilltify
                  </h1>
                  <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <nav className='offcanvas-body'>
                  <ul className='nav-list'>
                    <li className='nav-item d-flex align-items-center'>
                      <div className='dropdown'>
                        <button
                          className='btn dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Home
                        </button>
                        <ul className='dropdown-menu'>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav-item d-flex align-items-center'>
                      <div className='dropdown'>
                        <button
                          className='btn dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Pages
                        </button>
                        <ul className='dropdown-menu'>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav-item d-flex align-items-center'>
                      <div className='dropdown'>
                        <button
                          className='btn dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Courses
                        </button>
                        <ul className='dropdown-menu'>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav-item d-flex align-items-center'>
                      <div className='dropdown'>
                        <button
                          className='btn dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Home
                        </button>
                        <ul className='dropdown-menu'>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav-item d-flex align-items-center'>
                      <div className='dropdown'>
                        <button
                          className='btn dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Blog
                        </button>
                        <ul className='dropdown-menu'>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav-item d-flex align-items-center'>
                      <div className='dropdown'>
                        <button
                          className='btn dropdown-toggle'
                          type='button'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          Shop
                        </button>
                        <ul className='dropdown-menu'>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className='dropdown-item' href='/'>
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className='header-action'>
                <div className='header-action-cart'>
                  <button>
                    <i className='ti ti-shopping-cart'></i>
                  </button>
                </div>
                <div className='header-action-register'>
                  <button className='btn-primary'>Register</button>
                </div>
              </div>
            </div>

            <div className='header-search'>
              <div className='input-group header-search'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search for course here'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button className='btn btn-outline-secondary' type='button' id='button-addon2'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </header>
  )
}
