/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
import teamimg1 from '../../../assets/images/team-image1.jpg'
import teamimg2 from '../../../assets/images/team-image2.jpg'
class Worksection extends React.Component {
  render() {
    return (
      <div>
        <Container className="border-top Worksection spt-10">
          <Row className="sp-5">
            <Col md="12" className="text-center titlef">
              <h2>We work in tight-knit cross functional teams.</h2>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="about-image-grid">
            	<div>
              		<img src={teamimg1} className="img-fluid" alt="Team" />
            	</div>
            	<div>
              		<img src={teamimg2} className="img-fluid" alt="Team" />
            	</div>
            	<div>
              		<img src={teamimg2} className="img-fluid" alt="Team" />
              	</div>
            </Col>
          </Row>
        </Container>
        <Container className="how-deliver spb-10">
          <Row>
            <Col lg="4">
              <h3>How we deliver</h3>
            </Col>
            <Col lg="8">
              <Row>
                <Col sm="6">
                  <h5>Small, senior teams</h5>
                  <p>
                    The best digital products are created by hands-on,
                    multidisciplinary teams of experts with experience crafting
                    products and deploying at scale.
                  </p>
                </Col>
                <Col sm="6">
                  <h5>Clear, ambitious KPLs</h5>
                  <p>
                    Our product stratrgists help create category-leading digital
                    experiences by clarifying goals and driving consensus around
                    a focused set of metrics.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <h5>Technology from day one</h5>
                  <p>
                    Meaningful digital products are by definition technology
                    projects. Development stats at project kickoff to quickly
                    align on a technology strategy and forward-looking
                    architecture.
                  </p>
                </Col>
                <Col sm="6">
                  <h5>20 days to market feedback</h5>
                  <p>
                    For most projects, we complete a full design cycle and
                    prototype early, enabling clients to begin validating
                    strategic assumptions and ideas well before deployment.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <h5>Ongoing validation</h5>
                  <p>
                    Testing and validation takes place in every phase of our
                    process. Prototypes are tested frequently with uers. We stay
                    lean and help your product do one thing well.
                  </p>
                </Col>
                <Col sm="6">
                  <h5>Zero big reveals</h5>
                  <p>
                    Creating digital products at scale is challenging enough
                    without investing excessive hours in creating one-off
                    presentations. We don't make you million rand decks. We
                    bulid, prototype, test and repeat.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <h5>100 days to launch</h5>
                  <p>
                    We've refined over process by shipping over 100 products for
                    clients and are most often able to get a product to market
                    in under 100 days.
                  </p>
                </Col>
                <Col sm="6">
                  <h5>Dedicated teams</h5>
                  <p>
                    Our model is based on fully dedicated teams. The same core
                    team that begins an engagement will finish it.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Worksection
