/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import './styled.css'
class Whyurbian extends React.Component {
  render() {
    return (
      <Container className="spb-10 overview">
        <Row className="text-center">
          <Col lg="6" className="offset-lg-3">
            <p>
              lnsurtech has highlighted the substantial benefits of machine
              learning, Al, loT, and other emerging technologies. Their
              speed-to-market proves that to win today and ensure future
              viability, organizations must equip themselves to thrive in a much
              more dynamic future. By tapping into the capabilities afforded by
              new technologies and modes of working, insurers can improve core
              operations, bring efficiencies to business processes, develop new
              sources of revenue and reach, and successfully navigate disruption
              in the marketplace.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Whyurbian
