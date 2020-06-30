/* eslint-disable */
import React from 'react'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Experiencetab from '../components/Experiencetab'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import Meeting from '../components/Meeting'
import ConnectedTop from '../components/connectedinsightstop'
import Louisbester from '../assets/images/Louis-bester.jpg'
import Stephangrobler from '../assets/images/Stephan-grobler.jpg'
import { Helmet } from 'react-helmet'
class datamaturity extends React.Component {
  render() {
    return (
      <div className="experienceurbianpage teal">
        <Layout>
          <Helmet>
            <title>Urbian | Connected insights</title>
          </Helmet>
          <ConnectedTop></ConnectedTop>
          <Container className="spb-5 border-bottom">
            <Row>
              <Col lg="6">
                <div className="sp-5">
                  <h3>What is it?</h3>
                  <p>
                    In a one hour checkup, we'll take the temperature of your
                    organisation, asking: How innovation ready are you? What's
                    going well? What's feeling tricky? And what's blocking you?
                  </p>
                  <p>
                    Meet a Product Director and find out how you can remove
                    organisational blockers, to help you move form idea to
                    production, at speed.
                  </p>
                </div>
                <div className="sp-5">
                  <h3>Who is it for?</h3>
                  <p>
                    Product Owners, Product Managers, Innovation leaders and
                    business function leaders who want to create innovative,
                    usercentric digital products.
                  </p>
                </div>
                <div className="sp-5">
                  <h3>What will you learn?</h3>
                  <ul>
                    <li>
                      Discover how every part of your organisation can work
                      together to support your innovation efforts
                    </li>
                    <li>
                      Healthcheck each of your departments to understand how ready
                      you really are for fast innovation
                    </li>
                    <li>
                      Learn how to use evidence to remove blockers between
                      departments and stakeholders
                    </li>
                  </ul>
                </div>
                <h3>Who will run it?</h3>
                <p>A Product Owner or Delivery Lead.</p>
                <div className="team-grid">
                  <div>
                  	<div class="circle-wrapper">
                    	<img src={Louisbester} alt="Louis bester" />
                    </div>
                    <h6>Louis Bester</h6>
                    <span>Product Owner</span>
                  </div>
                  <div>
                    <div class="circle-wrapper">
                    	<img src={Louisbester} alt="Louis bester" />
                    </div>
                    <h6>Shawn Redmond</h6>
                    <span>Product Owner</span>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <Meeting></Meeting>
              </Col>
            </Row>
          </Container>
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default datamaturity
