import React from 'react'

export default function CommonCategoryCard({ category }) {
  return (
    <div className='category' key={category.id}>
      <div className='category-icon'>
        <i className={category.icon}></i>
      </div>

      <div className='category-title'>{category.title}</div>

      <p className='category-info'>{category.info}</p>
    </div>
  )
}
