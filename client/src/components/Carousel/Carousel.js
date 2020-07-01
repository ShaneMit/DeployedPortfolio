import React from 'react'
import ArchRock from './../../assets/Arch-Rock.jpg'
import JoshuaTree from './../../assets/Joshua-Tree.jpg'
import Monterey from './../../assets/Monterey.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide container carousel-fade" data-ride="carousel" style={{paddingBottom: '20px'}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ArchRock} className="d-block w-100" alt="ArchRock"/>
    </div>
          <div className="carousel-item">
            <img src={JoshuaTree} className="d-block w-100" alt="JoshuaTree"/>
    </div>
            <div className="carousel-item">
              <img src={Monterey} className="d-block w-100" alt="Monterey"/>
    </div>
            </div>
          </div>
  )
}

export default Carousel