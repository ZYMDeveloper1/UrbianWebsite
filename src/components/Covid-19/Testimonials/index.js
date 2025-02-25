/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import Carousel from 'react-bootstrap/Carousel'
import bloombergLogo from '../../../assets/images/bloomberg-logo.jpg'

class Testimonials extends React.Component {
  render() {
    return (
      <div className="Testimonials-slider testimonial">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <h2>
                  The pandemic is leading not just to a partial economic
                  shutdown but to a shift: from a high-touch to a low-touch
                  economy.
                </h2>
                <img
                  width="127"
                  height="40"
                  src={bloombergLogo}
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>
                  The pandemic is leading not just to a partial economic
                  shutdown but to a shift: from a high-touch to a low-touch
                  economy.
                </h2>
                <img
                  width="127"
                  height="40"
                  src={bloombergLogo}
                  className="img-fluid"
                />
              </Carousel.Item>
              <Carousel.Item>
                <h2>
                  The pandemic is leading not just to a partial economic
                  shutdown but to a shift: from a high-touch to a low-touch
                  economy.
                </h2>
                <img
                  width="127"
                  height="40"
                  src={bloombergLogo}
                  className="img-fluid"
                />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Testimonials
