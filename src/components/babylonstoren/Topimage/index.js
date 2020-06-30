/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Topimage extends React.Component {
  render() {
    return (
      <div className="scontent-wrap bgcover babylonstorenbg overlay">
	      <Container>
	        <Row className="sp-5">
	          <Col lg="7">
	            <Link className="casestudycategory" to="/ecommerce">
	              E-commerce
	            </Link>
	            <h1>
	              An end-to-end custom e-commerce implementation increase sales by 150% in 6 months 
	            </h1>
	          </Col>
	        </Row>
	      </Container>
      </div>
    )
  }
}

export default Topimage
