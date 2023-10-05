import cart from './AddToCart.module.css'
import { useState } from 'react'

function AddToCart({ index }) {
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

  return (
    <div className={cart.addButton}>
      <button className={cart.addToCart} onClick={toggleAmountButtons}>
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
