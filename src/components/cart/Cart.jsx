import cart from './Cart.module.css'

function Cart() {
  return (
    <div className={cart.container}>
      <h2 className={cart.title}>Your Cart</h2>
      <hr />
    </div>
  )
}

export default Cart