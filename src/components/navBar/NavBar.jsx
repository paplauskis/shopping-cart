import './NavBar.css'
import cartImage from '../../assets/cart.png';

function NavBar() {
  return (
    <header>
      <h1>RNDMshop</h1>
      <div className="links">
        <a href="/">Shop</a>
        <button><img src={cartImage} alt="shopping cart icon" /> </button>
      </div>
    </header>
  )
}

export default NavBar