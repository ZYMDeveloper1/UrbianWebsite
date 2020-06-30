/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import './styled.css'
class Whyurbian extends React.Component {
  render() {
    return (
      <Container className="spb-10">
        <Row>
          <Col lg="2">
            <h2>Why use Urbian?</h2>
          </Col>
          <Col lg="9" className="offset-sm-1">
            <Row>
              <Col md="4" className="colgrid">
                <h5>Truly Agile</h5>
                <p>
                  We don't pay lip service to Agile methodologies: we live and
                  breathe them everyday whether on client work or our own
                  startups. Our prototype-first approach helps us get tangible
                  fast, mitigate risks, and quickly uncover new opportunities
                  and challenges. We understand how to make Agile practices work
                  within traditional and heavily regulated R&D processes and
                  organisations.
                </p>
              </Col>
              <Col md="4" className="colgrid">
                <h5>Teaching by Doing</h5>
                <p>
                  We bring our clients on the product journey: from executive
                  coaching sessions to working shoulder-to-shoulder with product
                  teams, we use a' show me, don't tell me' approach. Our tools
                  and techniques are expkicitly designed for the needs of
                  organisations moving to being fully 'digital'.
                </p>
              </Col>
              <Col md="4" className="colgrid"> 
                <h5>Practice</h5>
                <p>
                  Long before it became popular, we embraced agile and blended
                  teams with our clients, developing new and different ways of
                  working. We've done the hard yards to master how we take our
                  clients on the journey with us, and honed our skills at
                  changing culture and behavior around collaboration,
                  experimentation and shipping early.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Whyurbian
