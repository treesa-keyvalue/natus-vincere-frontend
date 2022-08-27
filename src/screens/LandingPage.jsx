/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import HeaderLanding from '../components/HeaderLanding';
import { Tween } from 'react-gsap';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/landing.scss';

const LandingPage = () => {
  return (
    <>
      <HeaderLanding />
      <div className="landingpage-bg"></div>
      <main className="navi-homepage">
        <Container>
          <Row className="align-items-center">
            <Col className="text-container col-lg-6 order-2 order-lg-1">
              <Tween to={{ y: '0', opacity: 1 }} duration={1} delay={1} ease="back.out(1.7)">
                <h1>Find The Best Fashion Style For You</h1>
              </Tween>
              <Tween to={{ y: '0', opacity: 1 }} duration={1} delay={1.2} ease="back.out(1.7)">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              </Tween>
              <Tween to={{ y: '0', opacity: 1 }} duration={1} delay={1.4} ease="back.out(1.7)">
                <div className="banner-buttons">
                  <a href="#">Install Plugin</a>
                  <a href="#">Try Demo</a>
                </div>
              </Tween>
            </Col>
            <Col className="image-container col-lg-6 col-sm-8 mx-lg-0 mx-auto order-1 order-lg-2">
              <Tween to={{ x: '0', opacity: 1 }} duration={1} delay={1} ease="back.out(1.7)">
                <img src="./images/banner-image.png" alt="Banner" />
              </Tween>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default LandingPage;
