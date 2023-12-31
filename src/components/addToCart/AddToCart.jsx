import cart from './AddToCart.module.css'
import { useState } from 'react'

export const cartItemsArr = []

function AddToCart({ image, price, title }) {
  const [amount, setAmount] = useState(1)
  const [amountButtons, showAmountButtons] = useState(false)
  const [cartButtonText, changeCartButtontext] = useState('Add to cart')
  

  const toggleAmountButtons = () => {
    if (amountButtons) {
      showAmountButtons(false)
      changeCartButtontext('Add to cart')
    } else {
      showAmountButtons(true)
      changeCartButtontext('Confirm')
      setAmount(1)
    }
  }

  const addItems = () => {
    if (cartButtonText === 'Confirm') {
      const newItem = { price, title, amount, image }
      cartItemsArr.push(newItem)
    }
    toggleAmountButtons()
  }

  return (
    <div className={cart.addButton}>
      <button className={cart.addToCart} onClick={addItems}>
        {cartButtonText}
      </button>
      {amountButtons && (
        <div className={cart.amountButtons}>
          <button className={cart.plus} onClick={() => setAmount(amount + 1)}>
            +
          </button>
          <div className={cart.amount}>{amount}</div>
          <button className={cart.minus} onClick={() => setAmount(amount - 1)}>
            -
          </button>
        </div>
      )}
    </div>
  )
}

export default AddToCart
