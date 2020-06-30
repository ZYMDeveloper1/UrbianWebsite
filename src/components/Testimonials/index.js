/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styled.css'
import Carousel from 'react-bootstrap/Carousel'
class Testimonials extends React.Component {
  render() {
    return (
      <div className="testimonial Testimonials-slider">
        <Carousel>
          <Carousel.Item>
            <div className="inner">
              <h2>
                The secret to their success is there ability to assemble
                talented teams of people that care. I think of Urbian as a
                critical member of my team, not some outsourced function.
              </h2>
              <span className="attribution">Keith Elliott, CEO of Met-S Care</span>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inner">
              <h2>
                The secret to their success is there ability to assemble
                talented teams of people that care. I think of Urbian as a
                critical member of my team, not some outsourced function.
              </h2>
              <span className="attribution">Keith Elliott, CEO of Met-S Care</span>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="inner">
              <h2>
                The secret to their success is there ability to assemble
                talented teams of people that care. I think of Urbian as a
                critical member of my team, not some outsourced function.
              </h2>
              <span className="attribution">Keith Elliott, CEO of Met-S Care</span>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Testimonials
