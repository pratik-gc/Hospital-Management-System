import React from "react";
import doc1 from "../../images/top-hospital-management-system.jpg";
import landingpage from "../../images/landingpage.jpg";
import healthtransform from "../../images/health-transform.png";
import home1 from "../../images/home1.png";
import home2 from "../../images/home2.png";
import "../../css/HomePage/customTestimonials.css";
import "../../css/HomePage/customServices.css";
import "../../css/HomePage/customFooter.css";
import { Button, Container, Nav,  Navbar } from "react-bootstrap";

function HomePage() {

  return (
    <div>
      {/* Header-------------- */}
      

      <Navbar bg="dark" collapseOnSelect expand="lg" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Silver Spring Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#serviceid">Services</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="/login">
            <Button id="home_page_login" variant="outline-primary" style={{width:"100px"}}>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

{/* navbar ends  */}




      {/* Images Start------------- */}

      <div className="startImage w-100 mt-5" id="home">
        <img src={home1} className="d-block w-100" alt="home1_image" />
        <img src={home2} className="d-block w-100" alt="home2_image"/>
      </div>

      {/* Testimonials Div Container------------------ */}
      <div className="testimonalsDiv">
        {/* Testimonials------------------ */}

        <div className="testimonials">
          <figure className="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
              alt="profile-sample3"
              className="profile"
            />
            <figcaption>
              <h2>Eleanor Crisp</h2>
              <h4>UX Design</h4>
              <blockquote>
                Dad buried in landslide! Jubilant throngs fill streets! Stunned
                father inconsolable - demands recount!
              </blockquote>
            </figcaption>
          </figure>
          <figure className="snip1390 hover">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
              alt="profile-sample5"
              className="profile"
            />
            <figcaption>
              <h2>Gordon Norman</h2>
              <h4>Accountant</h4>
              <blockquote>
                Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I
                think my cerebellum has just fused.{" "}
              </blockquote>
            </figcaption>
          </figure>
          <figure className="snip1390 hover">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
              alt="profile-sample5"
              className="profile"
            />
            <figcaption>
              <h2>Gordon Norman</h2>
              <h4>Accountant</h4>
              <blockquote>
                Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I
                think my cerebellum has just fused.{" "}
              </blockquote>
            </figcaption>
          </figure>
          <figure className="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
              alt="profile-sample6"
              className="profile"
            />
            <figcaption>
              <h2>Sue Shei</h2>
              <h4>Public Relations</h4>
              <blockquote>
                The strength to change what I can, the inability to accept what
                I can't and the incapacity to tell the difference.
              </blockquote>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Services ----------------- */}
      <div className="servicesDiv row" id="serviceid" style={{width:"100%",margin:"0px",padding:"0px"}}>
        {/* services left div ----------- */}
        <div className="col-md-6 col-xs-12 row">
          {/* cards ------------- */}
          <div className="col-md-6 col-xs-12">

            <div className="card text-bg-light  mb-3 mt-2">
              <figure className="serviceCards">
                <figcaption>
                  <h2>Bariatric Surgery</h2>
                  <blockquote>
                    The department of Bariatric Surgery is a hub of excellence,
                    backed by fully equipped labs, ICU units and a team of
                    trained speciallists.
                  </blockquote>
                </figcaption>
              </figure>
            </div>

            <div className="card text-bg-light mb-1">
            <figure className="serviceCards">
              <figcaption>
                <h2>Breast Cancer </h2>
                <blockquote>
                  For your comfort, we have an all-women's team of dedicated
                  experts to help you with any breast-related complaints and overall best Treatment.
                </blockquote>
              </figcaption>
            </figure>
          </div>
          </div>

          <div className="col-md-6 col-xs-12">
            <div className="card text-bg-light mb-3 mt-2">
              <figure className="serviceCards">
                <figcaption>
                  <h2>Cardiac Surgery</h2>
                  <blockquote>
                    Strictly adhering to the latest trends in technology, we
                    resort to the use of up to the minute techniques and
                    methods.
                  </blockquote>
                </figcaption>
              </figure>
            </div>

            <div className="card text-bg-light mb-3">
              <figure className="serviceCards">
                <figcaption>
                  <h2>Cardiology</h2>
                  <blockquote>
                    Interventional cardiology includes the full range of cardiac
                    and vascular surgury, we offer a full range of treatements
                    and services.
                  </blockquote>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* services right div ----------- */}
        
        <div className="col-md-6 col-xs-12" >
          <img src={landingpage} className="serviceImg w-100" alt="hospital_image" style={{    marginTop:" 13%",marginLeft: "5%"}}/>
        </div>

      </div>

      {/* Footer --------------- */}

      <div className="footerDiv" id="aboutUs">
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="bi bi-geo-alt"></i>
                    <div className="cta-text">
                      <h4>Find us</h4>
                      <span>Pune, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="bi bi-phone"></i>

                    <div className="cta-text" id="contactUs">
                      <h4>Call us</h4>
                      <span>9856102347</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                    <i className="bi bi-envelope-at"></i>
                    <div className="cta-text">
                      <h4>Mail us</h4>
                      <span>silver-spring@info.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src={doc1} className="doc1Img" alt="doc1_image"/>
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>
                        Silver spring is a health care provider, par excellence,
                        fast establishing itself as a global industry model in
                        the tertiary healtcare system of India.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div
                      className="footer-widget"
                      style={{ color: "white", marginBottom: "30px" }}
                    >
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#home" className="custom-li">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#aboutUs" className="custom-li">
                          About us
                        </a>
                      </li>
                      <li>
                        <a href="#serviceid" className="custom-li">
                          Our Services
                        </a>
                      </li>
                      <li>
                        <a href="#contactUs" className="custom-li">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <h5 className="footerListServices">Services</h5>

                    <ul>
                      <li className="footerListServices">Bariatric Surgery</li>
                      <li className="footerListServices">Cardiac Surgery</li>
                      <li className="footerListServices">Breast Care Center</li>
                      <li className="footerListServices">Cardiology</li>
                      <li className="footerListServices">Chest Medicine</li>
                      <li className="footerListServices">Dialyais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <div style={{ color: "white" }}>
                      Copyright &copy; 2023, All Right Reserved{" "}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#serviceid">service</a>
                      </li>
                      
                      <li>
                        <a href="#contactus">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
