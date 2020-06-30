/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Work1 from '../../../assets/images/Screenshot-2020.jpg'
import work2 from '../../../assets/images/296562873-copy-10498.jpg'
class Casestudies extends React.Component {
  render() {
    return (
      <div className="spb-10 Casestudies-s">
        <Container>
          <Row>
            <Col sm="12" className="titlef sp-5">
              <h2>Case studies</h2>
            </Col>
            <Col sm="6">
              <Link to="/spw">
                <div className="project-img">
                  <img className="img-fluid" src={Work1} alt="#" />
                </div>
                <small class="clientname spw">Sanlam Private wealth</small>
                <h6 className="h3">
                  A design system led new brand home generates a 10x increase in
                  business leads.
                </h6>
                <p className="technologies">
                  Product Management, Branding, UI/UX, Front-End Development,
                  Back-End Development
                </p>
              </Link>
            </Col>
            <Col sm="6">
              <Link to="/standardbank">
                <div className="project-img">
                  <img className="img-fluid" src={work2} alt="#" />
                </div>
                <small class="clientname stndbk">Standard Bank</small>
                <h6 className="h3">
                  Clearing a 9-year old feature backlog in 6 months.
                </h6>
                <p className="technologies">
                  Product Management, Branding, UI/UX, Front-End Development,
                  Back-End Development
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Casestudies
