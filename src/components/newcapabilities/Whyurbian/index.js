/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

import './styled.css'
class Whyurbian extends React.Component {
  render() {
    return (
      <Container className="spb-10">
        <Row className="sp-10">
          <Col lg="5">
            <h2>What we do?</h2>
          </Col>
          <Col lg="6">
            <p>
              Urbian deploys highly experienced digital talent to work on-site
              or remote. Our people are fully supported and cared for. We give
              them all the resources they need to do their best work and deliver
              consistent, impactful results. We make sure to keep our teams
              actively engaged in our culture of always learning making their
              career and life goals meaningful and attainable. We ensure our
              people remain digitally up-to-date with trends and best practice
              by giving them the best training. Urbian teams are likely to be
              happy, secure, skilled and productive often bringing a much needed
              energy to internal client teams.
            </p>
            <Link className="iUBhrC" to="/contact">
              Get in touch
              <svg
                className="styled__Arrow-fdeFVt fRPwvC"
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
          </Col>
        </Row>
        <Row className="sp-5">
        	<Col lg="12" className="titlef">
        		<h2>Some of the processes</h2>
        	</Col>
       	</Row>
       	<Row>
        	<Col lg="4">
        		<ul>	
        			<li>Collaborative</li>
        		</ul>
        	</Col>
        	<Col lg="4">
        		<ul>	
        			<li>Integrated design</li>
        		</ul>
        	</Col>
        	<Col lg="4">
        		<ul>	
        			<li>Community-supported tech decisions</li>
        		</ul>
        	</Col>
        </Row>
      </Container>
    )
  }
}

export default Whyurbian
