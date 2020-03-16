import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropertyItem from '../PropertyItem';
import { getPropertiesAction } from './action';
import Paginator from 'react-hooks-paginator';

function Properties() {
  const {properties} = useSelector(state => state);

  const pageLimit = 6;
 
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProperties, setCurrentProperties] = useState([]);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(getPropertiesAction());
  }, [stableDispatch]);
  
  useEffect(() => {
    setCurrentProperties(properties.payload.slice(offset, offset + pageLimit));
  }, [offset, properties]);

  return (
    <div>
       <div className="row mb-5">
         {properties && currentProperties.map(property => (
           <PropertyItem
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
            <Paginator
              totalRecords={properties.payload.length}
              pageLimit={pageLimit}
              pageNeighbours={1}
              setOffset={setOffset}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>  
        </div>
    </div>
  )
}

export default Properties;
