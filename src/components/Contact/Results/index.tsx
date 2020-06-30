/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import contact1 from '../../../assets/images/contact-1.jpg'
import contact2 from '../../../assets/images/contact-2.jpg'
import contact3 from '../../../assets/images/contact-3.jpg'
import contact4 from '../../../assets/images/contact-4.jpg'

class Results extends React.Component {
  render() {
    return (
      <div className="blackBg spb-10">
        <Container>
          <div className="col-12 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 text-center sp-5">
            <h2>Small teams. Big results</h2>
            <p>
              We work in small, dedicated teams of product managers, designers
              and developers. Each team works on one project at a time to stay
              focused. We use tools like Notion, Slack and GitHub to communicate
              frequently.
            </p>
          </div>
          <Row>
            <Col sm="12 smallteam-grid">
            	<div>
            		<img src={contact1} className="img-fluid" alt="Team" />
            	</div>
            	<div>
            		<img src={contact3} className="img-fluid" alt="Team"/>
		         </div>
		         <div>
		         	<img src={contact2} className="img-fluid" alt="Team" />
		         </div>
		         <div>
		         	<img src={contact4} className="img-fluid" alt="Team" />
		         </div>
		         <div>
		         	<img src={contact1} className="img-fluid" alt="Team" />
		         </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Results
