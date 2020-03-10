import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Properties from '../Properties';

export default function Home() {

  return (
    <div>
      <Navbar />
      <Carousel className="carousel-fade">
        <Carousel.Item>
          <div className="site-blocks-cover overlay" id="first-carousel" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-10">
                  <span className="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">For Rent</span>
                  <h1 className="mb-2">871 Crenshaw Blvd</h1>
                  <p className="mb-5"><strong className="h2 text-success font-weight-bold">$2,250,500</strong></p>
                  <p><a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="site-blocks-cover overlay" id="second-carousel" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-10">
                  <span className="d-inline-block bg-danger text-white px-3 mb-3 property-offer-type rounded">For Sale</span>
                  <h1 className="mb-2">625 S. Berendo St</h1>
                  <p className="mb-5"><strong className="h2 text-success font-weight-bold">$1,000,500</strong></p>
                  <p><a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="site-blocks-cover overlay" id="third-carousel" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-10">
                  <span className="d-inline-block bg-primary text-white px-3 mb-3 property-offer-type rounded">For Rent</span>
                  <h1 className="mb-2">291 Westlands</h1>
                  <p className="mb-5"><strong className="h2 text-success font-weight-bold">$790,500</strong></p>
                  <p><a href="#" className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item> 
      </Carousel>       

      <div className="site-section site-section-sm pb-0">
        <div className="container">
          <div className="row">
            <form className="form-search col-md-12" style={{marginTop: `-100px`}}>
              <div className="row  align-items-end">
                <div className="col-md-3">
                  <label htmlFor="list-types">Listing Types</label>
                  <div className="select-wrap">
                    <span className="icon icon-arrow_drop_down"></span>
                    <select name="list-types" id="list-types" className="form-control d-block rounded-0">
                      <option value="">Condo</option>
                      <option value="">Commercial Building</option>
                      <option value="">Land Property</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="offer-types">Offer Type</label>
                  <div className="select-wrap">
                    <span className="icon icon-arrow_drop_down"></span>
                    <select name="offer-types" id="offer-types" className="form-control d-block rounded-0">
                      <option value="">For Sale</option>
                      <option value="">For Rent</option>
                      <option value="">For Lease</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="select-city">Select City</label>
                  <div className="select-wrap">
                    <span className="icon icon-arrow_drop_down"></span>
                    <select name="select-city" id="select-city" className="form-control d-block rounded-0">
                      <option value="">New York</option>
                      <option value="">Brooklyn</option>
                      <option value="">London</option>
                      <option value="">Japan</option>
                      <option value="">Philippines</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <input type="submit" className="btn btn-success text-white btn-block rounded-0" value="Search"/>
                </div>
              </div>
            </form>
          </div>  

          <div className="row">
            <div className="col-md-12">
              <div className="view-options bg-white py-3 px-3 d-md-flex align-items-center">
                <div className="mr-auto">
                  <a href="index.html" className="icon-view view-module active"><span className="icon-view_module"></span></a>
                  <a href="view-list.html" className="icon-view view-list"><span className="icon-view_list"></span></a>
                  
                </div>
                <div className="ml-auto d-flex align-items-center">
                  <div>
                    <a href="#" className="view-list px-3 border-right active">All</a>
                    <a href="#" className="view-list px-3 border-right">Rent</a>
                    <a href="#" className="view-list px-3">Sale</a>
                  </div>


                  <div className="select-wrap">
                    <span className="icon icon-arrow_drop_down"></span>
                    <select className="form-control form-control-sm d-block rounded-0">
                      <option value="">Sort by</option>
                      <option value="">Price Ascending</option>
                      <option value="">Price Descending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section site-section-sm bg-light">
        <div className="container">
          <Properties />
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <div className="site-section-title">
                <h2>Why Choose Us?</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a href="#" className="service text-center">
                <span className="icon flaticon-house"></span>
                <h2 className="service-heading">Research Subburbs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
                <p><span className="read-more">Read More</span></p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#" className="service text-center">
                <span className="icon flaticon-sold"></span>
                <h2 className="service-heading">Sold Houses</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
                <p><span className="read-more">Read More</span></p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#" className="service text-center">
                <span className="icon flaticon-camera"></span>
                <h2 className="service-heading">Security Priority</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.</p>
                <p><span className="read-more">Read More</span></p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center">
              <div className="site-section-title">
                <h2>Recent Blog</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
              <a href="#"><img src="images/img_4.jpg" alt="Image" className="img-fluid"/></a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
              <a href="#"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">
              <a href="#"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7">
              <div className="site-section-title text-center">
                <h2>Our Agents</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero magnam officiis ipsa eum pariatur labore fugit amet eaque iure vitae, repellendus laborum in modi reiciendis quis! Optio minima quibusdam, laboriosam.</p>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded mb-4"/>

                  <div className="text">

                    <h2 className="mb-2 font-weight-light text-black h4">Megan Smith</h2>
                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorem totam non quis facere blanditiis praesentium est. Totam atque corporis nisi, veniam non. Tempore cupiditate, vitae minus obcaecati provident beatae!</p>
                    <p>
                      <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                      <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                      <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded mb-4"/>

                  <div className="text">

                    <h2 className="mb-2 font-weight-light text-black h4">Brooke Cagle</h2>
                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cumque vitae voluptates culpa earum similique corrupti itaque veniam doloribus amet perspiciatis recusandae sequi nihil tenetur ad, modi quos id magni!</p>
                    <p>
                      <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                      <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                      <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                <div className="team-member">

                  <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded mb-4"/>

                  <div className="text">

                    <h2 className="mb-2 font-weight-light text-black h4">Philip Martin</h2>
                    <span className="d-block mb-3 text-white-opacity-05">Real Estate Agent</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo.</p>
                    <p>
                      <a href="#" className="text-black p-2"><span className="icon-facebook"></span></a>
                      <a href="#" className="text-black p-2"><span className="icon-twitter"></span></a>
                      <a href="#" className="text-black p-2"><span className="icon-linkedin"></span></a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}
