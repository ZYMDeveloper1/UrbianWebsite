import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import Card from 'react-bootstrap/Card'
import Postimg1 from '../../../assets/images/imgc-1.jpg'
import Image1 from '../../../assets/images/img1.jpg'
import Image2 from '../../../assets/images/img2.jpg'
import Image3 from '../../../assets/images/img3.jpg'

class Readcategories extends React.Component {
  render() {
    return (
      <Container className="blog_post content-wrap sp-10">
        <Row className="titlef sp-3">
          <Col className="col-12">
            <h1>We write words too.</h1>
          </Col>
        </Row>
        <Row class="experiencurbian-tab row">
          <Col>
            <Tabs>
              <div className="tablist-min sp-5">
                <TabList className="primary-categories nolist">
                  <Tab>
                    <span>Everything</span>
                  </Tab>
                  <Tab>
                    <span>Covid-19</span>
                  </Tab>
                  <Tab>
                    <span>News</span>
                  </Tab>
                  <Tab>
                    <span>Strategy</span>
                  </Tab>
                  <Tab>
                    <span>Product Management</span>
                  </Tab>
                  <Tab>
                    <span>Design Development</span>
                  </Tab>
                  <Tab>
                    <span>Technology</span>
                  </Tab>
                  <Tab>
                    <span>Digital Transformation</span>
                  </Tab>
                </TabList>
              </div>
              <TabPanel>
                <div className="tab-top-sect">
                  <img
                    src={Postimg1}
                    className="img-fluid"
                    alt="Disrupting The Traditional Consultancy Model."
                  />
                  <Row>
                    <Col lg="10" className="top-post">
                      <Row>
                        <Col lg="6">
                          <h2>Disrupting The Traditional Consultancy Model.</h2>
                        </Col>
                        <Col lg="6">
                          <p>
                            At some point, every smart business gets to a place
                            where it needs to disrupt itself. Whether it is
                            implementing a new HR system to...
                          </p>
                          <Link
                            className="styled__Link-lfEBUk iUBhrC font-weight-normal"
                            to="/disruptingthetraditionalconsultancymodel"
                          >
                            Read more
                            <svg
                              className="styled__Arrow-fdeFVt fRPwvC"
                              width="14"
                              height="10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#030303"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                                <path
                                  d="M12.5 5.5H.5"
                                  strokeLinecap="square"
                                ></path>
                              </g>
                            </svg>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <a
                    className="card col-md-6"
                    href="/disruptingthetraditionalconsultancymodel"
                  >
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        Fast Company SA’s Most Creative People in Business 2017
                      </Card.Title>
                      <p>
                        The following is the Fast Company SA interview
                        transcribed
                      </p>
                    </Card.Body>
                  </a>

                  <a
                    className="card col-md-6"
                    href="/disruptingthetraditionalconsultancymodel"
                  >
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>From Baker to Maker</Card.Title>
                      <p>“Never give up”</p>
                    </Card.Body>
                  </a>

                  <a
                    className="card col-md-6"
                    href="/disruptingthetraditionalconsultancymodel"
                  >
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>Why We Love Lazy Coders</Card.Title>
                      <p>
                        Being lazy doesn’t mean that you’re stupid. Most of the
                        time it means you’re actually rather smart.
                      </p>
                    </Card.Body>
                  </a>

                  <a
                    className="card col-md-6"
                    href="/disruptingthetraditionalconsultancymodel"
                  >
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        What Your Business Can Learn from the #NerdNation
                      </Card.Title>
                      <p>
                        They wear black hoodies, write code and give quirky and
                        inspiring TED Talks. Some build annoyingly addictive
                        social media networks and have movies made about them...
                      </p>
                    </Card.Body>
                  </a>

                  <a
                    className="card col-md-6"
                    href="/disruptingthetraditionalconsultancymodel"
                  >
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        There’s no ‘i’ in UX, It’s a Team Sport.
                      </Card.Title>
                      <p>
                        I thought I would share the slides from a UX
                        presentation I did based on the Kano model, how it
                        applies to UX principles and how the ownership of UX in
                        any company can’t be owned by one person called a UX
                        designer.
                      </p>
                    </Card.Body>
                  </a>

                  <a
                    className="card col-md-6"
                    href="/disruptingthetraditionalconsultancymodel"
                  >
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        5 Important Things When Using Mobile For Business.
                      </Card.Title>
                      <p>
                        As a brand you want to make sure that your customer
                        recognises your brand consistently cross-platform.
                        You’ve probably heard about the expression mobile first?
                      </p>
                    </Card.Body>
                  </a>
                </Row>
                <div className="text-center spt-5">
                  <Link
                    className="fbutton styled__Link-d87459-1 fYDdlr "
                    to="/blog"
                  >
                    More posts
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
                </div>
              </TabPanel>
              <TabPanel>
                <Row>
                  <Card className="col-md-6">
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        Covid-19:Our candid view on the most crucial things
                        companies need to get right now.
                      </Card.Title>
                      <p>
                        A leading piece of copy of no more than about one or two
                        lines just enough to give someone an idea of what the
                        post is about. A leading piece of copy of no more than
                        about one or two lines just enough to give someone an
                        idea of what the post is about.
                      </p>
                    </Card.Body>
                  </Card>
                </Row>
                <div className="text-center spt-5">
                  <Link
                    className="fbutton styled__Link-d87459-1 fYDdlr "
                    to="/blog"
                  >
                    More posts
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
                </div>
              </TabPanel>
              <TabPanel>
                <Tabs>
                  <TabList className="sp-3 nolist sub-categories">
                    <Tab>
                      <span>Local news</span>
                    </Tab>
                    <Tab>
                      <span>Global news</span>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <Row>
                      <Card className="col-md-6">
                        <Card.Img variant="top" src={Image1} alt="Image" />
                        <Card.Body>
                          <Card.Title>
                            There's no 'i' in UX, It's a Team Sport.
                          </Card.Title>
                          <p>
                            A leading piece of copy of no more than about one or
                            two lines just enough to give someone an idea of
                            what the post is about. A leading piece of copy of
                            no more than about one or two lines just enough to
                            give someone an idea of what the post is about.
                          </p>
                        </Card.Body>
                      </Card>
                    </Row>
                    <div className="text-center spt-5">
                      <Link
                        className="fbutton styled__Link-d87459-1 fYDdlr "
                        to="/blog"
                      >
                        More posts
                        <svg
                          className="styled__Arrow-d87459-0 bQLhSh"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <Row>
                      <Card className="col-md-6">
                        <Card.Img variant="top" src={Image1} alt="Image" />
                        <Card.Body>
                          <Card.Title>Full stream ahead.</Card.Title>
                          <p>
                            A leading piece of copy of no more than about one or
                            two lines just enough to give someone an idea of
                            what the post is about. A leading piece of copy of
                            no more than about one or two lines just enough to
                            give someone an idea of what the post is about.
                          </p>
                        </Card.Body>
                      </Card>
                    </Row>
                    <div className="text-center spt-5">
                      <Link
                        className="fbutton styled__Link-d87459-1 fYDdlr "
                        to="/blog"
                      >
                        More posts
                        <svg
                          className="styled__Arrow-d87459-0 bQLhSh"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Row>
                  <Card className="col-md-6">
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        There's no 'i' in UX, It's a Team Sport.
                      </Card.Title>
                      <p>
                        A leading piece of copy of no more than about one or two
                        lines just enough to give someone an idea of what the
                        post is about. A leading piece of copy of no more than
                        about one or two lines just enough to give someone an
                        idea of what the post is about.
                      </p>
                    </Card.Body>
                  </Card>
                </Row>
                <div className="text-center spt-5">
                  <Link
                    className="fbutton styled__Link-d87459-1 fYDdlr "
                    to="/blog"
                  >
                    More posts
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
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>We write words too.</h2>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>We write words too.</h2>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>We write words too.</h2>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>We write words too.</h2>
                </div>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Readcategories
