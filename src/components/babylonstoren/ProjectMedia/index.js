/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import ReactPlayer from 'react-player'

class ProjectMedia extends React.Component {
  render() {
    return (
      <Container className="project-media overlap">
        <Row>
          <Col>
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
    )
  }
}

export default ProjectMedia
