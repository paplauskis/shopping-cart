import card from './ItemCard.module.css'

function ItemCard(props) {
  return (
    <div className={card.product} key={props.index}>
      <img src={props.item.image} alt='product' />
      <p className={card.price}>$ {props.item.price}</p>
      <p className={card.title}>{props.item.title}</p>
      <p className={card.rating}>
        Rating: <span>{props.item.rating.rate}/5</span>
      </p>
      <p className={card.count}>
        Reviews: <span>{props.item.rating.count}</span>
      </p>
      <button className={card.addToCart}>
        Add to cart <input type='number' name='item_amount' id={props.index} />
      </button>
    </div>
  )
}

export default ItemCard
