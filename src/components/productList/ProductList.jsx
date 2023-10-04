import { useState, useEffect } from "react"
import style from './ProductList.module.css'

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
          <div className={style.product} key={index}>
            <img src={item.image} alt='product' />
            <p className={style.price}>$ {item.price}</p>
            <p className={style.title}>{item.title}</p>
            <p className={style.rating}>Rating: {item.rating.rate}/5</p>
            <p className={style.count}>Reviews: {item.rating.count}</p>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default ProductList