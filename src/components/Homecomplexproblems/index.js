import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import { Link } from 'gatsby'
import diageotrust from '../../assets/images/diageo-trust-sa.jpg'
import liberty from '../../assets/images/liberty.jpg'
import sanlam from '../../assets/images/sanlam.jpg'
import privatewealth from '../../assets/images/private-wealth.jpg'
import babylonstoren from '../../assets/images/babylonstoren.jpg'
class Homecomplexproblems extends React.Component {
  render() {
    return (
      <div>
        <Container className="complex-problems spt-8">
          <Row className="titlef sp-5">
            <Col md="12 text-center">
              <h2>
                We solve complex problems <br /> and deliver real impact
              </h2>
            </Col>
          </Row>
          <Row>
            <Link className="col-md-6 casestudy-block" to="/casestudy">
              <div class="figure">
                <strong>2,050</strong>
                <span>
                  entrerprenuers served through the Diageo Social Tech
                  Accelerator
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
                </span>
              </div>
              <div className="flex-item">
                <svg id="diageo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 440.5 195.77"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path d="M218.94,178.52l3-9.71c.64-2.34,1.29-5.09,1.87-7.37H224c.58,2.28,1.22,5,2,7.37l3.1,9.71ZM230.22,184l3.57,11.16h7.78l-12.81-39.41h-9.18L207,195.12h7.43L217.77,184Zm-52.45,9.29c2.16,1.35,6.49,2.52,10.7,2.52,10.12,0,14.91-5.5,14.91-11.87,0-5.68-3.27-9.13-10.11-11.7-5.27-2-7.55-3.45-7.55-6.49,0-2.34,1.93-4.74,6.49-4.74a17.19,17.19,0,0,1,7.9,1.87l1.69-5.78a20.39,20.39,0,0,0-9.41-2c-8.6,0-14,4.85-14,11.34,0,5.67,4.16,9.12,10.71,11.46,5,1.82,6.95,3.57,6.95,6.55,0,3.22-2.57,5.38-7.13,5.38a19.76,19.76,0,0,1-9.53-2.51Zm-33.51,1.87h7.2V161.73H162.8v-6H133v6h11.23Zm-39.64-1.87c2.16,1.35,6.49,2.52,10.7,2.52,10.11,0,14.91-5.5,14.91-11.87,0-5.68-3.28-9.13-10.12-11.7-5.26-2-7.54-3.45-7.54-6.49,0-2.34,1.93-4.74,6.49-4.74a17.17,17.17,0,0,1,7.89,1.87l1.7-5.78a20.46,20.46,0,0,0-9.41-2c-8.6,0-14,4.85-14,11.34,0,5.67,4.15,9.12,10.7,11.46,5,1.82,7,3.57,7,6.55,0,3.22-2.57,5.38-7.14,5.38a19.79,19.79,0,0,1-9.53-2.51ZM67.37,155.71v22.57c0,12.4,5.9,17.49,15,17.49,9.47,0,15.73-5.38,15.73-17.55V155.71h-7.2v23c0,7.72-3.1,11.29-8.3,11.29-4.85,0-8.07-3.57-8.07-11.29v-23Zm-25.85,5.5a20.34,20.34,0,0,1,4.44-.35c4.68,0,7.66,2,7.66,6.31,0,3.92-3,6.49-7.83,6.49H41.52Zm-7.13,33.91h7.13V178.93h3.63c4.09.11,5.9,1.75,7.07,6.9a50.38,50.38,0,0,0,2.63,9.29h7.37c-.76-1.52-1.81-6.08-3.1-11-.93-3.8-2.63-6.55-5.5-7.6v-.18a10.33,10.33,0,0,0,7.2-9.82,10,10,0,0,0-3.39-7.95c-2.69-2.23-6.5-3.16-12.17-3.16a61.33,61.33,0,0,0-10.87.88Zm-23.16,0h7.19V161.73H29.77v-6H0v6H11.23Z" />
                      <path d="M395.6,144.68h7.19V111.29h11.35v-6H384.37v6H395.6Zm-40.47,0V130.59c0-6.5-.11-11.7-.4-16.79l.23-.06a134.44,134.44,0,0,0,7,13.57l10.29,17.37h7.48V105.26h-6.66V119a159.88,159.88,0,0,0,.64,16.37h-.12a117.7,117.7,0,0,0-6.72-13.22l-10.18-16.9h-8.24v39.42Zm-14.67-23.33H325.6V111.17h15.73v-5.91H318.41v39.42h23.8v-5.91H325.6V127.19h14.86Zm-36.38,23.33h7l-2.28-39.42h-9.36L294,121.05c-1.53,4.62-2.87,9.48-3.92,13.75h-.18c-1-4.39-2.22-9.07-3.62-13.69l-5.15-15.85h-9.47l-2.63,39.42h6.72l.88-15.85c.29-5.38.52-11.64.7-16.78h.12c1,4.91,2.45,10.29,4,15.32l5.27,16.84h5.49L298,127.13c1.76-5,3.39-10.29,4.68-15.08h.18c-.06,5.32.23,11.46.46,16.55Zm-60.17-33.92a21,21,0,0,1,4.44-.35c4.68,0,7.67,2,7.67,6.32,0,3.91-3,6.49-7.84,6.49h-4.27Zm-7.13,33.92h7.13v-16.2h3.63c4.09.12,5.9,1.75,7.07,6.9a50.58,50.58,0,0,0,2.63,9.3h7.37c-.76-1.52-1.81-6.08-3.1-11-.93-3.8-2.63-6.55-5.49-7.6v-.17a10.36,10.36,0,0,0,7.19-9.83,10,10,0,0,0-3.39-8c-2.69-2.22-6.49-3.16-12.17-3.16a61.33,61.33,0,0,0-10.87.88Zm-8.07-23.33H213.85V111.17h15.73v-5.91H206.66v39.42h23.8v-5.91H213.85V127.19h14.86ZM170,144.68l4.56-18.54a118,118,0,0,0,2.57-12.51h.12a124.47,124.47,0,0,0,2.22,12.51l4.09,18.54h7.66l10.65-39.42h-7.31L190.46,123c-1.05,4.86-2,9.36-2.69,13.69h-.11c-.59-4.27-1.47-8.66-2.4-13.34l-3.92-18.13H173.8l-4.27,17.84c-1.11,5-2.22,9.65-2.87,13.8h-.12c-.64-3.92-1.57-9-2.57-13.74l-3.74-17.9h-7.66l9.65,39.42Zm-38.66-34.33c7.19,0,10.88,7,10.88,14.45,0,8.24-3.92,14.73-10.88,14.73s-10.93-6.37-10.93-14.44,3.8-14.74,10.93-14.74m.23-5.79c-11.11,0-18.77,8.54-18.77,20.7,0,11.52,7,20.06,18.19,20.06,10.82,0,18.83-7.54,18.83-20.76,0-11.28-6.78-20-18.25-20M89.3,110.88a19.54,19.54,0,0,1,4.15-.35c5,0,8,2.28,8,6.66,0,4.56-3.28,7.25-8.66,7.25a11.68,11.68,0,0,1-3.5-.35Zm-7.14,33.8H89.3V129.77a15.9,15.9,0,0,0,3.5.29c5.09,0,9.54-1.4,12.46-4.27a12,12,0,0,0,3.33-8.89,11.13,11.13,0,0,0-3.86-8.71c-2.51-2.11-6.31-3.22-11.57-3.22a63.15,63.15,0,0,0-11,.82Zm-14.33,0h7l-2.28-39.42H63.21l-5.43,15.79c-1.52,4.62-2.87,9.48-3.92,13.75h-.18c-1-4.39-2.22-9.07-3.62-13.69l-5.15-15.85H35.44l-2.63,39.42h6.72l.88-15.85c.29-5.38.52-11.64.7-16.78h.12c1.05,4.91,2.45,10.29,4,15.32l5.27,16.84H56l5.79-17.08c1.76-5,3.39-10.29,4.68-15.08h.18c-.06,5.32.23,11.46.46,16.55Zm-42.1-23.33H10.88V111.17H26.61v-5.91H3.68v39.42h23.8v-5.91H10.88V127.19H25.73Z" />
                      <polygon points="305.14 50.09 337 50.09 337 35.82 305.14 35.82 305.14 15.88 339.86 15.88 339.86 1.5 290.21 1.5 290.21 92.58 339.95 92.58 339.95 78.2 305.14 78.2 305.14 50.09" />
                      <rect x="83.64" y="1.5" width="14.96" height="91.07" />
                      <path d="M264.68,29.33l11.37-9.78C266.26,6.48,253.17,0,237.77,0a47,47,0,1,0-.65,94,44.41,44.41,0,0,0,18.69-4.14,42.62,42.62,0,0,0,15.05-11.08,36.14,36.14,0,0,0,8-15.05,52.92,52.92,0,0,0,1.58-17L280.26,44h-41V58.37h25.2c-.65,5.63-3.55,10.53-8.65,14.57a29,29,0,0,1-18.88,6.67c-8.15,0-15.48-3.38-22.29-10.07a30.65,30.65,0,0,1-9.17-22.27,32.14,32.14,0,0,1,9.75-23.59,30.32,30.32,0,0,1,22.38-9.3c11.1,0,19.84,5.07,27.08,14.95" />
                      <path d="M416.05,70.11a31.16,31.16,0,0,1-22.83,9.5A32.46,32.46,0,0,1,361,47a32,32,0,0,1,9.51-23.2,30.91,30.91,0,0,1,22.74-9.4,31.36,31.36,0,0,1,22.83,9.5c6.4,6.2,9.47,14,9.47,23.1a31.74,31.74,0,0,1-9.47,23.13m10.62-56.2a47.15,47.15,0,0,0-66.79-.09A44.91,44.91,0,0,0,346,47.09,46.87,46.87,0,0,0,393.22,94c26.21,0,47.28-20.57,47.28-46.89,0-12.88-4.71-23.88-13.83-33.18" />
                      <path d="M49.18,70C43.52,75.37,34.3,78.2,21.36,78.2H17.19V15.88h4.17c12.77,0,21.76,2.63,27.43,7.62Q58.93,32.38,58.93,47c0,9.31-3.29,17-9.75,23.05M58.75,12.5c-8.56-7.32-21.25-11-37.7-11H1.61V92.58H20.87C37.6,92.58,50.46,88.81,59.1,81,69,72.19,74,60.9,74,47.09c0-14.37-5.09-25.94-15.23-34.59" />
                      <path d="M161.1,58.74a41,41,0,0,1-10.45,1.41A41.3,41.3,0,0,1,140,58.74a10.2,10.2,0,0,0-2.07-.46c.26-.57.74-1.51.92-2l11.5-27.81,11.28,28.09c.18.48.57,1.23.83,1.89ZM154.43,1.22h-7.55L107.07,92.58h16.42l8.73-20.31a8.61,8.61,0,0,0,.4-1.31c.39.18.91.37,1.58.65a46.9,46.9,0,0,0,16.45,2.92,47.76,47.76,0,0,0,14.49-2.26,13,13,0,0,0,2.72-1.13c.09.38.39,1.23.49,1.52l8.33,19.92h16.55Z" />
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            <Link className="col-md-6 casestudy-block" to="/casestudy">
                <div class="figure">
                  <h5>
                    6 months to clear a 9 year feature backlog.
                    <svg
                      className="styled__Arrow-fdeFVt fRPwvC"
                      width="25"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#030303" fill="none" fillRule="evenodd">
                        <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                        <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                      </g>
                    </svg>
                  </h5>
                </div>
                <div className="flex-item">
                  <svg id="liberty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.64 49.49"><g><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M24.8,0A24.75,24.75,0,1,0,49.59,24.74,24.76,24.76,0,0,0,24.8,0m0,46.32A21.58,21.58,0,1,1,46.41,24.74,21.6,21.6,0,0,1,24.8,46.32M37.13,34.83H11.44A28.59,28.59,0,0,1,10,32.33a17.2,17.2,0,0,1,3.92-19.59.22.22,0,0,1,.18-.08.27.27,0,0,1,.27.26.18.18,0,0,1,0,.1,12.89,12.89,0,0,0-1.74,6.38c0,2.38,1.52,6,3.51,7.2,0,0-1.3-5.18,1.28-9.27,2-3.19,6.05-5.88,4.79-10.76a.24.24,0,0,1,0-.07.28.28,0,0,1,.28-.26.21.21,0,0,1,.12,0c1.28.62,5.35,4.23,4,8.88-.87,2.9-3.7,5.18-1.07,9,.78-6.6,7.47-6,5.65-14.09a.2.2,0,0,1,0-.05.27.27,0,0,1,.28-.25.24.24,0,0,1,.14,0c1.82,1.14,8,5.34,4.05,11.5-4.14,6.42-.71,11.05,1.54,13.52M13.14,37H36.91a16.43,16.43,0,0,1-4.15,3.21H17.29A16.61,16.61,0,0,1,13.14,37m26.07-3.07a9,9,0,0,1,1-14.65.16.16,0,0,1,.09,0,.29.29,0,0,1,.28.27.21.21,0,0,1,0,.08c-2.7,6.58,3.31,6.49-1.36,14.33m115.21.9V26.58L148.16,15h4.15l2.35,5.08c.67,1.46,1.17,2.58,1.74,3.94.52-1.27,1.09-2.5,1.76-3.94L160.54,15h4.1L158,26.48v8.35ZM136.88,18.05h-5.66V15h15v3h-5.7V34.83h-3.62Zm-17.62,6h2.15c2.44,0,3.94-1.3,3.94-3.26,0-2.15-1.5-3.18-3.86-3.18a10.88,10.88,0,0,0-2.23.18Zm-3.59-8.73a31.74,31.74,0,0,1,5.47-.43c2.85,0,4.77.46,6.13,1.57a5.08,5.08,0,0,1,1.7,4,5.21,5.21,0,0,1-3.62,4.94c1.44.61,2.29,2,2.76,3.91a52.23,52.23,0,0,0,1.56,5.52H126a24.84,24.84,0,0,1-1.33-4.67c-.58-2.59-1.49-3.4-3.56-3.47h-1.82v8.14h-3.59ZM111.06,26h-7.47v5.82h8.35v3H100V15H111.5v3h-7.91v5.1h7.47ZM86.51,32.21a10.21,10.21,0,0,0,1.92.1c2.32,0,4.41-.86,4.41-3.3s-2-3.27-4.54-3.27H86.51Zm0-9.07h1.85c2.53,0,3.91-1.18,3.91-2.85,0-1.88-1.41-2.73-3.7-2.73a9.06,9.06,0,0,0-2.06.15Zm-3.59-7.82a30.65,30.65,0,0,1,5.29-.43c2.65,0,4.33.34,5.66,1.25a4.2,4.2,0,0,1,2,3.73,4.57,4.57,0,0,1-3.29,4.27,5.16,5.16,0,0,1,4,5,5.38,5.38,0,0,1-1.89,4.12C93.34,34.41,91,35,87.36,35a35.62,35.62,0,0,1-4.44-.25ZM78.56,34.83H74.94V15h3.62ZM59.51,15h3.62V31.8h8.15v3H59.51Z"/></g></g></svg>
                </div>
              </Link>
          </Row>
          <Row>
            <Link className="col-md-6 casestudy-block" to="/casestudy">
                <div class="figure">
                  <h5 className="letter-s1 ">
                    Over R50 million of new revenue generated in under 90 days
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
                  </h5>
                </div>
                <div className="flex-item">
                  <svg id="spw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 46"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M16,7.3c1.1-2,2.6-4.3,1.1-6.9L17,.2,16.9.1,16.8,0l-.2.1-.1.1C16.4.4,11.3,7.6.4,22.5l-.1.1A2.13,2.13,0,0,0,0,23.8a3,3,0,0,0,.5,1.6l6,9.9a12.72,12.72,0,0,1,.7,4.6v3.3a2.81,2.81,0,0,0,1.3,2.4h.1a2.24,2.24,0,0,0,1,.3h8.3V37.5a26.8,26.8,0,0,0-.2-4,3.74,3.74,0,0,0-1.4-2.3c-1.9-1.8-3.6-2.9-4.9-5a10.18,10.18,0,0,1-1.9-5.6A8.3,8.3,0,0,1,11,15.8c1.2-2,2.5-4,3.6-5.8.4-.8.9-1.7,1.4-2.7M18.9,13a7.49,7.49,0,0,0-7.4,7.6,7.4,7.4,0,1,0,14.8,0A7.49,7.49,0,0,0,18.9,13M37.4,25.4a2.77,2.77,0,0,0,.5-1.6,2.13,2.13,0,0,0-.3-1.2l-.1-.1C26.6,7.5,21.5.4,21.4.2L21.3.1,21.1,0,21,.1l-.1.1-.1.2c-1.5,2.6,0,5,1.1,6.9.5,1,1,1.9,1.5,2.8,1.1,1.8,2.3,3.8,3.6,5.8a8.3,8.3,0,0,1,1.5,4.8,10.46,10.46,0,0,1-1.9,5.6c-1.3,2.1-3,3.2-4.9,5a4.25,4.25,0,0,0-1.4,2.3,26.8,26.8,0,0,0-.2,4V46h8.3a2.24,2.24,0,0,0,1-.3h.1a2.81,2.81,0,0,0,1.3-2.4V40a12.37,12.37,0,0,1,.7-4.6l5.9-10ZM78.9,37a8.33,8.33,0,0,0,1.3-4.9,8.16,8.16,0,0,0-.9-4A8.68,8.68,0,0,0,77,25.4a11.44,11.44,0,0,0-3.3-1.7c-1.2-.4-2.5-.8-3.7-1.1s-2.6-.6-3.8-.8a15.91,15.91,0,0,1-3.3-.9l-.4-.2-.4-.2a2.51,2.51,0,0,1-.7-.4A3.26,3.26,0,0,1,60,17.5a3.2,3.2,0,0,1,1.9-2.9,8.47,8.47,0,0,1,1.7-.4,10.9,10.9,0,0,1,1.7-.1,9.15,9.15,0,0,1,4.1.9,4.36,4.36,0,0,1,2.3,3.4H79a10.87,10.87,0,0,0-1.5-4.6,9.88,9.88,0,0,0-3-3.1,11,11,0,0,0-4-1.7,17.84,17.84,0,0,0-4.7-.5,24.22,24.22,0,0,0-4.5.4A14.59,14.59,0,0,0,57,10.4a9.85,9.85,0,0,0-3.2,2.9,7.61,7.61,0,0,0-1.2,4.4,8.57,8.57,0,0,0,.9,4.1,7.54,7.54,0,0,0,2.3,2.7A12.27,12.27,0,0,0,59,26.2c1.2.4,2.4.8,3.7,1.1s2.5.6,3.7.8a15.91,15.91,0,0,1,3.3.9A7.28,7.28,0,0,1,72,30.3a3.63,3.63,0,0,1,1.1,2.5,3.74,3.74,0,0,1-1,2.5,4.19,4.19,0,0,1-1.4.9,8.65,8.65,0,0,1-2.3.6,19.88,19.88,0,0,1-2.2.2,9,9,0,0,1-4.8-1.2,5.46,5.46,0,0,1-2.3-4.4H52.2a11.17,11.17,0,0,0,1.1,5,9.91,9.91,0,0,0,2.9,3.5A13.83,13.83,0,0,0,60.6,42a19.27,19.27,0,0,0,5.5.7,20.53,20.53,0,0,0,4.9-.6,17,17,0,0,0,4.6-1.8A12.94,12.94,0,0,0,78.9,37M99,31.5a9.74,9.74,0,0,1-.1,1.6,4.79,4.79,0,0,1-.7,2,4.61,4.61,0,0,1-1.7,1.7,6.23,6.23,0,0,1-3.3.7,10.28,10.28,0,0,1-1.7-.1,2,2,0,0,1-.5-.1,3.35,3.35,0,0,1-1.8-1.5,2.84,2.84,0,0,1-.4-1.2v-1a4.33,4.33,0,0,1,.1-.5A3.26,3.26,0,0,1,91,30.8l.2-.1c1.2-.3,2.8-.6,3.5-.7s1.1-.2,1.6-.3a8.33,8.33,0,0,0,1.5-.4,5.42,5.42,0,0,0,1.1-.6v2.8Zm.8,10.2H107a6.26,6.26,0,0,1-.7-2.5c-.1-1.1-.2-2.2-.2-3.4V22.4a5.28,5.28,0,0,0-.1-1.3,7.77,7.77,0,0,0-4.3-5.6,9.47,9.47,0,0,0-3-.8,26.93,26.93,0,0,0-4-.3,20.87,20.87,0,0,0-4.3.4,11.62,11.62,0,0,0-3.8,1.5l-.9.6-.1.1-.1.1-.1.1a8.61,8.61,0,0,0-2.9,6.5v.1h7.1a17,17,0,0,1,.4-2.2,3.45,3.45,0,0,1,2.3-2.1,6.87,6.87,0,0,1,2.2-.3,6.33,6.33,0,0,1,2.6.5h.1a3,3,0,0,1-.1,5.6c-.2.1-.4.1-.6.2a17.77,17.77,0,0,1-2.8.5c-1,.1-2.1.2-3.2.4s-2.1.4-3.2.7l-.9.3a7.6,7.6,0,0,0-4.6,5.9c0,.4-.1.7-.1,1.1a8.08,8.08,0,0,0,.1,1.6,7.68,7.68,0,0,0,5.6,5.9,11.46,11.46,0,0,0,3.2.4,16.74,16.74,0,0,0,4.7-.7,9.36,9.36,0,0,0,4-2.5,5.85,5.85,0,0,0,.2,1.3,2.77,2.77,0,0,0,.3,1.3m26.3,0h7.1V25.4a21.54,21.54,0,0,0-.4-4.5,8.19,8.19,0,0,0-1.5-3.4,7.22,7.22,0,0,0-2.9-2.2,12.42,12.42,0,0,0-4.7-.8,11.15,11.15,0,0,0-3.1.5,10.43,10.43,0,0,0-4.4,3.1c-.1.2-.2.3-.3.5V15.2h-7.1V41.7h7.1V27.8c0-2.7.4-4.6,1.3-5.8.1-.1.2-.3.3-.4a4.82,4.82,0,0,1,2.2-1.5,5.9,5.9,0,0,1,1.4-.2,4.74,4.74,0,0,1,4.5,3.3,11.61,11.61,0,0,1,.4,3.5v15Zm9.9,0h7.1V5H136Zm26.5-10.2a9.74,9.74,0,0,1-.1,1.6,4.79,4.79,0,0,1-.7,2,4.61,4.61,0,0,1-1.7,1.7,6.23,6.23,0,0,1-3.3.7,10.28,10.28,0,0,1-1.7-.1,2,2,0,0,1-.5-.1,3.35,3.35,0,0,1-1.8-1.5,2.84,2.84,0,0,1-.4-1.2v-1a4.33,4.33,0,0,1,.1-.5,3.26,3.26,0,0,1,2.1-2.3l.2-.1c1.2-.3,2.8-.6,3.5-.7s1.1-.2,1.6-.3a8.33,8.33,0,0,0,1.5-.4,5.42,5.42,0,0,0,1.1-.6v2.8Zm.8,10.2h7.2a6.26,6.26,0,0,1-.7-2.5c-.1-1.1-.2-2.2-.2-3.4V22.4a5.28,5.28,0,0,0-.1-1.3,7.77,7.77,0,0,0-4.3-5.6,9.47,9.47,0,0,0-3-.8,26.93,26.93,0,0,0-4-.3,20.87,20.87,0,0,0-4.3.4,11.62,11.62,0,0,0-3.8,1.5l-.9.6-.1.1-.1.1-.1.1a8.61,8.61,0,0,0-2.9,6.5v.1h7.1a17,17,0,0,1,.4-2.2,3.45,3.45,0,0,1,2.3-2.1,6.87,6.87,0,0,1,2.2-.3,6.33,6.33,0,0,1,2.6.5h.1a3,3,0,0,1-.1,5.6c-.2.1-.4.1-.6.2a17.77,17.77,0,0,1-2.8.5c-1,.1-2.1.2-3.2.4s-2.1.4-3.2.7l-.9.3a7.6,7.6,0,0,0-4.6,5.9c0,.4-.1.7-.1,1.1a8.08,8.08,0,0,0,.1,1.6,7.68,7.68,0,0,0,5.6,5.9,11.46,11.46,0,0,0,3.2.4,16.74,16.74,0,0,0,4.7-.7,9.36,9.36,0,0,0,4-2.5,5.85,5.85,0,0,0,.2,1.3c.1.5.2.9.3,1.3m48.8,0V23.9a11.61,11.61,0,0,0-.7-4.4,7.91,7.91,0,0,0-2-3,6.24,6.24,0,0,0-3-1.6,15.18,15.18,0,0,0-3.8-.5,8.1,8.1,0,0,0-4.7,1.3,10.17,10.17,0,0,0-3.1,3.1,6.14,6.14,0,0,0-3.1-3.4,9.88,9.88,0,0,0-4.5-1,9.36,9.36,0,0,0-4.5,1.1,10.27,10.27,0,0,0-3.1,2.8V15.1h-7.1V41.6h7.1V26.2a7.31,7.31,0,0,1,.6-3.2,5.23,5.23,0,0,1,1.3-1.8,6.47,6.47,0,0,1,1.6-.9c.2,0,.3-.1.5-.1s.5-.1.7-.1a4.44,4.44,0,0,1,4.4,4v.3c0,.8.1,1.5.1,2.3V41.6h7.1V26.8a19.42,19.42,0,0,1,.2-2.4,5.73,5.73,0,0,1,.4-1.4,4.6,4.6,0,0,1,4.1-2.8,4.5,4.5,0,0,1,4.4,3.7v.2a20.08,20.08,0,0,1,.1,2.5v15h7Z"/><path d="M297.3,31.5c0,1.7-1.4,2.8-3.6,2.8h-3.2V28.6h3.3c2.2.1,3.5,1.1,3.5,2.9m2.2-.1c0-2.9-2.2-4.8-5.6-4.8h-5.6V41.4h2.2v-5h3.1c3.6,0,5.9-2,5.9-5m12.2,2.4h-4.1V28.6h4.1c2.1,0,3.3.9,3.3,2.6s-1.3,2.6-3.3,2.6m6.3,7.6-4.4-5.9a4.38,4.38,0,0,0,3.6-4.4,4.07,4.07,0,0,0-1.2-3,5.84,5.84,0,0,0-4.2-1.5h-6.3V41.4h2.2V35.9h3.6l4.1,5.5Zm5.8,0H326V26.6h-2.2Zm16.1.1,6.3-14.9h-2.3L339,38.4l-4.8-11.8h-2.4l6.3,14.9ZM359,35.6h-5.6l2.8-6.2,2.8,6.2Zm2.5,5.8h2.3l-6.6-14.7-.1-.2h-1.9l-6.7,14.9h2.3l1.7-3.8h7.3l1.7,3.8Zm12.1-12.7h4.7V26.6H366.6v2.1h4.7V41.4h2.2V28.7Zm13,10.6V34.9h7.7v-2h-7.7V28.6h8.6v-2H384.4V41.4h10.9v-2h-8.7Z"/><path d="M426,41.6l7.9-22.4H431l-6.1,17.9-.1-.2L419,19.2h-2.2l-5.9,18-.1-.2-6-17.7h-3l7.9,22.4H412l5.9-17.4,5.9,17.4H426Zm16.3-8.3h-8.5c.4-2.6,2.1-4.4,4.3-4.4,2.7.1,4,2.3,4.2,4.4m2.5,2v-.8a9,9,0,0,0-1.7-5.5,6.07,6.07,0,0,0-4.9-2.3,6.44,6.44,0,0,0-4.9,2.2,7.76,7.76,0,0,0-1.9,5.4,7.54,7.54,0,0,0,2.1,5.5,6.72,6.72,0,0,0,5,2.1,7.33,7.33,0,0,0,5.9-2.7l.1-.2-1.6-1.5-.1.1a5.61,5.61,0,0,1-4.2,2,4.3,4.3,0,0,1-3.1-1.2,5.79,5.79,0,0,1-1.6-3.1h10.9Zm10.7,1c0,2.1-1.8,3.6-4.3,3.6-2.2,0-3.2-1.4-3.2-2.6v-.1c0-1.6,1.4-2.7,3.7-2.7a10.88,10.88,0,0,1,3.7.6v1.2Zm-.1,5.4h2.3V32.8a5.4,5.4,0,0,0-6-5.9,11,11,0,0,0-4.9,1.2l-.2.1.7,2.1.2-.1a8.46,8.46,0,0,1,4-1,4.1,4.1,0,0,1,2.8.9,3.7,3.7,0,0,1,1,2.7V33a13.2,13.2,0,0,0-3.9-.5,6.76,6.76,0,0,0-4.2,1.2,4.32,4.32,0,0,0-1.7,3.6v.1a4.63,4.63,0,0,0,1.6,3.5,5.31,5.31,0,0,0,3.5,1.2,5.61,5.61,0,0,0,4.6-2.1v1.7Zm5.2,0h2.5V21.9h-2.5Zm8.9-12.4H474V27h-4.5V21.9H467V27h-2v2.3h2v8.4a4.46,4.46,0,0,0,1.2,3.3,4,4,0,0,0,3,1,5.54,5.54,0,0,0,2.6-.6l.1-.1V39l-.3.1a4.92,4.92,0,0,1-2,.5,1.92,1.92,0,0,1-2.2-2.2V29.3ZM489,41.7V32.6a6.26,6.26,0,0,0-1.5-4.3,5.36,5.36,0,0,0-4.2-1.6,5.69,5.69,0,0,0-4.7,2.3V21.9h-2.5V41.7h2.5V33.3a4,4,0,0,1,4-4.3,3.76,3.76,0,0,1,2.8,1.1,4.5,4.5,0,0,1,1,3v8.5H489Z"/></g></g></svg>
                </div>
              </Link>
              <Link className="col-md-6 casestudy-block" to="/casestudy">
                <div class="figure">
                  <strong>153%</strong>
                  <span>
                    increase in E-Commerce sales
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
                  </span>
                </div>
                <div className="flex-item">
                  <svg id="babylonstoren" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.3 48.03"><g><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M2.59,47.09l1.12-.57c.49-.25.94-.72.65-1.3a.74.74,0,0,0-1-.36h0A.69.69,0,0,0,3.57,44c-.3-.6-.88-.43-1.36-.19l-1,.53Zm-.54-2.55.41-.21c.19-.1.44-.15.56.08s0,.4-.23.49l-.44.23Zm.56,1.1.46-.23c.2-.1.51-.21.65.05s-.05.43-.24.53l-.55.28Z"/><path class="cls-1" d="M5.18,45.76l.7-.28v-.7L7,44.33l.49.51.72-.29L5.78,42.19l-.52.21Zm1.37-1.88-.7.28v-1Z"/><path class="cls-1" d="M8.92,44.35,10.14,44c.53-.15,1.06-.53.88-1.15a.75.75,0,0,0-.86-.54h0a.68.68,0,0,0,.32-.8c-.18-.64-.78-.59-1.3-.44l-1.11.32Zm0-2.61.45-.13c.2,0,.46-.06.53.19s-.12.38-.32.44l-.48.14Zm.34,1.19.5-.14c.21-.06.54-.11.62.17s-.13.42-.34.48l-.58.17Z"/><polygon class="cls-1" points="12.83 43.32 13.5 43.19 13.24 41.89 14.05 39.93 13.25 40.09 12.79 41.35 11.93 40.34 11.1 40.5 12.58 42.02 12.83 43.32"/><polygon class="cls-1" points="15.31 42.91 17.24 42.68 17.17 42.05 15.91 42.21 15.61 39.77 14.94 39.85 15.31 42.91"/><path class="cls-1" d="M17.8,41.07a1.57,1.57,0,0,0,1.75,1.53,1.62,1.62,0,1,0-.17-3.24,1.57,1.57,0,0,0-1.58,1.71m.71,0a1,1,0,1,1,1,.94.93.93,0,0,1-1-.94"/><polygon class="cls-1" points="22.1 42.43 22.78 42.45 22.85 40.25 22.86 40.25 24.13 42.5 25.02 42.53 25.13 39.44 24.45 39.42 24.38 41.56 24.37 41.56 23.13 39.37 22.2 39.34 22.1 42.43"/><path class="cls-1" d="M28.29,39.91a1.4,1.4,0,0,0-.92-.39,1.05,1.05,0,0,0-1.24.92c-.08,1,1.39.82,1.35,1.39,0,.22-.27.31-.49.29a.75.75,0,0,1-.57-.33l-.52.49a1.43,1.43,0,0,0,1,.46,1,1,0,0,0,1.26-.93c.07-1.08-1.37-.81-1.33-1.38,0-.23.28-.3.48-.28a.64.64,0,0,1,.47.24Z"/><polygon class="cls-1" points="29.63 42.92 30.3 43.01 30.6 40.53 31.48 40.64 31.55 40.05 29.13 39.75 29.05 40.34 29.93 40.45 29.63 42.92"/><path class="cls-1" d="M32.1,41.67a1.67,1.67,0,1,0,2-1.24,1.57,1.57,0,0,0-2,1.24m.69.15A1,1,0,1,1,33.52,43a.94.94,0,0,1-.73-1.17"/><path class="cls-1" d="M35.9,44.18l.64.22.4-1.16.32.1.21,1.38.77.27-.32-1.49a.8.8,0,0,0,.91-.58c.24-.68-.2-1.06-.8-1.27l-1.13-.39ZM37.36,42l.42.14c.24.08.48.22.38.51s-.41.22-.65.14l-.38-.13Z"/><polygon class="cls-1" points="38.98 45.3 40.97 46.19 41.23 45.61 39.86 45 40.12 44.42 41.34 44.97 41.6 44.4 40.37 43.85 40.61 43.33 41.9 43.91 42.16 43.33 40.24 42.48 38.98 45.3"/><polygon class="cls-1" points="41.84 46.61 42.44 46.94 43.5 45.01 43.51 45.02 43.63 47.6 44.4 48.03 45.9 45.33 45.31 44.99 44.27 46.87 44.26 46.87 44.15 44.35 43.34 43.91 41.84 46.61"/><path class="cls-1" d="M37.44,32.27c0,.08,0,.16,0,.24a2.94,2.94,0,0,0,2.9,2.64h0a2.94,2.94,0,0,0,2.87-3,2.83,2.83,0,0,0-.55-1.64,3.17,3.17,0,0,1-.58-.37,7.44,7.44,0,0,1-1.68,1.2,1.22,1.22,0,0,1,.23.62,1.24,1.24,0,0,1-.35,1.08,1.69,1.69,0,0,0-.07-1,1.8,1.8,0,0,0-.25-.48,7.36,7.36,0,0,1-2.57.58.51.51,0,0,1,0,.13m-5.59-1.52a2.88,2.88,0,0,0-.46,1.62,2.94,2.94,0,0,0,2.93,2.88h0a2.93,2.93,0,0,0,2.06-.89,3,3,0,0,0,.8-1.85,2,2,0,0,1,0-.24.49.49,0,0,1,0-.12,7.29,7.29,0,0,1-2.77-.51,2,2,0,0,0-.25.5,1.72,1.72,0,0,0,0,1,1.29,1.29,0,0,1-.38-1.07,1.25,1.25,0,0,1,.23-.66,7.35,7.35,0,0,1-1.61-1,3.06,3.06,0,0,1-.54.34m.36-.46-.05.07.09-.08h0s0,0,0,0m-1.51-2.7a2.52,2.52,0,0,1,.76-1.81,2.18,2.18,0,0,1-.11-.44,2.67,2.67,0,0,0-.79-.13h0a2.83,2.83,0,0,0,0,5.65h.06a2.87,2.87,0,0,0,1.12-.26,2.51,2.51,0,0,1,.35-.44s0,0,0,0A6.83,6.83,0,0,1,31,28.92a2.73,2.73,0,0,1-.29-.86l-.27.06a1.63,1.63,0,0,0-.88.52,1.25,1.25,0,0,1,.69-.9,1.47,1.47,0,0,1,.41-.15m.84-2.19a2.34,2.34,0,0,0,.09.24l.15-.13a1.33,1.33,0,0,0-.24-.11M37,23.65a2.87,2.87,0,0,0-2.6-1.7H34.3a2.88,2.88,0,0,0-2.82,2.92,3.11,3.11,0,0,0,0,.32,3.1,3.1,0,0,1,.45.21A2.54,2.54,0,0,1,33.22,25a2.7,2.7,0,0,1,.9.16,2,2,0,0,1-.14-.33,1.27,1.27,0,0,1,.17-1.13,1.75,1.75,0,0,0,.24,1,1.48,1.48,0,0,0,.33.43A2.86,2.86,0,0,1,37,23.65m.44,1.5a.1.1,0,0,1-.1.1h0a.1.1,0,0,1-.1-.11.11.11,0,0,1,.11-.1h0a.11.11,0,0,1,.08,0,.24.24,0,0,1,0,.08m-.19,5.3a.11.11,0,0,1,.11-.1h0a.11.11,0,0,1,.07,0,.11.11,0,0,1,0,.08.12.12,0,0,1-.11.1h0a.12.12,0,0,1-.1-.11m-.58-3.12a.23.23,0,0,1-.23.21h0a.23.23,0,0,1-.22-.24.23.23,0,0,1,.23-.21h0a.22.22,0,0,1,.16.07.27.27,0,0,1,.06.17m-1.54-1.65a.11.11,0,0,1-.11.1h0a.12.12,0,0,1-.08,0,.14.14,0,0,1,0-.07.1.1,0,0,1,.1-.1h0a.09.09,0,0,1,.07,0,.11.11,0,0,1,0,.08M33.6,27.12a.11.11,0,0,1-.11.1h0a.11.11,0,0,1-.07,0,.08.08,0,0,1,0-.08.09.09,0,0,1,.1-.1h0a.11.11,0,0,1,.07,0,.13.13,0,0,1,0,.08M35.24,30a.1.1,0,0,1-.1.1h0a.08.08,0,0,1-.07,0A.09.09,0,0,1,35,30a.1.1,0,0,1,.11-.1h0a.08.08,0,0,1,.07,0,.11.11,0,0,1,0,.08m4.22,0a.1.1,0,0,1,.1-.1h0a.09.09,0,0,1,.07,0,.13.13,0,0,1,0,.08.11.11,0,0,1-.11.1h0a.11.11,0,0,1-.08,0,.12.12,0,0,1,0-.08m-1.15-2.71a.22.22,0,0,1,.22-.22h0a.23.23,0,0,1,0,.46h0a.22.22,0,0,1-.21-.23m2.74,0a.1.1,0,0,1,.11-.1h0a.1.1,0,0,1,.1.11.11.11,0,0,1-.1.1h0a.1.1,0,0,1-.07,0,.11.11,0,0,1,0-.07m-1.5-1.6a.11.11,0,0,1,.1-.1h0a.12.12,0,0,1,.1.11.1.1,0,0,1-.11.1h0a.1.1,0,0,1-.1-.11m-2.48-1c-.29,0-.51.34-.49.73a.78.78,0,0,0,.34.63l0,1.12a1.07,1.07,0,0,0-.47-.37,1.77,1.77,0,0,0-.21-.41,1.51,1.51,0,0,0-.65-.56.75.75,0,0,0-.55-.4.65.65,0,0,0-.8.38c0,.29.21.58.6.66a.71.71,0,0,0,.71-.23,1.26,1.26,0,0,1,.37.36l.1.16a1,1,0,0,0-.7.35,1.43,1.43,0,0,0-.7-.29,1.45,1.45,0,0,0-.86.09.73.73,0,0,0-.74.09.55.55,0,1,0,.61.87.75.75,0,0,0,.35-.64,1.11,1.11,0,0,1,.58,0,1,1,0,0,1,.56.24,1.16,1.16,0,0,0-.07.37,1.07,1.07,0,0,0,.41.81l.11.08.51.34a1.38,1.38,0,0,1-.17.41,1.16,1.16,0,0,1-.36.37.72.72,0,0,0-.73-.2c-.38.09-.63.39-.57.67a.65.65,0,0,0,.81.36.75.75,0,0,0,.54-.42,1.51,1.51,0,0,0,.63-.58,1.92,1.92,0,0,0,.18-.39l.49.33V30a.71.71,0,0,0-.33.69c0,.39.27.69.56.67s.51-.34.49-.73a.71.71,0,0,0-.34-.62v-.26l.51-.36a1.64,1.64,0,0,0,.16.28,1.46,1.46,0,0,0,.64.55.74.74,0,0,0,.56.4.62.62,0,0,0,.79-.38c.06-.29-.21-.58-.59-.65a.72.72,0,0,0-.72.22,1.14,1.14,0,0,1-.37-.36,1.71,1.71,0,0,1-.16-.29l.61-.44a1.06,1.06,0,0,0,.5-.91,1.1,1.1,0,0,0-.11-.44,1.2,1.2,0,0,1,.46-.19,1.16,1.16,0,0,1,.62,0,.75.75,0,0,0,.37.62.55.55,0,1,0,.57-.89.71.71,0,0,0-.75-.06,1.44,1.44,0,0,0-.88-.06,1.54,1.54,0,0,0-.61.25,1.09,1.09,0,0,0-.68-.27.71.71,0,0,1,.08-.18,1.07,1.07,0,0,1,.36-.37.72.72,0,0,0,.72.19c.38-.08.64-.39.57-.67a.64.64,0,0,0-.81-.35.77.77,0,0,0-.54.42,1.41,1.41,0,0,0-.62.57,2,2,0,0,0-.22.47,1.12,1.12,0,0,0-.45.39l0-1.14a.69.69,0,0,0,.33-.68c0-.39-.27-.7-.56-.68m5.37.47a3.08,3.08,0,0,0,0-.53A2.72,2.72,0,0,0,39.78,22h-.05a2.68,2.68,0,0,0-2.4,1.61,2.84,2.84,0,0,1,2.3,1.29,1.64,1.64,0,0,0,.31-.44,1.68,1.68,0,0,0,.2-1,1.26,1.26,0,0,1,.21,1.11,1.22,1.22,0,0,1-.23.5,2.68,2.68,0,0,1,.9-.2,2.54,2.54,0,0,1,1.34.36l.08-.05m4.3,2.54A2.83,2.83,0,0,0,43.93,25h0a2.81,2.81,0,0,0-1.28.34.24.24,0,0,0,0,.08,2.56,2.56,0,0,1,1.05,2,1.14,1.14,0,0,1,.69.13,1.22,1.22,0,0,1,.72.87,1.91,1.91,0,0,0-1.43-.54,2.62,2.62,0,0,1-.54,1.25,7,7,0,0,1-.7.83,2.45,2.45,0,0,1,.44.47,2.8,2.8,0,0,0,1.12.23h0a2.81,2.81,0,0,0,2.76-2.86m.19,0a3,3,0,0,1-.84,2.14A3,3,0,0,1,44,30.8h0a2.75,2.75,0,0,1-1-.17,3.11,3.11,0,0,1,.45,1.53,3,3,0,0,1-.87,2.22,3.14,3.14,0,0,1-2.19,1h0a3.14,3.14,0,0,1-3-2.27,3,3,0,0,1-.77,1.42,3.11,3.11,0,0,1-2.19.95h0a3.13,3.13,0,0,1-3.12-3.06,3.24,3.24,0,0,1,.38-1.53,2.89,2.89,0,0,1-1,.2h-.06a3,3,0,0,1-2.16-5.11A3,3,0,0,1,30.5,25h.06a2.74,2.74,0,0,1,.76.11,2.13,2.13,0,0,1,0-.25,3.07,3.07,0,0,1,3-3.12h.05a3.07,3.07,0,0,1,2.79,1.81,2.89,2.89,0,0,1,2.59-1.73h.05a2.91,2.91,0,0,1,2.89,2.84c0,.14,0,.28,0,.42a2.9,2.9,0,0,1,1.23-.3h.06a3,3,0,0,1,3,2.95m.37,0A3.35,3.35,0,0,0,44,24.46h-.06a3.35,3.35,0,0,0-.88.13,3.22,3.22,0,0,0-3.21-3.09h0a3.22,3.22,0,0,0-2.58,1.38,3.44,3.44,0,0,0-2.79-1.46h-.06A3.39,3.39,0,0,0,31,24.71a3,3,0,0,0-.42,0h-.06a3.34,3.34,0,0,0,.06,6.67h.06a2.83,2.83,0,0,0,.41,0,3.37,3.37,0,0,0-.14,1,3.45,3.45,0,0,0,3.43,3.38h.06a3.5,3.5,0,0,0,2.16-.81,2.45,2.45,0,0,1-1.88,1.31.38.38,0,0,0,.06.76h.07a3.24,3.24,0,0,0,2.62-2.08,4.79,4.79,0,0,0,.2-.61,3.44,3.44,0,0,0,2.71,1.33h.06a3.44,3.44,0,0,0,3.38-3.5,3.73,3.73,0,0,0-.18-1.05l.35,0H44a3.33,3.33,0,0,0,3.27-3.38"/><polygon class="cls-1" points="22.96 14.47 22.97 14.47 22.94 14.46 22.96 14.47"/><path class="cls-1" d="M31.3,1.24h0a.43.43,0,0,0-.41.45.42.42,0,0,0,.43.42h0A.5.5,0,0,0,31.62,2a.41.41,0,0,0,.11-.31.43.43,0,0,0-.43-.42m0,.91a.48.48,0,0,1-.48-.46.49.49,0,0,1,.46-.49h0a.47.47,0,0,1,.47.46.49.49,0,0,1-.12.34.53.53,0,0,1-.33.15h0"/><path class="cls-1" d="M23.85,18.32l.09,0a.75.75,0,0,1,.53-.21.52.52,0,0,1,.18,0c.24-.06.46-.1.68-.14h0a.87.87,0,0,0-.79-.16.9.9,0,0,0-.66.51m-.22-8.79a.57.57,0,0,1-.15.24,1.24,1.24,0,0,0,.81-.38,1.36,1.36,0,0,0,.38-.64.73.73,0,0,1-.06.63.72.72,0,0,1-.18.24,1.88,1.88,0,0,0,1.38-2,1.12,1.12,0,0,1-.18.57,1,1,0,0,1-.94.51.73.73,0,0,1-.2.19.76.76,0,0,1-.78.07,1.18,1.18,0,0,1-.08.55M31.24,1.6Zm.16-.15a.13.13,0,0,1,0,.12.16.16,0,0,1-.11.05h0a.16.16,0,0,1-.16-.16.15.15,0,0,1,0-.11.17.17,0,0,1,.12-.06h0a.16.16,0,0,1,.16.16m.25.55a.49.49,0,0,0,.12-.34.47.47,0,0,0-.47-.46h0a.49.49,0,0,0-.46.49.48.48,0,0,0,.48.46h0A.53.53,0,0,0,31.65,2M32,4.74a5,5,0,0,0-.26.77,2.23,2.23,0,0,1-2.08,2.16,2.77,2.77,0,0,1-3-1.8l-.23,0a1.3,1.3,0,0,1-.26.77,1,1,0,0,1-.69.34.63.63,0,0,1-.21.43.62.62,0,0,1-.46.18.65.65,0,0,1-.31.36.62.62,0,0,1-.36.09.55.55,0,0,1-.32.4,1.35,1.35,0,0,1-.27.06.78.78,0,0,1-.26.25.59.59,0,0,1-.48.07,1.31,1.31,0,0,1-.36.38,1.24,1.24,0,0,1-.83.25l.12-.18,0,0L22,9a10.83,10.83,0,0,1,1.86-2.08A11.09,11.09,0,0,1,26.57,5a6.62,6.62,0,0,1,.31-1.34,5,5,0,0,1,.8-1.7,6.39,6.39,0,0,1,.49-.59,1,1,0,0,0-.07.18,1.54,1.54,0,0,0-.08.34A.15.15,0,0,0,28,2c0,.12,0,.26,0,.42a2,2,0,0,0,.59,1.35l0,0A2,2,0,0,0,30,4.32h.07a1.26,1.26,0,0,0,.28-.05h.05a2,2,0,0,0,.26,0,1.11,1.11,0,0,0,.17.3.91.91,0,0,0,.72.36h0A1,1,0,0,0,32,4.74m-.13-3.09a.58.58,0,0,1-.16.42.55.55,0,0,1-.41.19h0a.59.59,0,0,1-.59-.57.61.61,0,0,1,.16-.42.58.58,0,0,1,.41-.18h0a.59.59,0,0,1,.59.57M21.51,10.14c.32-.35.5-.55.83-.89a3.5,3.5,0,0,1-.31.61l-.13.19a1.31,1.31,0,0,0,.5-.25,1.37,1.37,0,0,0,.51-.72.87.87,0,0,1-.13.63.88.88,0,0,1-.22.25,1.78,1.78,0,0,0,.66-.33A1.52,1.52,0,0,0,23.69,9h0a.92.92,0,0,1-.38.15A.7.7,0,0,1,22.72,9a1,1,0,0,0,.65,0A1.07,1.07,0,0,0,24,8.34a.77.77,0,0,1-.32.62h0V9a1,1,0,0,0,.59-.2,1,1,0,0,0,.47-1,.83.83,0,0,1-.06.91,1.36,1.36,0,0,0,.7-.57,1.38,1.38,0,0,0,.18-1.2,1.17,1.17,0,0,1,.21.52s0-.09,0-.14a2.29,2.29,0,0,1-.44,2.24,2.43,2.43,0,0,1-1.51.83,3.16,3.16,0,0,1-2.26,1.86,4,4,0,0,0-1.67,1,1,1,0,0,1,.3-.52,2.26,2.26,0,0,1,.86-.53,2.06,2.06,0,0,0-.94.42,1.93,1.93,0,0,0-.49.57,1.31,1.31,0,0,1,.23-.51,1.41,1.41,0,0,1,.6-.48,1.51,1.51,0,0,0-.75.46,1.6,1.6,0,0,0-.36.49,1,1,0,0,1,.19-.49,1.05,1.05,0,0,1,.44-.42,1.61,1.61,0,0,0-.59.44,1.41,1.41,0,0,0-.27.4,5.15,5.15,0,0,1,1-1.53c.28-.33,1.15-1.17,1.39-1.42m-1.44,3.19A4.5,4.5,0,0,1,22,12.13a1.49,1.49,0,0,0-.2.78,1.44,1.44,0,0,0,1.05,1.33l.07,0a.91.91,0,0,0-.33,0,1.07,1.07,0,0,0-1,1.11v.1l-.43.07a4.12,4.12,0,0,1-.6,0h-.86l-.6,0a3.48,3.48,0,0,0-1.36.23l1.14-.85v0l-.95.27h0a5.94,5.94,0,0,0,2.18-1.8m-2.16,1.91.45-.13-.45.33-.6.46a16.47,16.47,0,0,0-1.69,1c-.31.22-.37.24-.67.47a.34.34,0,0,1,0-.23,2.06,2.06,0,0,1,.65-.63,6.75,6.75,0,0,1,2.32-1.28m7.48-.15h0Zm-.78,1.07a2.92,2.92,0,0,0,.13-.42,2.5,2.5,0,0,0,0-.45l.73-.13s0,.05,0,.07c.06.18.19.22.31.37a1,1,0,0,0,.18.28l.19.11a5.79,5.79,0,0,0,1,.33,9,9,0,0,1,1.55.71l.45.27a2.67,2.67,0,0,1-.8.12h-.27a.39.39,0,0,0-.14-.08.42.42,0,0,0-.25,0,.83.83,0,0,0-.92-.21.8.8,0,0,0-.43.3,8.18,8.18,0,0,1-1.09-.67,6.91,6.91,0,0,1-.71-.61M35.25,2.09A3.23,3.23,0,0,0,33.81.92a3.24,3.24,0,0,0-1-.3A3,3,0,0,0,31,0a3.13,3.13,0,0,0-.6.06,3.69,3.69,0,0,0-1.62.63,2.7,2.7,0,0,0-.49.44A5.76,5.76,0,0,0,27,2.81a5.39,5.39,0,0,0-.72,2.06,11.07,11.07,0,0,0-2.48,1.87,11,11,0,0,0-2,2.5l-.06,0a2.58,2.58,0,0,0-1,1.37,11.3,11.3,0,0,0-1,1.22A8,8,0,0,0,19,13.09a9.48,9.48,0,0,1-.58,1c-.18.28-.45.67-.62.9a12.59,12.59,0,0,0-2.34,1.53,4,4,0,0,0-.51.46c-.06.07-.2.31-.07.49a.21.21,0,0,0,0,.19,1,1,0,0,0,.71.22c.2,0,.44,0,.49-.14a6.58,6.58,0,0,1,.67-.84,4.22,4.22,0,0,1,2.86-1.12l.17,0,.37,0h.16l.88-.06c.29,0,.59,0,1-.07l1.46-.15a1,1,0,0,0,.05.83c.18.27.42.29.69.47s.55.35.9.58a7,7,0,0,1,.83.52l1-.1a3.52,3.52,0,0,0-.55-.27.74.74,0,0,1,.57-.07.71.71,0,0,1,.32.14.69.69,0,0,0,.05.17l.27,0,.36,0c.9-.07,1.54-.1,2.19-.1h.6a3.09,3.09,0,0,1-.43-.24c-.2-.12-.3-.22-.5-.34s-.31-.15-.51-.25c-1.07-.52-1.68-.8-2.77-1.26,0-.17.06-.27.09-.44s0-.24,0-.35a10,10,0,0,0,3.6-2.33,6.78,6.78,0,0,0,1.78-4.62A10,10,0,0,0,32,6.38a3.21,3.21,0,0,1,.28-1.8.91.91,0,0,0,.22-.49l0,0h0s0-.09,0-.14a1.61,1.61,0,0,0,.51-.4,1.6,1.6,0,0,0,.43-.87h0c.18-.07.32-.11.54-.18.45-.14.72-.21,1.19-.32h.06l0,0a2.74,2.74,0,0,0-1.34-.38,3.4,3.4,0,0,0-.61.06L33,1.84h0l.34-.09a2.64,2.64,0,0,1,.6-.07,2.26,2.26,0,0,1,1.32.45Z"/><path class="cls-1" d="M7.77,17.52a8.81,8.81,0,0,0-2.86-.24,8.77,8.77,0,0,0-2.85.24,8.77,8.77,0,0,0,2.85.24,8.81,8.81,0,0,0,2.86-.24m10.81,3.93.82,1h0c-.45.39-.93.82-1.51,1.28a26.6,26.6,0,0,1-4,2.81,6.32,6.32,0,0,1-3.22,1,.83.83,0,0,1-.92-.58c-.15-.57.65-.72,1.24-.85a6.59,6.59,0,0,0,1.89-.75,28.61,28.61,0,0,0,2.88-1.94c1-.72,1.61-1.18,2.77-1.95M9,17.5c-.11.2-1.46.58-4.1.58s-4-.38-4.09-.54c.1-.19,1.46-.58,4.09-.58s4,.39,4.1.54m-7.74,4a25.76,25.76,0,0,1,.27-3.29c.23.05.49.09.75.13l.46.08c-.14,1.22-.18,1.92-.22,3.15a31.8,31.8,0,0,0,0,3.24c.05.78.34,1.82,0,2a.61.61,0,0,1-.87-.17,6.49,6.49,0,0,1-.36-2.28c-.08-1.28-.1-1.77-.08-2.9m17.3,0h0l-.24-.28h0c-1,.65-1.67,1.16-2.58,1.83a20.5,20.5,0,0,1-3.22,2.15,6.1,6.1,0,0,1-1.43.63,1.5,1.5,0,0,1-1.19.05c-.17-.08-.22-.21-.29-.39.08-1,.11-1.5.12-2.47a25.1,25.1,0,0,0-.09-3.36,19.63,19.63,0,0,0-.29-2,.29.29,0,0,0,0-.1c0-.92-4-.94-4.48-.94s-4.2,0-4.45.85h0A28.81,28.81,0,0,0,0,23.11c0,2.87.07,5.1,2.2,7C3.93,31.68,5.55,31.89,7.87,32a12.37,12.37,0,0,0,6-1.55c2.55-1.22,3.68-2.64,5.64-4.53.58-.55,1.07-1.07,1.54-1.56l-1.34-1.59-.27-.32.64-.55L19.28,21l-.69.47Zm14.89-3.11a1,1,0,0,0-.65-.75.91.91,0,0,0-.9.12,25,25,0,0,0-3.87,0,17.63,17.63,0,0,0-4.52.72A14.09,14.09,0,0,0,19,20.69l.26.27h0a13.33,13.33,0,0,1,2.59-1.39,12.78,12.78,0,0,1,3.8-.95,25.23,25.23,0,0,1,7.09.2c-3.41-.12-5.52-.2-7.82.41a11.42,11.42,0,0,0-2.88,1.23,13.34,13.34,0,0,0-2,1.38l.11.12c.57.64.93,1,1.52,1.65a12.79,12.79,0,0,1,4.82-3.46A11.37,11.37,0,0,1,30,19.24a9.8,9.8,0,0,1,2.42,0,.47.47,0,0,0,.22.22.5.5,0,0,0,.66-.2,1,1,0,0,0,.21-.94"/></g></g></svg>
                </div>
              </Link>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Homecomplexproblems