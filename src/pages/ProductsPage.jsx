import ProductList from '../components/productList/ProductList'
import NavBar from '../components/navBar/NavBar'
import { cartItemsArr } from '../components/addToCart/AddToCart'
import { useEffect, useState } from 'react'

function ProductsPage() {
  const [cartCount, setCartCount] = useState(cartItemsArr.length)

  useEffect(() => {
    //interval checks every 100ms if there's a new item
     const interval = setInterval(() => {
      setCartCount(cartItemsArr.length)
    }, 100);

    // const secondInterval = setInterval(() => {
    //   console.log(cartItemsArr)
    // }, 2000);

    return () => {
      clearInterval(interval)
      // clearInterval(secondInterval)
    }
  }, []);

  return (
    <>
      <NavBar cartItemCount={cartCount}/>
      <ProductList />
    </>
  )
}

export default ProductsPage