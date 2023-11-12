import { getAllByTitle } from '@testing-library/react';
import React, { Component } from 'react'

export class Naya extends Component {






  render() {
    let { title, description, imageUrl, url, author, date, source } = this.props;

    return (
      

      <div className="my-3 mx-auto   text-white align= center">

        <div className="card">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style ={{left:'90%', zIndex:'1'}}>
              {source}

            </span> 
          <img src={!imageUrl ? "https://media.istockphoto.com/id/187925868/vector/newspaper-cover-page.jpg?s=612x612&w=0&k=20&c=SantJnFi_0dCOD_HUXgRSJxagvgL7Wp_F_e-rFSUV_E=" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}... <h6>NewsPulse : <span class="badge  text-bg-primary ">Latest</span></h6>  </p>

            <p class="card-text text-grey"><small class="text">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>

          </div>
        </div>
      </div>
    )
  }
}

export default Naya 