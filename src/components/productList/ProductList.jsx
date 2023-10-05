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
            <p className={style.rating}>Rating: <span>{item.rating.rate}/5</span></p>
            <p className={style.count}>Reviews: <span>{item.rating.count}</span></p>
            <button className={style.addToCart}>Add to cart <input type="number" name="item_amount" id="item-amount" /></button>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default ProductList