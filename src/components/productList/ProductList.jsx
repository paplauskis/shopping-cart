import { useState, useEffect } from "react"
import style from './ProductList.module.css'
import ItemCard from '../itemCard/ItemCard'

function ProductList() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setItems(json)
        console.log(json)
      })
  }, [])

  return (
    <>
      <div className={style.productsList}>
      {items.map((item, index) => {
        return (
          <ItemCard key={index} item={item} />
        )
      })}
      </div>
    </>
  )
}

export default ProductList