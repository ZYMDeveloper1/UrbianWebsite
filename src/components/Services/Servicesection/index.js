import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import serviceimg from '../../../assets/images/service-img.png'
import serviceimg2 from '../../../assets/images/S-2020.png'
import serviceimg3 from '../../../assets/images/desgin-layer.png'
import serviceimg4 from '../../../assets/images/Software.png'
import Reactjsicon from '../../../assets/images/react.svg'
import Graphqlicon from '../../../assets/images/graphql.svg'
import RoundSketch from '../../../assets/images/sketch.svg'
import LeftArrowSketch from '../../../assets/images/leftarrowsketch.svg'
import PythonDjangoicon from '../../../assets/images/python.svg'
import ElasticSearchicon from '../../../assets/images/elastic.svg'
import AWSicon from '../../../assets/images/aws.svg'
import GCPicon from '../../../assets/images/gcp.svg'
import Wagtailicon from '../../../assets/images/wagtail.svg'
import Pandasicon from '../../../assets/images/pandas.svg'
class Servicesection extends React.Component {
  render() {
    return (
      <div>
        <Container className="border-top servicesection spb-10">
          <Row>
            <Col md="12" className="col-12 offset-lg-2 col-lg-8 text-center">
              <h2>
                We' re a new kind of consultancy. <br />
                Our secret sauce is our ability
                <br />{' '}
                <Link to="/read" className="fbutton">
                  to bridge the strategy to delivery gap.
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
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
              </h2>
            </Col>
          </Row>
          <Row className="spt-5">
            <Col sm="12" className="text-center">
              <img src={serviceimg} className="w-90" alt="service" />
            </Col>
          </Row>
          <Row className="spt-10 rel service-list">
            <Col lg="3" md="6">
              <h6>Incubators, Accelerators, Programs & Labs</h6>
              <p>
                The return on Accelerators Incubators, Innovation Programs and
                R&D Labs world wide is abismal. We've spent a lot of time
                learning about what works and what doesn't from running them
                ourselves.
              </p>
              <Link
                to="/incubatorsandaccelerators"
                className="styled__Link-lfEBUk iUBhrC servcclink dosD"
              >
                More on our programs
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
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
            <Col lg="3" md="6">
              <h6>Digital Product Innovation </h6>
              <p>
                Whether you're looking to launch a consumer facing product or
                new service aimed at businesses we can help you. We are often
                able to get a new breakthrough product in your customers hands
                in 100 days.
              </p>
              <Link
                to="/digitalproducts"
                className="styled__Link-lfEBUk iUBhrC servcclink dosD"
              >
                More on digital products
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
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
            <Col lg="3" md="6">
              <h6>Digital Transformation</h6>
              <p>
                We work alongside your teams to tackle the toughest challenges
                head on.
              </p>
              <Link
                to="/digitaltransformation"
                className="styled__Link-lfEBUk iUBhrC servcclink dosD"
              >
                More on transformation
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
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
            <Col lg="3" md="6">
              <h6>New capabilities.</h6>
              <p>
                We have built long-lasting capability inside copmanies through
                hiring, onboarding and coaching multi-disciplinary teams.
              </p>
              <Link
                to="/newcapabilities"
                className="styled__Link-lfEBUk iUBhrC servcclink dosD"
              >
                More on this service
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
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
            <img src={RoundSketch} className="sketch" />
          </Row>
          <Row className="spt-15">
            <Col lg="3" md="12">
              <h3 className="rel">
                Everything we do is about building digital products
                <img src={LeftArrowSketch} className="leftarrowsketch" />
              </h3>
            </Col>
            <Col lg="6" md="12" className="offset-sm-2">
              <p>
                We're one of a very few agencies that can take a product idea
                form end to end. From the first discovery meeting to a real
                shipped product. Have a great new product idea and nobody to
                start building it?{' '} <span className="yellowBackground">We're your team.</span>
              </p>
            </Col>
          </Row>
          <Row>
          	<Col className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
	            <div className="services-list-min row">
	              <div className="service-item mt-5 col-md-4">
	                <strong>PM &amp; Strategy </strong>
	                <ul>
	                  <li>Product strategy</li>
	                  <li>Brand strategy</li>
	                  <li>Business strategy</li>
	                  <li>Product management</li>
	                  <li>Post-launch capacity building</li>
	                </ul>
	              </div>
	              <div className="service-item mt-5  col-md-4">
	                <strong>Product Design</strong>
	                <ul>
	                  <li>UX research &amp; testing</li>
	                  <li>Rapid prototyping</li>
	                  <li>User experience</li>
	                  <li>User interface</li>
	                  <li>Brand development</li>
	                  <li>Content &amp; Writing</li>
	                  <li>Illustration</li>
	                  <li>Motion &amp; Video</li>
	                </ul>
	              </div>
	              <div className="service-item mt-5  col-md-4">
	                <strong>Development</strong>
	                <ul>
	                  <li>Technical architecture</li>
	                  <li>Front-end engineering</li>
	                  <li>Web-App development</li>
	                  <li>Mobile App Development</li>
	                  <li>API &amp; CMS Development</li>
	                  <li>Code auditing &amp; QA</li>
	                  <li>DevOps</li>
	                </ul>
	              </div>
	            </div>
	          	<div className="services-list-min row">
	            	<div className="service-item mt-5 col-md-4">
		              <strong>Industry</strong>
		              <ul>
		                <li>Health & Wellness</li>
		                <li>
		                  <Link to="/insurance">Insurance</Link>
		                </li>
		                <li>
		                  <Link to="/financialservices">Financial services</Link>
		                </li>
		                <li>
		                  <Link to="/ecommerce">E-Commerce</Link>
		                </li>
		                <li>
		                  <Link to="/saas">SaaS</Link>
		                </li>
		              </ul>
		            </div>
	            	<div className="service-item mt-5 col-md-4">
		              <strong>Teams & Process</strong>
		              <ul>
		                <li>Level up your team</li>
		                <li>Level up your remote team</li>
		                <li>Code audit</li>
		                <li>Mentoring</li>
		                <li>Deployment</li>
		                <li>Help hiring</li>
		              </ul>
	            	</div>
	            </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="sp-10 Producstrategy">
            <Col lg="5">
              <img src={serviceimg2} alt="service" className="a-img"/>
            </Col>
            <Col lg="6" className="offset-lg-1">
              <h2>Product Strategy</h2>
              <p>
                We focus on digital products that meet real customer needs, open
                up markets and generate new sources of revenue. Breakthrough
                digital strategy is built on powerful customer insights,
                sensitivity to existing assets and operational impact and the
                rapid execution of ideas to test and evolve the strategy.
              </p>
              <h6 className='flist'>Our development services</h6>
              <ul>
                <li>Product strategy</li>
                <li>Brand strategy </li>
                <li>Business Strategy</li>
                <li>Product management</li>
                <li>Post-launch capacity building</li>
              </ul>
              <div className="casestudyhighlight spt-5">
              	<span>Case Study</span>
	              <h4>
	                A design system led new brand home generates a 10x increase in
	                business leads.
	              </h4>
	              <Link
	                className="styled__Link-lfEBUk iUBhrC font-weight-normal"
	                to="/casestudy"
	              >
	                View case study
	                <svg
	                  className="styled__Arrow-fdeFVt fRPwvC"
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
            </Col>
          </Row>
          <Row className="sp-8 product-design">
            <Col lg="6">
              <h2>Product Design</h2>
              <div className="position-relative m-30">
                <p>
                  We help you gain the creative confidence to excel at consumer
                  research and rapidly prototype your product idea continually
                  testing with users in the wild. Our designers-who-code are
                  able to exquisitely craft pixel perfect user experiences and
                  can most often go from prototype to product launch in under
                  100 days.
                </p>
                <div className="kUmLiD">
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                </div>
              </div>
              <h6 className='flist'>Our product design services</h6>
              <ul>
                <li>UX research & testing </li>
                <li>Rapid prototyping</li>
                <li>User experience</li>
                <li>User interface</li>
                <li>Brand development</li>
                <li>Content & Writing</li>
                <li>Illustration </li>
                <li>Motion & Video</li>
              </ul>
              <div className="casestudyhighlight spt-5">
              	<span>Case Study</span>
	              <h4>
	                A design system led new brand home generates a 10x increase in
	                business leads.
	              </h4>
	              <Link
	                className="styled__Link-lfEBUk iUBhrC font-weight-normal"
	                to="/casestudy"
	              >
	                View case study
	                <svg
	                  className="styled__Arrow-fdeFVt fRPwvC"
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
            </Col>
            <Col lg="5" className="offset-lg-1">
              <img
                src={serviceimg3} 
                alt="service" className="a-img"
              />
            </Col>
          </Row>
        </Container>
        <div className="Softwaredevelopment spb-8">
          <Container>
            <Row>
              <Col lg="5">
                <img src={serviceimg4} alt="service" className="a-img" />
              </Col>
              <Col lg="6" className="offset-lg-1">
                <h2>Software development</h2>
                <p>
                  There's an obsession with detail when it comes to developing
                  what's envisioned and that's why we've adopted some of the
                  industry's best practices for Code Review, Quality Assurance &
                  Continuous Deployment. React is or true workhorse and our
                  unquestionable tool of choice to develop almost anything.
                </p>
                <h6 className='flist'>Our development services</h6>
                <ul>
                  <li>Technical architecture</li>
                  <li>Front-end engineering</li>
                  <li>Web-App development</li>
                  <li>Mobile App development</li>
                  <li>API & CMS development</li>
                  <li>Code auditing & QA</li>
                  <li>DevOps</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="spt-5 sp-3">
                <p>We love tech. But we only use what's right for the job.</p>
              </Col>
            </Row>
            <Row className="tech-stack">
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={Reactjsicon} alt="React + React Native" />
                <em>React + React Native</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={Graphqlicon} alt="GraphQL" />
                <em>GraphQL</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={PythonDjangoicon} alt="Python  Django" />
                <em>Python + Django</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={ElasticSearchicon} alt="Elastic Search" />
                <em>Elastic Search</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5">
                <img src={AWSicon} alt="AWS" />
                <em>AWS</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5">
                <img src={GCPicon} alt="GCP" />
                <em>GCP</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5">
                <img src={Wagtailicon} alt="Wagtail" />
                <em>Wagtail</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5">
                <img src={Pandasicon} alt="Pandas" />
                <em>Pandas</em>
              </Col>
            </Row>
            <Row>
              <Col lg="6" className="offset-lg-6 spt-8">
              <div className="casestudyhighlight">
              	<span>Case Study</span>
	              <h4>
	                A design system led new brand home generates a 10x increase in
	                business leads.
	              </h4>
	              <Link
	                className="styled__Link-lfEBUk iUBhrC font-weight-normal"
	                to="/casestudy"
	              >
	                View case study
	                <svg
	                  className="styled__Arrow-fdeFVt fRPwvC"
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
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Servicesection
