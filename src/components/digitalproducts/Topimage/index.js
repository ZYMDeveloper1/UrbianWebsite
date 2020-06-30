/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Bannerimg from '../../../assets/images/banner2-img.jpg'
class Topimage extends React.Component {
  render() {
    return (
      <Container className="scontent-wrap introduction">
        <Row className="sp-5">
          <div className="pb-5 col-12">
            <Link className="reversearrow" to="/services">
              View all services
              <svg
                className="styled__Arrow-d87459-0 bQLhSh"
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
          </div>
          <Col lg="7">
            <h1>We help in-house teams make better digital products with design systems</h1>
            <p>
              We work alongside your teams to tackle the toughest challenges
              head on. The result is one combined team making things the right
              way with fewer project hours invested in presentations and more on
              continous delivery.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <figure>
              <img
                src={Bannerimg}
                className="img-fluid"
                alt="Possibly some text here to not make this feel like a stock photo"
              />
              <figcaption>
                Possibly some text here to not make this feel like a stock photo
              </figcaption>
            </figure>
          </Col>
        </Row>
        <Row className="spb-10 border-bottom">
          <Col className="testimonial">
            <h2>
              The secret to their success is there ability to assemble talented
              teams of people that care. I think of Urbian as a critical member
              of my team, not some outsourced function.
            </h2>
            <span>
              Yves Henri Donat Mathieu-Saint-Laurent, CEO of Met-S Care
            </span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Topimage
