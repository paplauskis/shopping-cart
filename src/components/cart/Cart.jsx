import { useEffect, useState } from 'react'
import cart from './Cart.module.css'
import { cartItemsArr } from '../addToCart/AddToCart'
import { sortArray } from '../productList/ProductList'

function Cart({ cartItems }) {
  const [totalPrice, setTotalPrice] = useState(0)

  // sorts objects by value, in the given arrangement
  sortArray('title', 'ascending')

  // checks for same items in cart and concats them
  for (let i = 0; i < cartItemsArr.length; i++) {
    if (i === 0) continue
    if (cartItemsArr[i].title === cartItemsArr[i - 1].title) {
      cartItemsArr[i].amount += cartItemsArr[i - 1].amount
      cartItemsArr.splice(i - 1, 1)
    }
  }

  useEffect(() => {
    let total = 0
    cartItems.forEach(item => {
      total += item.price * item.amount
    })
    // slice is used to cut unrealistic numbers
    setTotalPrice(total.toString().slice(0, 6))
  }, [])

  return (
    <div className={cart.container}>
      <h2 className={cart.title}>Your Cart</h2>
      <hr />
      <div className={cart.items}>
        {cartItems.map((item, index) => {
          return (
            <div className={cart.item} key={index}>
              <img src={item.image} alt='shopping cart item' />
              <div className={cart.itemInfo}>
                <p className={cart.title}>{item.title}</p>
                <p className={cart.price}>$ {item.price}</p>
                <p className={cart.amount}>
                  Quantity: <span>{item.amount}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <p className={cart.total}>Total: $ {totalPrice}</p>
      <button className={cart.checkout}>Proceed to Checkout</button>
    </div>
  )
}

export default Cart
