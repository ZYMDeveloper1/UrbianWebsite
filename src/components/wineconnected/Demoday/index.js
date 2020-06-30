/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import img7 from '../../../assets/images/Screens2020.png'
import img1 from '../../../assets/images/_DSC1643-9340.jpg'
import img2 from '../../../assets/images/_DSC1743-9389.jpg'
import img3 from '../../../assets/images/_DSC1740-9379.jpg'
import img4 from '../../../assets/images/_DSC1735-9353.jpg'
import img5 from '../../../assets/images/_DSC1670-9344.jpg'
import img6 from '../../../assets/images/_DSC1744-9382.jpg'
import ReactPlayer from 'react-player'
class Demoday extends React.Component {
  render() {
    return (
      <Container className="spt-8">
        <Row>
          <Col className="offset-md-1 offset-lg-3 col-lg-6 col-md-10">
            <h2>
              Keeping stakeholders informed throughout the program journey.
            </h2>
            <p>
              We used the program software and video summaries to ensure all
              Diageo stakeholders were kept up to date on key milestones of the
              program to provide as much accountability as possible.
            </p>
          </Col>
        </Row>
        <Row className="spt-5">
          <Col>
            <div>
              <img
                src={img7}
                className="img-fluid"
                alt="#"
              />
              <span className="img-text">
                We are here at the social tech workshop.
              </span>
            </div>
          </Col>
        </Row>
        <Row  className="spt-8">
          <Col className="offset-md-1 offset-lg-3 col-lg-6 col-md-10">
            <h2>Demo Day.</h2>
            <p>
              18 months of had work culmintated the final pitch day. 15 of the
              top startups we provided the opportunity to engage with over 40
              venture capitalits while the final 5 startups hit the stage and
              pitched their hearts out for a share of the R5 million investment
              capital.
            </p>
            <Link
              className="styled__Link-lfEBUk iUBhrC font-weight-normal"
              to="/contact"
            >
              Visit the website to see the results
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
          <Col lg="3" md="1"></Col>
        </Row>
        <Row className="mt-5">
          <Col sm="4" className="mt-5">
            <img
              src={img1}
              className="img-fluid"
              alt="#"
            />
            <Row>
              <Col sm="5">
                <img
                  src={img5}
                  className="img-fluid"
                  alt="#"
                />
              </Col>
              <Col sm="7">
                <img
                  src={img6}
                  className="img-fluid"
                  alt="#"
                />
              </Col>
            </Row>
          </Col>
          <Col sm="4">
            <img
              src={img2}
              className="img-fluid"
              alt="#"
            />
          </Col>
          <Col sm="4" className="mt-5">
            <img
              src={img3}
              className="img-fluid"
              alt="#"
            />
            <img
              src={img4}
              className="img-fluid"
              alt="#"
            />
          </Col>
          <Col sm="12" className="spb-5">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://player.vimeo.com/video/347119375?color=ef2200&byline=0&portrait=0"
                width="100%"
                height="100%"
                controls
                loop
              />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Demoday
