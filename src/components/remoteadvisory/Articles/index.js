/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Articles1 from '../../../assets/images/pasted-image-3404.jpg'
import Articles2 from '../../../assets/images/pasted-image-3818.jpg'
class Articles extends React.Component {
  render() {
    return (
      <Container className="spb-10 Articles_s border-bottom">
        <Row>
          <Col md="7" lg="5" className="titlef sp-5">
          	<h2>Our recent views on remote work</h2>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Link to="">
              <div className="Articles-img">
                <img className="img-fluid" src={Articles1} alt="#" />
              </div>
              <h6 className="h3">
                Disrupting the Traditional Consultancy Model.
              </h6>
              <p>
                A Leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="">
              <div className="Articles-img">
                <img className="img-fluid" src={Articles2} alt="#" />
              </div>
              <h6 className="h3">There's no 'i' in UX, It's a Team Sport.</h6>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about.
                Aleading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about.
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Articles
