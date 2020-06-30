/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
import insideimg1 from '../../../assets/images/inside-section-img1.jpg'
import insideimg2 from '../../../assets/images/inside-section-img2.jpg'
import insideimg3 from '../../../assets/images/inside-section-img3.jpg'
import insideimg4 from '../../../assets/images/inside-section-img4.jpg'

class Lookinside extends React.Component {
  render() {
    return (
      <div className="Lookinside spb-10">
        <Container className="">
          <Row className="sp-3">
            <Col lg="12">
              <h2>Take a look inside</h2>
            </Col>
          </Row>
          <Row>
            <Link className="col-12 col-sm-6 blog-card" to="/disruptingthetraditionalconsultancymodel">
              <div className="img-wrapper">
                <img src={insideimg1} />
              </div>
              <h3>6 Essential Things to Running Happy Remote Teams</h3>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about .
              </p>
            </Link>
            <Link className="col-12 col-sm-6 blog-card" to="/disruptingthetraditionalconsultancymodel">
              <div className="img-wrapper">
                <img src={insideimg1} />
              </div>
              <h3>6 Essential Things to Running Happy Remote Teams</h3>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about .
              </p>
            </Link>
            <Link className="col-12 col-sm-6 blog-card" to="/disruptingthetraditionalconsultancymodel">
              <div className="img-wrapper">
                <img src={insideimg2} />
              </div>
              <h3>Q&A With a PO:Louise</h3>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about .a
                leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about.
              </p>
            </Link>
            <Link className="col-12 col-sm-6 blog-card" to="/disruptingthetraditionalconsultancymodel">
              <div className="img-wrapper">
                <img src={insideimg3} />
              </div>
              <h3>Anton's Top Ten 1000ft view Ramblings</h3>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about.
              </p>
            </Link>
            <Link className="col-12 col-sm-6 blog-card" to="/disruptingthetraditionalconsultancymodel">
              <div className="img-wrapper">
                <img src={insideimg4} />
              </div>
              <h3>Being T-Shaped </h3>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about. A
                leading piece of copy of no more than about one or two lines
              </p>
            </Link>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Lookinside
