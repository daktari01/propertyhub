import React from 'react'

export default function Property({address, baths, beds, image_url, name, price, sq_ft, property_type}) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="property-entry h-100">
        <a href="property-details.html" className="property-thumbnail">
          <div className="offer-type-wrap">
            {property_type.map((item, index) =>  <span className="offer-type bg-danger" key={index}>{item}</span>)}
          </div>
          {console.log(image_url)}
          <img src={image_url} alt="property" className="img-fluid"/>
        </a>
        <div className="p-4 property-body">
          <a href="#" className="property-favorite"><span className="icon-heart-o"></span></a>
          <h2 className="property-title"><a href="property-details.html">{name}</a></h2>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span>{address}</span>
          <strong className="property-price text-primary mb-3 d-block text-success">{price}</strong>
          <ul className="property-specs-wrap mb-3 mb-lg-0">
            <li>
              <span className="property-specs">Beds</span>
              <span className="property-specs-number">{beds}</span>
              
            </li>
            <li>
              <span className="property-specs">Baths</span>
              <span className="property-specs-number">{baths}</span>
              
            </li>
            <li>
              <span className="property-specs">SQ FT</span>
              <span className="property-specs-number">{sq_ft}</span>
              
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}
