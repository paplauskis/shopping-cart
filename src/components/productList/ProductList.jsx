import { useState, useEffect } from 'react'
import style from './ProductList.module.css'
import ItemCard from '../itemCard/ItemCard'

function ProductList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className={style.productsList}>
        {loading === true
          ? <div className={style.loading}>Loading products...</div> 
          : items.map((item, index) => {
              return <ItemCard key={index} item={item} />
            })}
      </div>
    </>
  )
}

export default ProductList
