/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'

class Outcomes extends React.Component {
  render() {
    return (
      <Container className="outcomes border-top spb-5">
        <Row>
          <Col lg="5">
            <h2>Outcomes</h2>
          </Col>
          <Col lg="7">
            <Row>
              <Col md="6">
                <strong>2,256</strong>
                <span>entrerprenuers served through the program</span>
              </Col>
              <Col md="6">
                <strong>1</strong>
                <span>Startup launched in market every 2 months.</span>
              </Col>
              <Col md="6">
                <strong>400%</strong>
                <span>Increase in applications from the previous year</span>
              </Col>
              <Col md="6">
                <strong>40</strong>
                <span>
                  venture capital investors attended the final demo day
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Outcomes
