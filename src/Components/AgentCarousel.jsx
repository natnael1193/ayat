import React from 'react'
import { Link } from 'react-router-dom'

import agent4 from "../assets/img/agent-4.jpg"
import agent1 from "../assets/img/agent-1.jpg"
import agent5 from "../assets/img/agent-5.jpg"

const AgentCarousel = () => {
    return (
        <div>
            <section className="section-agents section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Best Agents</h2>
              </div>
              <div className="title-link">
                <Link to="agents-grid.html">All Agents
                  <span className="bi bi-chevron-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src={agent4} alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover text-white">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center text-white">
                    <h3 className="title-d">
                      <Link to="agent-single.html" className="link-two  text-white">Margaret Sotillo
                        <br/> Escala</Link>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a  text-white">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p className="text-white">
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p className="text-white">
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src={agent1} alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <Link to="agent-single.html" className="link-two text-white">Stiven Spilver
                        <br/> Darw</Link>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a text-white">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p className="text-white">
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p className="text-white">
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src={agent5} alt="" className="img-d img-fluid"/>
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <Link to="agent-single.html" className="link-two text-white">Emma Toledo
                        <br/> Cascada</Link>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a text-white">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p className="text-white">
                      <strong>Phone: </strong> +54 356 945234
                    </p>
                    <p className="text-white">
                      <strong>Email: </strong> agents@example.com
                    </p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-twitter" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-instagram" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#" className="link-one">
                          <i className="bi bi-linkedin" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default AgentCarousel
