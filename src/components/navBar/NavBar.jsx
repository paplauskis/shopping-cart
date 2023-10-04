import navBar from './NavBar.module.css'
import cartImage from '../../assets/cart.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
      <h1>
        <Link to='/'>RNDMshop</Link>
      </h1>
      <div className={navBar.links}>
        <Link to='products'>Shop</Link>
        <Link to='cart'>
          <img src={cartImage} alt='shopping cart icon' />
        </Link>
      </div>
    </header>
  )
}

export default NavBar
