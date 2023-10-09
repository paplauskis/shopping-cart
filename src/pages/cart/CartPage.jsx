import NavBar from '../../components/navBar/NavBar'
import Cart from '../../components/cart/Cart'
import { cartItemsArr } from '../../components/addToCart/AddToCart.jsx'
import { useEffect, useState } from 'react'

function CartPage() {
  const [cartCount, setCartCount] = useState(cartItemsArr.length)

  useEffect(() => {
    setCartCount(cartItemsArr.length)
  }, [])

  return (
    <>
      <NavBar cartItemCount={cartCount} />
      <Cart cartItems={cartItemsArr} />
    </>
  )
}

export default CartPage
