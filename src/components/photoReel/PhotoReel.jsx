import photoReel from './PhotoReel.module.css'
import backBtn from '../../assets/previous.png'
import nextBtn from '../../assets/next.png'
import jacket from '../../assets/jacket.jpg'
import tshirts from '../../assets/cotton-tees.jpg'
import memoryDrive from '../../assets/memory-drive.jpg'
import monitor from '../../assets/monitor-setup.jpg'
import winterCoat from '../../assets/winter-coat.jpg'
import { useState } from 'react'

function PhotoReel() {
  const [currentImg, setCurrentImg] = useState(0)
  const allImgs = [jacket, tshirts, memoryDrive, monitor, winterCoat]
  const length = allImgs.length

  const nextImg = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  return (
    <div className={photoReel.container}>
      <button className={photoReel.previous} onClick={prevImg}>
        <img src={backBtn} alt='back button' />
      </button>
      {allImgs.map((img, index) => {
        return (
          <div className={index === currentImg ? photoReel.visible : photoReel.hidden} key={index}>
            {index === currentImg && <img src={allImgs[currentImg]} alt='image' />}
          </div>
        )
      })}
      <button className={photoReel.next} onClick={nextImg}>
        <img src={nextBtn} alt='next button' />
      </button>
    </div>
  )
}

export default PhotoReel
