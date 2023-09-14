import photoReel from './PhotoReel.module.css'
import backBtn from '../../assets/previous.png'
import nextBtn from '../../assets/next.png'
import jacket from '../../assets/jacket.jpg'
import tshirts from '../../assets/cotton-tees.jpg'
import memoryDrive from '../../assets/memory-drive.jpg'
import monitor from '../../assets/monitor-setup.jpg'
import winterCoat from '../../assets/winter-coat.jpg'


function PhotoReel() {
  return (
    <div className={photoReel.container}>
      <button className={photoReel.previous}>
      <img src={backBtn} alt="back button" />
      </button>
      <button className={photoReel.next}>
      <img src={nextBtn} alt="next button" />
      </button>
    </div>
  )
}

export default PhotoReel