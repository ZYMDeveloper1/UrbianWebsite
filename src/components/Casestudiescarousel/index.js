/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Carousel from 'react-bootstrap/Carousel'
import Casestudies1 from '../../assets/images/Casestudies-slider.jpg'
class Casestudiescarousel extends React.Component {
  render() {
    return (
      <div className="Casestudiescarousel spb-10">
        <Container>
          <Row className="sp-5">
            <Col className="col-sm-6 col-lg-4">
              <h3>
                Select projects we are currently working on...
              </h3>
            </Col>
          </Row>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col sm="7">
                    <img className="img-fluid" src={Casestudies1} alt="#" />
                  </Col>
                  <Col sm="5">
                    <span class="type">Digital Transformation</span>
                    <h3>Liberty Insurance Direct</h3>
                    <p>
                      <a>Ongoing transformation</a>
                      of the Liberty Direct Insurance digital self-service
                      customer-facing and employee-facing products, all enabled
                      by us launching their first ever
                      <a> insurance API.</a>
                    </p>
                    <Link
                      className="styled__Link-lfEBUk iUBhrC font-weight-normal"
                      to="/casestudy"
                    >
                      View case study
                      <svg
                        className="styled__Arrow-fdeFVt fRPwvC"
                        width="14"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#030303" fill="none" fillRule="evenodd">
                          <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                          <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                        </g>
                      </svg>
                    </Link>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col sm="7">
                    <img className="img-fluid" src={Casestudies1} alt="#" />
                  </Col>
                  <Col sm="5">
                    <span class="type">Digital Transformation</span>
                    <h3>Liberty Insurance Direct</h3>
                    <p>
                      <a>Ongoing transformation </a> of the Liberty Direct
                      Insurance digital self-service customer-facing and
                      employee-facing products, all enabled by us launching
                      their first ever
                    </p>
                    <Link
                      className="styled__Link-lfEBUk iUBhrC font-weight-normal"
                      to="/casestudy"
                    >
                      View case study
                      <svg
                        className="styled__Arrow-fdeFVt fRPwvC"
                        width="14"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#030303" fill="none" fillRule="evenodd">
                          <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                          <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                        </g>
                      </svg>
                    </Link>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
            <Col md="12" className="text-center pt-5 mt-5">
              <Link
                className="styled__Link-lfEBUk iUBhrC font-weight-normal mt-5"
                to="/work"
              >
                More case studies
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#030303" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Casestudiescarousel
