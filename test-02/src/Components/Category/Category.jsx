import { CATEGORY_FAKE_API } from 'constants/constant'
import React from 'react'

export default function Category() {
  return (
    <article className='category__wrapper'>
      <div className='wrapper'>
        <div className='category__selection'>
          <h1 className='category__selection-title'>Choose favourite course from top category</h1>

          <div className='category__selection-filter'>
            <button>See all categories</button>
          </div>
        </div>

        <div className='category__list'>
          {CATEGORY_FAKE_API.map((category) => {
            return (
              <div className='category' key={category.id}>
                <div className='category-icon'>
                  <i className={category.icon}></i>
                </div>

                <div className='category-title'>{category.title}</div>

                <p className='category-info'>{category.info}</p>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}
