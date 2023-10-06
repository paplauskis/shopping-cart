import navBar from './NavBar.module.css'
import cartImage from '../../assets/cart.png'
import { Link } from 'react-router-dom'

function NavBar({ cartItemCount }) {

  return (
    <header>
      <h1>
        <Link to='/'>RNDMshop</Link>
      </h1>
      <div className={navBar.links}>
        <Link to='/products'>Shop</Link>
        <Link to='/cart'>
          <div className={navBar.cart}>
            <img src={cartImage} alt='shopping cart icon' />
            {cartItemCount > 0 && <div className={navBar.count}>{cartItemCount}</div>}
          </div>
        </Link>
      </div>
    </header>
  )
}

export default NavBar
