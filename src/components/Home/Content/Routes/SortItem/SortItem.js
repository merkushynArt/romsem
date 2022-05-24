import React from 'react'

function SortItem({text, setSort}) {
   return (
      <li className='content__header-sort-item' onClick={() => setSort(text)}>{text}</li>
   )
}

export default SortItem