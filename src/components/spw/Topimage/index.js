/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Topimage extends React.Component {
  render() {
    return (
      <div className="scontent-wrap spwbg dark">
	      <Container>
	        <Row className="sp-5">
	          <Col lg="7">
	            <Link className="casestudycategory" to="/ecommerce">
	              Design systems
	            </Link>
	            <h1>
	              An end-to-end custom e-commerce implementation increase sales by 150% in 6 months 
	            </h1>
	          </Col>
	        </Row>
	        <Row>
	        	<Col lg="12">
	        		<img src="https://images.unsplash.com/photo-1566834376728-20a8268a2d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" />
	        	</Col>
	       	</Row>
	      </Container>
      </div>
    )
  }
}

export default Topimage
