/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
import startup1 from '../../../assets/images/startup1.jpg'
import startup2 from '../../../assets/images/startup2.jpg'
import startup3 from '../../../assets/images/startup3.jpg'
import startup4 from '../../../assets/images/startup4.png'
import startup5 from '../../../assets/images/startup5.jpg'
class Startup extends React.Component {
  render() {
    return (
      <div className="section-b">
        <Container>
          <Row className="spb-8">
            <Col lg="6" md="10" className="offset-lg-3 offset-md-1">
              <h2>We designed, developed and launched 5 MVP's in market which resulthed in a startup going live every 2 months.</h2>
              <p>We paired small multi-disciplinary teams made up of a designer, developer and product manger with each entrepreneur full-time. This meant we were able to keep feedback loops fast ensuring precious time was spent on essential features only.</p>
            </Col>
          </Row>
          <Row className="showcase-row sp-8">
            <div class="col-md-10 offset-md-1">
              <div class="row align-items-center">
                <Col md="6">
                <span>Startup 1 of 5</span>
                  <h3>Skillshift</h3>
                  <p>Skillshift takes the hassle out of finding and managing skilled shift workers throught and on-demand marketplace.</p> <strong>What we did:</strong>
                  <p>Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design &amp; Fullstack Development.</p> <strong>Techstack we used:</strong>
                  <p>CSS, Django, Python, Wagtail CMS.</p>
                </Col>
                <Col md="6" lg="4" className="offset-lg-2">
                  <img src={startup1} className="img-fluid" alt="#" />
                </Col>
              </div>
            </div>
          </Row>
          <Row className="showcase-row sp-8">
            <div class="col-md-10 offset-md-1">
              <div class="row align-items-center">
                <Col md="6" lg="4">
                  <img src={startup2} className="img-fluid" alt="#" />
                </Col>
                <Col md="6" className="offset-lg-2">
                  <span>Startup 2 of 5</span>
                  <h3>Foonda</h3>
                  <p>Foonda makes applying to every bursary university, and government financial aid program simple using one form.</p> <strong>What we did:</strong>
                  <p>Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design &amp; Fullstack Development.</p> <strong>Techstack we used:</strong>
                  <p>CSS, Django, Python, Wagtail CMS</p>
                </Col>
              </div>
            </div>
          </Row>
          <Row className="showcase-row sp-8">
            <div class="col-md-10 offset-md-1">
              <div class="row align-items-center">
                <Col md="6">
                <span>Startup 3 of 5</span>
                  <h6 className="h3">Balltalent</h6>
                  <p>Balltalent is a soccer talent discovery tool helping scouts find africa's future soccer star.</p> <strong>What we did:</strong>
                  <p>Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design &amp; Fullstack Development.</p> <strong>Techstack we used:</strong>
                  <p>CSS, Django, Python, Wagtail CMS.</p>
                </Col>
                <Col md="6" lg="4" className="offset-lg-2">
                  <img src={startup3} className="img-fluid" alt="#" />
                </Col>
              </div>
            </div>
          </Row>
          <Row className="showcase-row sp-8">
            <div class="col-md-10 offset-md-1">
              <div class="row align-items-center">
                <Col md="6" lg="4">
                  <img src={startup4} className="img-fluid" alt="#" />
                </Col>
                <Col md="6" className="offset-lg-2">
                  <span>Startup 4 of 5</span>
                  <h6 className="h3">Jonga</h6>
                  <p>Jonga provides community-based security to low-income families.</p> <strong>What we did:</strong>
                  <p>Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design &amp; Fullstack Development.</p> <strong>Techstack we used:</strong>
                  <p>CSS, Django, Python.</p>
                </Col>
              </div>
            </div>
          </Row>
          <Row className="showcase-row sp-8">
            <div class="col-md-10 offset-md-1">
              <div class="row align-items-center">
                <Col md="6">
                <span>Startup 5 of 5</span>
                  <h6 className="h3">Ispani</h6>
                  <p>Ispani provides micro-jobbing for emerging markets through data -driven market research.</p> <strong>What we did:</strong>
                  <p>Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design &amp; Fullstack Development.</p> <strong>Techstack we used:</strong>
                  <p>CSS, Django, Python, Wagtail CMS.</p>
                </Col>
                <Col md="6" lg="4" className="offset-lg-2">
                  <img src={startup5} className="img-fluid" alt="#" />
                </Col>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Startup
