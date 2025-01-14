/* eslint-disable */
import React from 'react'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from '../../../node_modules/react-bootstrap'

import './styled.css'
import { Link } from 'gatsby'
class Homecovid extends React.Component {
  render() {
    return (
      <div className="Homecovid-min">
        <Container>
          <Row>
            <Col md="4">
              <h2>Important</h2>
            </Col>
            <Col md="6" className="offset-md-1">
              <p>
                If you're an organization struggling with the impact of
                moviing your work and team remote due to the COVID-19
                outbreak, please reach out.
              </p>
              <p>
                We can help you minimize the impact of sudden remote work due to
                COVID-19 on internal business operations.
              </p>
              <p>
                As an organization, we&apos;ve been working remotely for over
                ten years and have experience delivering high velocity and
                high-quality remote work for product, design, engineering and
                testing teams. We can help you immediately manage the
                transition.
              </p>
              <Link
                className="styled__Link-lfEBUk iUBhrC"
                to="/covid-19"
              >
                Read more on our Covid-19 service offering
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#a71400" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </Col>
            <Col md="2"></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Homecovid
