/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import ReactPlayer from 'react-player'
class Topimage extends React.Component {
  render() {
    return (
    <div className="scontent-wrap investecbg">
      <Container>
        <Row className="sp-5">
          <Col lg="7">
            <Link className="casestudycategory" to="/incubatorsandaccelerators">
              Incubators &amp; Accelerators
            </Link>
            <h1>
              On-the-fly campaign page building increase insurance leads by 62% in four months
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://player.vimeo.com/video/347119375?color=ef2200&byline=0&portrait=0"
                width="100%"
                height="100%"
                controls
                loop
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}

export default Topimage
