import { useState, useEffect } from 'react'
import style from './ProductList.module.css'
import ItemCard from '../itemCard/ItemCard'

function ProductList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])

  const addItemsToCart = (item) => {
    setCartItems((arr) => [...arr, item])
  }

   useEffect(() => {
    console.log(cartItems) // just for checking array
  }, [cartItems])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then(res => res.json())
      .then(json => {
        setItems(json)
        console.log(json)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div className={style.productsList}>
        {loading === true
          ? <div className={style.loading}>Loading...</div> 
          : items.map((item, index) => {
              return <ItemCard key={index} item={item} addItems={addItemsToCart} />
            })}
      </div>
    </>
  )
}

export default ProductList
