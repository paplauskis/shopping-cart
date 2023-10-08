import { useState, useEffect } from 'react'
import style from './ProductList.module.css'
import ItemCard from '../itemCard/ItemCard'

export const sortArray = (value, arrangement, arr) => {
  const symbol = arrangement === 'ascending' ? 1 : -1
  arr.sort((a, b) => {
    return a[value] > b[value] ? symbol : b[value] > a[value] ? -symbol : 0
  })
}

function ProductList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortValue, setSortValue] = useState('title')
  const [arrangement, setArrangement] = useState('ascending')

  useEffect(() => {
    sortArray(sortValue, arrangement, items)
  }, [sortValue, arrangement])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const handleSortChange = e => {
    const [sortDirection, value] = e.target.value.split('.')
    setSortValue(value)
    setArrangement(sortDirection)
  }

  return (
    <>
      <div className={style.sort}>
        Sort by:{' '}
        <select
          name='select_sort'
          id='select_sort'
          className={style.selectSort}
          onChange={handleSortChange}>
          <option value='title.ascending'>Name A-Z</option>
          <option value='title.descending'>Name, Z-A</option>
          <option value='price.ascending'>Price low-high</option>
          <option value='price.descending'>Price high-low</option>
        </select>
      </div>
      <div className={style.productsList}>
        {loading === true ? (
          <div className={style.loading}>Loading products...</div>
        ) : (
          items.map((item, index) => {
            return <ItemCard key={index} item={item} />
          })
        )}
      </div>
    </>
  )
}

export default ProductList
