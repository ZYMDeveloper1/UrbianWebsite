/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import careerimg1 from '../../../assets/images/career-img1.jpg'
import careerimg2 from '../../../assets/images/career-img2.jpg'
import careerimg3 from '../../../assets/images/career-img3.jpg'
class Topsection extends React.Component {
  render() {
    return (
      <Container className="introduction content-wrap">
        <Row>
          <Col md="8" lg="6">
            <h1>Do the best work of your life.</h1>
            <p>
              We&apos;re on a mission to launch products, services, and
              companies that have a meaningful impact on the world.
            </p>
          </Col>
        </Row>
        <Row className="spt-7 ">
          <Col className="career-image-grid">
          	<div>
            	<img src={careerimg1} className="img-fluid" alt="careers" />
          	</div>
          	<div>
            	<img src={careerimg2} className="img-fluid" alt="careers" />
          	</div>
          	<div>
            	<img src={careerimg3} className="img-fluid" alt="careers" />
          	</div>
          </Col>
        </Row>
        <Row className="spb-8 border-bottom">
          <Col md="12" className="testimonial">
            <h2>
              I love that I can work from home in my underpants. This lockdown
              hasn&apos;t changed my work/life balance one bit, now all Urbian
              needs to do is make food and have it delivered to my home and then
              we&apos;ll be sorted.
            </h2>
            <span className="attribution">
              Heinrich Colyn, full-stack developer
            </span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Topsection
