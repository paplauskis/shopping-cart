import { useEffect, useState } from 'react'
import cart from './Cart.module.css'

function Cart({ cartItems }) {
  const [totalPrice, setTotalPrice] = useState(0)

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
                <p className={cart.amount}>Quantity: <span>{item.amount}</span></p>
              </div>
            </div>
          )
        })}
        <p className={cart.total}>Total: $ {totalPrice}</p>
      </div>
    </div>
  )
}

export default Cart
