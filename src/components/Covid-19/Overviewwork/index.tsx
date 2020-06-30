/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import join from '../../../assets/images/slack.jpg'
import googlesheet from '../../../assets/images/googlesheet.jpg'

import downloadimg from '../../../assets/images/download.jpg'
import slack from '../../../assets/images/join-slack.jpg'

class Overviewwork extends React.Component {
  render() {
    return (
      <Container>
        <Row className="spb-8 align-items-center">
          <Col lg="5">
            <span class="meta red">SLACK COMMUNITY</span>
            <h2>Join the discussion with others</h2>
            <p>
              Join this open Slack channel and get the chance to discuss and
              share all your thoughts on the Hi-tech Low Touch Economy, provide
              new input or share any feedback.
            </p>
            <Link className="downloadBtn slack" to="">
              


              Join the Slack channel
            </Link>
          </Col>
          <Col lg="6" className="offset-lg-1">
            <img
              src={slack}
              className="img-fluid"
              alt="Join the discussion with others"
            />
          </Col>
        </Row>
        <Row className="sp-10 align-items-center">
          <Col lg="6">
            <img
              src={googlesheet}
              className="img-fluid"
              alt="Download: Mindmap Cross Industry Ripple Effects"
            />
          </Col>
          <Col lg="5" className="offset-lg-1">
            <span className="meta red">GOOGLE SHEET</span>
            <h2>Download: Mindmap Cross Industry Ripple Effects</h2>
            <p>
              Plenty of companies are now shifting their focus. it' remarkable
              how many enterpreneurs are already building a new Low touch
              Economy to get our society back up and running.
            </p>
            <Link className="downloadBtn sheet" to="/careers">
              View the Pivot Sheet
              <img src={downloadimg} alt="View the Pivot Sheet" />
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Overviewwork
