/* eslint-disable */
import React, { useRef } from 'react'
import { Link } from 'gatsby'
import * as S from './styled'
import { Project } from '../../../pages/showcase'
import useMeasure from '../../../hooks/useMeasure'
import './styled.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Work1 from '../../../assets/images/Screenshot-2020.jpg'
import work2 from '../../../assets/images/296562873-copy-10498.jpg'
import work3 from '../../../assets/images/Foonda_Website_2.0.jpg'
import work4 from '../../../assets/images/DSC2108-10790.jpg'

interface Projects {
  projects: Project[]
}

const ThumbHolder: React.FC<{}> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useMeasure(ref, 'a')
  const rowSpan = Math.ceil(height / 4)

  return (
    <S.Holder ref={ref} rowAmount={rowSpan}>
      {children}
    </S.Holder>
  )
}

const Projects: React.FC<Projects> = ({ projects }) => {
  return (
    <div className="content-wrap">
      <Container>
        <Row className="sp-5">
          <Col md="8" lg="6" className="introduction">
            {' '}
            <h1>Our work.</h1>
            <p>
              For over a decade we have helped ambitious companies re-imagine
              customer experiences and create new models for growth and build
              new capbilities.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="sp-8">
        <Row id="workgrid">
          <Col sm="6">
            <Link to="/spw">
              <div className="project-img">
                <img className="img-fluid" src={Work1} alt="#" />
              </div>
              <small class="clientname spw">Sanlam Private wealth</small>
              <h6 className="h3">
                A design system led now brand home generates a 10x increase in
                business leads.
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/standardbank">
              <div className="project-img">
                <img className="img-fluid" src={work2} alt="#" />
              </div>
              <small className="clientname stndbk">Standard Bank</small>
              <h6 className="h3">
                Clearing a 9-year old feature backlog in 6 months.
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/foonda">
              <div className="project-img">
                <img className="img-fluid" src={work3} alt="#" />
              </div>
              <small className="clientname foonda">Foonda</small>
              <h6 className="h3">
                A new education funding platform venture launched in market in 3
                months.
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/STSC">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt=" Diageo empowerment trust SA" />
              </div>
              <small className="clientname diageo">
                Diageo empowerment trust SA
              </small>
              <h6 className="h3">
                Re-vitalising an african-centric social tech incubator program.
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/investec">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>
              <small className="clientname investec">
                Investec
              </small>
              <h6 className="h3">
                Helping a financial services giant take a new service offering to market
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/liberty">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>
              <small className="clientname liberty">
                Liberty Direct
              </small>
              <h6 className="h3">
                On-the-fly campaign page building increase insurance leads by 62% in four months
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/hellofido">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>
              <small className="clientname ffs">
                Frank Financial Services
              </small>
              <h6 className="h3">
                Fun, quick and easy online credit reports get over 160,000 checks requested in the first 6 months
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/babylonstoren">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>
              <small className="clientname babylonstoren">
                Babylonstoren
              </small>
              <h6 className="h3">
                An end-to-end custom e-commerce implementation increase sales by 150% in 6 months
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/hi5">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>
              <small className="clientname hi">
                HI5
              </small>
              <h6 className="h3">
                Making HR software great again
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6">
            <Link to="/wineconnected">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>
              <small className="clientname wineconnected">
                Wine Connected
              </small>
              <h6 className="h3">
                Launching a bud-to-bottle wine making platform in 3 months
              </h6>
              <p className="technologies">
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
