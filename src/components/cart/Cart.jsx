import { useEffect, useState } from 'react'
import cart from './Cart.module.css'
import { cartItemsArr } from '../addToCart/AddToCart'

function Cart({ cartItems }) {
  const [totalPrice, setTotalPrice] = useState(0)

  // sorts objects by title
  cartItemsArr.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  )

  useEffect(() => {
    let total = 0
    cartItems.forEach(item => {
      total += item.price * item.amount
    })
    setTotalPrice(total)
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
