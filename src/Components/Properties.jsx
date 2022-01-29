import React from 'react'
import { Link } from 'react-router-dom'
import property6 from '../assets/img/property-6.jpg'
import property3 from '../assets/img/property-3.jpg'
import property7 from '../assets/img/property-7.jpg'
import property10 from '../assets/img/property-10.jpg'

const Properties = () => {
  return (
    <div>
      <section className="section-property section-t8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Latest Properties</h2>
                </div>
                <div className="title-link">
                  <Link to="property-grid.html">All Property
                    <span className="bi bi-chevron-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div id="property-carousel" className="swiper">
            <div className="swiper-wrapper">

              <div className="carousel-item-b swiper-slide">
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src={property6} alt="" className="img-a img-fluid" style={{height: '70vh', width: '100%'}}/>
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <Link to="property-single.html">206 Mount
                                <br /> Olive Road Two</Link>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <Link to="/propertyDetail" className="link-a">Click here to view
                              <span className="bi bi-chevron-right"></span>
                            </Link>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title text-white">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src={property6} alt="" className="img-a img-fluid" style={{height: '70vh', width: '100%'}}/>
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <Link to="property-single.html">206 Mount
                                <br /> Olive Road Two</Link>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <Link to="/propertyDetail" className="link-a">Click here to view
                              <span className="bi bi-chevron-right"></span>
                            </Link>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title text-white">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-2">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src={property6} alt="" className="img-a img-fluid" style={{height: '70vh', width: '100%'}}/>
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <Link to="property-single.html">206 Mount
                                <br /> Olive Road Two</Link>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <Link to="/propertyDetail" className="link-a">Click here to view
                              <span className="bi bi-chevron-right"></span>
                            </Link>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title text-white">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-2">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img src={property6} alt="" className="img-a img-fluid" style={{height: '70vh', width: '100%'}}/>
                      </div>
                      <div className="card-overlay">
                        <div className="card-overlay-a-content">
                          <div className="card-header-a">
                            <h2 className="card-title-a">
                              <Link to="property-single.html">206 Mount
                                <br /> Olive Road Two</Link>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <Link to="/propertyDetail" className="link-a">Click here to view
                              <span className="bi bi-chevron-right"></span>
                            </Link>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title text-white">Area</h4>
                                <span>340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Beds</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Baths</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title text-white">Garages</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* <!-- End carousel item --> */}

              <div className="carousel-item-b swiper-slide">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src={property3} alt="" className="img-a img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <Link to="property-single.html">157 West
                            <br /> Central Park</Link>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">rent | $ 12.000</span>
                        </div>
                        <Link to="/propertyDetail" className="link-a">Click here to view
                          <span className="bi bi-chevron-right"></span>
                        </Link>
                      </div>
                      <div className="card-footer-a">
                        <ul className="card-info d-flex justify-content-around">
                          <li>
                            <h4 className="card-info-title text-white">Area</h4>
                            <span>340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 className="card-info-title text-white">Beds</h4>
                            <span>2</span>
                          </li>
                          <li>
                            <h4 className="card-info-title text-white">Baths</h4>
                            <span>4</span>
                          </li>
                          <li>
                            <h4 className="card-info-title text-white">Garages</h4>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End carousel item --> */}

              <div className="carousel-item-b swiper-slide">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src={property7} alt="" className="img-a img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <Link to="property-single.html">245 Azabu
                            <br /> Nishi Park let</Link>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">rent | $ 12.000</span>
                        </div>
                        <Link to="property-single.html" className="link-a">Click here to view
                          <span className="bi bi-chevron-right"></span>
                        </Link>
                      </div>
                      <div className="card-footer-a">
                        <ul className="card-info d-flex justify-content-around">
                          <li>
                            <h4 className="card-info-title">Area</h4>
                            <span>340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Beds</h4>
                            <span>2</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Baths</h4>
                            <span>4</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Garages</h4>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End carousel item --> */}

              <div className="carousel-item-b swiper-slide">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src={property10} alt="" className="img-a img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <Link to="property-single.html">204 Montal
                            <br /> South Bela Two</Link>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">rent | $ 12.000</span>
                        </div>
                        <Link to="property-single.html" className="link-a">Click here to view
                          <span className="bi bi-chevron-right"></span>
                        </Link>
                      </div>
                      <div className="card-footer-a">
                        <ul className="card-info d-flex justify-content-around">
                          <li>
                            <h4 className="card-info-title">Area</h4>
                            <span>340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Beds</h4>
                            <span>2</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Baths</h4>
                            <span>4</span>
                          </li>
                          <li>
                            <h4 className="card-info-title">Garages</h4>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End carousel item --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Properties
