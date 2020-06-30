/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Experiencetab from '../components/Experiencetab'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import { Helmet } from 'react-helmet'
class experienceurbian extends React.Component {
  render() {
    return (
      <div className="greybackground experienceurbian">
        <Layout>
          <Helmet>
            <title>Urbian | Experience Urbian</title>
          </Helmet>
          <Container className="scontent-wrap experiencurbian-min">
            <Row className="sp-2">
              <Col sm="12">
                <span className="yellowBackground underlinebreadcrumb">
                  Experience Urbian
                </span>
              </Col>
              <Col sm="12">
                <h2>How much time do you have?</h2>
              </Col>
            </Row>
          </Container>
          <Experiencetab></Experiencetab>
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default experienceurbian
