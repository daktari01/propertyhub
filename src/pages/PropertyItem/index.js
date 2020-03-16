import React from 'react';

export default function PropertyItem({address, baths, beds, image_url, name, price, sq_ft, property_type}) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="property-entry h-100">
        <a href="property-details.html" className="property-thumbnail">
          <div className="offer-type-wrap">
            {property_type.map((item, index) =>  <span className="offer-type bg-danger" key={index}>{item}</span>)}
          </div>
          <img src={image_url} alt="property" className="img-fluid"/>
        </a>
        <div className="p-4 property-body">
          <a href="#" className="property-favorite"><i className="fa fa-heart-o"></i></a>
          <h2 className="property-title"><a href="property-details.html">{name}</a></h2>
          <span className="property-location d-block mb-3"><i className="fa fa-map-marker icon-room" aria-hidden="true"></i> {address}</span>
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
