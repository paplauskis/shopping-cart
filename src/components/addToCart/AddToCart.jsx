import cart from './AddToCart.module.css'

function AddToCart({ index }) {
  return (
    <button className={cart.addToCart}>
      Add to cart{' '}
      <input
        type='number'
        name='item_amount'
        id={index}
        className={cart.itemAmount}
      />
    </button>
  )
}

export default AddToCart
