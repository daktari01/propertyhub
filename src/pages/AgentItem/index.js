import React from 'react'

function AgentItem({name, image, title, description, fb, twitter, linkedin}) {
  return (
    <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
      <div className="team-member">

      <img src={image} alt="Image" className="img-fluid rounded mb-4"/>

      <div className="text">

        <h2 className="mb-2 font-weight-light text-black h4">{name}</h2>
        <span className="d-block mb-3 text-white-opacity-05">{title}</span>
        <p>{description}</p>
        <p className="text-center">
          <a href={fb} className="text-black p-2"><i className="fa fa-facebook"></i></a>
          <a href={twitter} className="text-black p-2"><i className="fa fa-twitter"></i></a>
          <a href={linkedin} className="text-black p-2"><i className="fa fa-linkedin"></i></a>
        </p>
      </div>

      </div>
    </div>
  )
}

export default AgentItem;
