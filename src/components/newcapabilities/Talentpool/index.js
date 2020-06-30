/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
class Talentpool extends React.Component {
  render() {
    return (
      <div className="talentpool spb-10">
      	<Container>
        	<Row>
	            <Col lg="3">
	              <h3>Our talent pool</h3>
	            </Col>
	            <Col lg="9">
	              <Row>
	                <Col sm="4">
	                  <h5>Product owners</h5>
	                  <p>
	                    The best digital products are created by hands-on,
	                    multidisciplinary teams of experts with experience crafting
	                    products and deploying at scale.
	                  </p>
	                </Col>
	                <Col sm="4">
	                  <h5>Agile Project Managers</h5>
	                  <p>
	                    Our product stratrgists help create category-leading digital
	                    experiences by clarifying goals and driving consensus around
	                    a focused set of metrics.
	                  </p>
	                </Col>
	                <Col sm="4">
	                  <h5>Full stack developers</h5>
	                  <p>
	                    Our product stratrgists help create category-leading digital
	                    experiences by clarifying goals and driving consensus around
	                    a focused set of metrics.
	                  </p>
	                </Col>
	              </Row>
	              <Row>
	                <Col sm="4">
	                  <h5>UX/UI designers</h5>
	                  <p>
	                    Meaningful digital products are by definition technology
	                    projects. Development stats at project kickoff to quickly
	                    align on a technology strategy and forward-looking
	                    architecture.
	                  </p>
	                </Col>
	                <Col sm="4">
	                  <h5>UX reseachers</h5>
	                  <p>
	                    For most projects, we complete a full design cycle and
	                    prototype early, enabling clients to begin validating
	                    strategic assumptions and ideas well before deployment.
	                  </p>
	                </Col>
	                <Col sm="4">
	                  <h5>UX writers</h5>
	                  <p>
	                    For most projects, we complete a full design cycle and
	                    prototype early, enabling clients to begin validating
	                    strategic assumptions and ideas well before deployment.
	                  </p>
	                </Col>
	              </Row>
	              <Row>
	                <Col sm="4">
	                  <h5>QA testers</h5>
	                  <p>
	                    Testing and validation takes place in every phase of our
	                    process. Prototypes are tested frequently with uers. We stay
	                    lean and help your product do one thing well.
	                  </p>
	                </Col>
	                <Col sm="4">
	                  <h5>Data scientists</h5>
	                  <p>
	                    Creating digital products at scale is challenging enough
	                    without investing excessive hours in creating one-off
	                    presentations. We don't make you million rand decks. We
	                    bulid, prototype, test and repeat.
	                  </p>
	                </Col>
	                <Col sm="4">
	                  <h5>Customer support</h5>
	                  <p>
	                    We've refined over process by shipping over 100 products for
	                    clients and are most often able to get a product to market
	                    in under 100 days.
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

export default Talentpool
