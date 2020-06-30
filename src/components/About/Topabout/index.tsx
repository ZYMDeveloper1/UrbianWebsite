/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import aboutimg1 from '../../../assets/images/about-img-1.jpg'
import aboutimg2 from '../../../assets/images/abot-img-2.jpg'
import aboutimg3 from '../../../assets/images/about-img-3.jpg'

class Top extends React.Component {
  render() {
    return (
      <Container className="introduction content-wrap">
        <Row className="sp-8">
          <Col md="8" lg="6">
            <h1>We&apos;re a new kind of consulting company.</h1>
            <p>
              We listen, we challenge, we work collaboratively, we make things
              -&nbsp;
              <Link className="styled__Link-lfEBUk iUBhrC" to="/services">
                faster than you&apos;d believe.
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
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="about-image-grid">
          	<div>
            	<img src={aboutimg1} className="img-fluid" alt="Team" />
          	</div>
          	<div>
            	<img src={aboutimg3} className="img-fluid" alt="Team" />
          	</div>
          	<div>
            	<img src={aboutimg2} className="img-fluid" alt="Team" />
          	</div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Top
