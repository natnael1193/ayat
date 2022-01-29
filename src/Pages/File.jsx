import React from 'react'

const File = () => {
    return (
        <div>
          <section class="intro-single">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-8">
                            <div class="title-single-box">
                                <h1 class="title-single">304 Blaster Up</h1>
                                <span class="color-text-a">Chicago, IL 606543</span>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <Link to="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <Link to="property-grid.html">Properties</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        304 Blaster Up
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Contact US</h1>
                <span className="color-text-a">Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa.</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-map box">
                <div id="map" className="contact-map">
                  {/* <iframe src={googleMap} width="100%" height="450" frameborder="0" style="border:0" allowfullscreen/> */}
                  <Iframe iframe={iframe} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 section-t8">
              <div className="row">
                <div className="col-md-7">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control form-control-lg form-control-a" placeholder="Your Name" required />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input name="email" type="email" className="form-control form-control-lg form-control-a" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="text" name="subject" className="form-control form-control-lg form-control-a" placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea name="message" className="form-control" name="message" cols="45" rows="8" placeholder="Message" required></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 my-3">
                        <div className="mb-3">
                          <div className="loading">Loading</div>
                          <div className="error-message"></div>
                          <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                      </div>

                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-a">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-5 section-md-t3">
                  <div className="icon-box section-b2">
                    <div className="icon-box-icon">
                      <span className="bi bi-envelope"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Say Hello</h4>
                      </div>
                      <div className="icon-box-content">
                        <p className="mb-1">Email.
                          <span className="color-a">contact@example.com</span>
                        </p>
                        <p className="mb-1">Phone.
                          <span className="color-a">+54 356 945234</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box section-b2">
                    <div className="icon-box-icon">
                      <span className="bi bi-geo-alt"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Find us in</h4>
                      </div>
                      <div className="icon-box-content">
                        <p className="mb-1">
                          Manhattan, Nueva York 10036,
                          <br /> EE. UU.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="icon-box">
                    <div className="icon-box-icon">
                      <span className="bi bi-share"></span>
                    </div>
                    <div className="icon-box-content table-cell">
                      <div className="icon-box-title">
                        <h4 className="icon-title">Social networks</h4>
                      </div>
                      <div className="icon-box-content">
                        <div className="socials-footer">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <Link to="#" className="link-one">
                                <i className="bi bi-facebook" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="link-one">
                                <i className="bi bi-twitter" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="link-one">
                                <i className="bi bi-instagram" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="link-one">
                                <i className="bi bi-linkedin" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
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

export default File
