import React, { Component } from 'react'

export class Banners extends Component {
  render() {
    return (
      
      <div>
      <div id="carouselExample" className ="carousel slide">
      <br/>
      <br/>
      <div className ="carousel-inner ">
        <div className ="carousel-item active ">
          <img src="./images/NEWS.jpg" className ="d-block w-100" alt="..."/>
        </div>
        <div className ="carousel-item">
          <img src="./images/news2.png" className ="d-block w-100" alt="..."/>
        </div>
        {/* <div className ="carousel-item">
          <img src="https://i.pinimg.com/originals/4e/b9/45/4eb945eec0590f430da2b6fc4e6d9594.gif" className ="d-block w-100" alt="..."/>
        </div> */}
      </div>
      <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className ="visually-hidden">Previous</span>
      </button>
      <button className ="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className ="carousel-control-next-icon" aria-hidden="true"></span>
        <span className ="visually-hidden">Next</span>
      </button>
    </div>
    <image/>
    </div>
     
    
    )
  }
}

export default Banners