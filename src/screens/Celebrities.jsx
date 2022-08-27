import React from 'react';
import Header from '../components/Header';
import { Container, Col, Row } from 'reactstrap';
import ImageCard from '../components/ImageCard';
import ImageCardContent from '../components/ImageCardContent';

// import { Tween } from 'react-gsap';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/landing.scss';

const Celebrities = () => {
  return (
    <>
      <Header />
      <div className="celebritypage-bg"></div>
      <main className="navi-celebrity">
        <h1>CELEBRITIES</h1>
        <section className="navi-celebrity__box">
          <Container>
            <Row>
              <Col sm="5" className="image-container">
                <img src="./images/celebrity.png" alt="celebrity" />
              </Col>
              <Col sm="7" className="selection-container">
                <Row>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
                    <ImageCardContent title={"X-Brand"} description={"Warm Winter Shirt "} price={'1299'} discount={"5"}/>
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%"/>
                    <ImageCardContent title={"X-Brand"} description={"Warm Winter Shirt "} price={'1299'} discount={"5"}/>
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
                    <ImageCardContent title={"X-Brand"} description={"Warm Winter Shirt "} price={'1299'} discount={"5"}/>
                  </Col>
                </Row>
                <a href="#" class="celebrity-button">OPEN ALL PRODUCTS</a>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="navi-celebrity__box">
          <Container>
            <Row>
              <Col sm="5" className="image-container">
                <img src="./images/celebrity.png" alt="celebrity" />
              </Col>
              <Col sm="7" className="selection-container">
                <Row>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
                    <ImageCardContent title={"X-Brand"} description={"Warm Winter Shirt "} price={'1299'} discount={"5"}/>
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%"/>
                    <ImageCardContent title={"X-Brand"} description={"Warm Winter Shirt "} price={'1299'} discount={"5"}/>
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
                    <ImageCardContent title={"X-Brand"} description={"Warm Winter Shirt "} price={'1299'} discount={"5"}/>
                  </Col>
                </Row>
                <a href="#" class="celebrity-button">OPEN ALL PRODUCTS</a>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Celebrities;
