/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import hitechimg from '../../../assets/images/hi-texh.jpg'
import downloadimg from '../../../assets/images/download.jpg'

class Downloadreport extends React.Component {
  render() {
    return (
      <Container className="sp-5 border-bottom">
        <Row className="align-items-center reversemobilerow">
          <Col lg="5" className="spt-5">
            <h2 class="h4">In this featured report we look at:</h2>
            <ul className="downloadList">
              <li>Why our world will be very different.</li>
              <li>
                10 Examples of expected shifts in consumer behaviour, and
                opportunities for businesses
              </li>
              <li>Which industries are impacted the most?</li>
              <li>What to do now</li>
            </ul>
            <Link className="downloadBtn sheet" to="/careers">
              Download Report
              <img src={downloadimg} alt="Download Report" />
            </Link>
          </Col>
          <Col lg="7">
            <img
              src={hitechimg}
              className="img-fluid hitechimg"
              alt="hitechimg"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Downloadreport
