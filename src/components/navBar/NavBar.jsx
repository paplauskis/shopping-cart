import navBar from './NavBar.module.css'
import cartImage from '../../assets/cart.png';

function NavBar() {
  return (
    <header>
      <h1>RNDMshop</h1>
      <div className={navBar.links}>
        <a href="/">Shop</a>
        <a href='/'><img src={cartImage} alt="shopping cart icon" /> </a>
      </div>
    </header>
  )
}

export default NavBar