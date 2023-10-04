import scrollingBar from './Scrolling-bar.module.css'
import { useEffect } from 'react'

function ScrollBar() {
  
  return (
    <div className={scrollingBar.scrollBar} data-animated={true}>
      <ul className={scrollingBar.innerScroller}>
        <li>100% original products</li>
        <li>NOT A SCAM</li>
        <li>Free shipping</li>
        <li>10% off with news letter sign up</li>
        <li>LIMITED SUPPLY</li>
        <li>100% original products</li>
        <li>NOT A SCAM</li>
        <li>Free shipping</li>
        <li>10% off with news letter sign up</li>
        <li>LIMITED SUPPLY</li>
      </ul>
    </div>
  )
}

export default ScrollBar