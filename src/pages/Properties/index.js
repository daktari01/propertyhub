import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Property from '../Property'
import { getPropertiesAction } from './action';


function Properties() {
  const {properties} = useSelector(state => state);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(getPropertiesAction());
  }, [stableDispatch]);

  console.log({properties})
  return (
    <div>
       <div className="row mb-5">
         {/* properties.map then render single property */}
         {properties && properties.payload.map(property => (
           <Property
            key={property.id}
            address={property.address}
            baths={property.baths}
            beds={property.beds}
            image_url={property.image_url}
            name={property.name}
            price={property.price}
            sq_ft={property.sq_ft}
            property_type={property.property_type}
           />
         ))}
           
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="site-pagination">
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <span>...</span>
              <a href="#">10</a>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default Properties;
