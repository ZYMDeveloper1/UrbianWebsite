/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import FormControl from 'react-bootstrap/FormControl'

class Forms extends React.Component {
  render() {
    return (
      <Container className="contactSection content-wrap">
        <Row className="align-items-center sp-8">
          <Col xl="6" lg="7" md="8" className="offset-xl-3 offset-lg-1">
            <h1>Let's find out if we're the right digital partner for you</h1>
            <p>
              Or if you don't like forms get in touch with us on{' '}
              <a href="tel:+27214610185">+27(0)21 461 0185</a> or send us an
              email to{' '}
              <a href="mailto:newproject@urbian.co.za" className="underline">
                newproject@urbian.co.za
              </a>
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your company or project name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company or project name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your name?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name and surname pretty please"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your company email address"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicHelp">
                <Form.Label>What can Urbian do for you?</Form.Label>
                <Form.Check
		          type="radio"
		          label="Create a new amazing product/service 🚀"
		          name="help"
		          id="formHorizontalRadios1"
		        />
		        <Form.Check
		          type="radio"
		          label="Make my existing product/service even better 📈" 
		          name="help"
		          id="formHorizontalRadios2"
		        />
		        <Form.Check
		          type="radio"
		          label="Something else entirely"
		          name="help"
		          id="formHorizontalRadios3"
		        />
              </Form.Group>
              <Form.Group controlId="formBasicInfo">
                <Form.Label>Can you give us a bit more info about that?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="A summary of your project"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicHelp">
                <Form.Label>Your apporximate budget (optional)</Form.Label>
                <Form.Check
                  className="budget-alignment"
		          type="radio"
		          label="Less than R250,00"
		          name="budget"
		          id="formHorizontalRadios1"
		        />
		        <Form.Check
		        className="budget-alignment"
		          type="radio"
		          label="R250,000 - R500,000"
		          name="budget"
		          id="formHorizontalRadios2"
		        />
		        <Form.Check
		        className="budget-alignment"
		          type="radio"
		          label="R500,000 - R1,500,00"
		          name="budget"
		          id="formHorizontalRadios3"
		        />
		        <Form.Check
		        className="budget-alignment"
		          type="radio"
		          label="R1,500,00 - R5,000,00"
		          name="budget"
		          id="formHorizontalRadios4"
		        />
		        <Form.Check
		        className="budget-alignment"
		          type="radio"
		          label="Still to be determined"
		          name="budget"
		          id="formHorizontalRadios5"
		        />
              </Form.Group>
              <Form.Group controlId="formBasicHear">
                <Form.Label>How did you hear about Urbian?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="A short note on how you found us"
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center checkbox-d mt-5">
                <div className="styled__Wrapper-sc-17q5ct5-0 lmPArb styled__FileInput-sc-50pjfs-9 aeDYy">
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Input />
                  </Form.File>
                  <a class="styled__Button-sc-17q5ct5-2 kVhSPg"><svg class="Clip__Svg-jzfi9p-0 bxocp styled__Clip-sc-17q5ct5-3 bUqCQv" width="10" height="17" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" stroke="#111314" fill="none"><path d="M6.333 5v7.333a1.333 1.333 0 1 1-2.666 0v-8"></path><path d="M1 5V3.667a2.667 2.667 0 1 1 5.333 0V5M9 6.333v6.048a4 4 0 1 1-8 0V5"></path></g></svg>Attachment</a>
                </div>
                <button className="styled__Button-ksqKNN iyLmoo styled__Button-kGpwPX dQtCFI form-contact-button">
                  Send
                  <svg
                    className="Arrow__Svg-gllSXh SARKW styled__Arrow-ihTfeJ cFLifL"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#030303" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </Form>
          </Col>
          <Col xl="3" lg="4" md="4" className="tipTouch">
            <div>
              <h5>Helpful tip - touch on these things:</h5>
              <ul className="pl-3">
                <li>Your product</li>
                <li>Your timeline</li>
                <li>Your location (timezone)</li>
                <li>Where you heard about us</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Forms
