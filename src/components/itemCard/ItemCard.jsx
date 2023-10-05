import card from './ItemCard.module.css'
import AddToCart from '../addToCart/AddToCart'

function ItemCard({ item, index }) {
  return (
    <div className={card.product} key={index}>
      <img src={item.image} alt='product' />
      <p className={card.price}>$ {item.price}</p>
      <p className={card.title}>{item.title}</p>
      <p className={card.rating}>
        Rating: <span>{item.rating.rate}/5</span>
      </p>
      <p className={card.count}>
        Reviews: <span>{item.rating.count}</span>
      </p>
      <AddToCart  index={index}/>
    </div>
  )
}

export default ItemCard
