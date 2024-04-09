import CommonCategoryCard from 'Components/Common/CommonCategoryCard'
import { CATEGORY_FAKE_API } from 'constants/constant'
import React from 'react'

export default function Category() {
  return (
    <article className='category-wrapper'>
      <div className='wrapper'>
        <div className='category-selection'>
          <h1 className='category-selection-title'>Choose favourite course from top category</h1>

          <div className='category-selection-filter'>
            <button>See all categories</button>
          </div>
        </div>

        <div className='category-list'>
          {CATEGORY_FAKE_API.map((category) => {
            return <CommonCategoryCard category={category} key={category.id} />
          })}
        </div>
      </div>
    </article>
  )
}
