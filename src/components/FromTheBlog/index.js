/* eslint-disable */
import React from 'react'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from '../../../node_modules/react-bootstrap'

import bloglist1 from '../../assets/images/pasted-image-255.jpg'
import bloglist2 from '../../assets/images/pasted-image-331.jpg'
import './styled.css'
import { Link } from 'gatsby'
class FromTheBlog extends React.Component {
  render() {
    return (
      <div className="homeblog-list">
        <Container>
          <Row>
            <Col md="5">
              <h3>Latest News</h3>
            </Col>
            <Col md="6">
              <ul>
                <li>
                  <Link to="/disruptingthetraditionalconsultancymodel">
                    <h5>
                      Covid-19: Our candid view on the most crucial things
                      companies need to get right now.
                    </h5>
                    <div className="d-flex flex-wrap align-items-center justify-content-start">
                      <div className="author-img">
                        <img src={bloglist1} alt=">Anton Moulder" />
                      </div>
                      <span>Anton Moulder . January 2020</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/disruptingthetraditionalconsultancymodel">
                    <h5>Introducing Sanlam Private Wealth's Design System.</h5>
                    <div className="d-flex flex-wrap align-items-center justify-content-start">
                      <div className="author-img">
                        <img src={bloglist2} alt="Louis Bester" />
                      </div>
                      <span>Louis Bester . January 2020</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="text-center spt-5">
            <Col md="12">
              <Link
                className="fbutton styled__Link-d87459-1 fYDdlr colorblack"
                to="/read"
              >
                More news this way
                <svg
                  className="styled__Arrow-d87459-0 bQLhSh"
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
        </Container>
      </div>
    )
  }
}

export default FromTheBlog
