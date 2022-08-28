import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Box, Img } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";

import ImageCard from "../components/ImageCard";
import ImageCardContent from "../components/ImageCardContent";
import Button from "../components/Button";
import Header from "../components/Header";
import "../styles/landing.scss";

const CasualWear = () => {
  return (
    <div className="container">
      <Header />
      <div className="celebritypage-bg"></div>
      <main className="navi-celebrity">
        <Box fontSize="lg" fontWeight="medium">CASUAL WEAR</Box>
        <section className="navi-celebrity__box">
          <Container>
            <Row>
              <Col sm="5" className="image-container">
                <Img src="./images/sw1.png" alt="celebrity" />
              </Col>
              <Col sm="7" className="selection-container">
                <Row>
                  <Col sm="4">
                    <ImageCard src="./images/sw2.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw3.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw4.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw5.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                </Row>
                <Box mt={3}>
                  <Button
                    type="primary"
                    width="100%"
                    text="OPEN ALL PRODUCTS"
                  />
                </Box>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="navi-celebrity__box">
          <Container>
            <Row>
              <Col sm="5" className="image-container">
                <Img src="./images/sw21.png" alt="celebrity" />
              </Col>
              <Col sm="7" className="selection-container">
                <Row>
                  <Col sm="4">
                    <ImageCard src="./images/sw22.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw23.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw24.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                </Row>
                <Box mt={3}>
                  <Button
                    type="primary"
                    width="100%"
                    text="OPEN ALL PRODUCTS"
                  />
                </Box>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="navi-celebrity__box">
          <Container>
            <Row>
              <Col sm="5" className="image-container">
                <Img src="./images/sw31.png" alt="celebrity" />
              </Col>
              <Col sm="7" className="selection-container">
                <Row>
                  <Col sm="4">
                    <ImageCard src="./images/sw32.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw33.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw34.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/sw35.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                </Row>
                <Box mt={3}>
                  <Button
                    type="primary"
                    width="100%"
                    text="OPEN ALL PRODUCTS"
                  />
                </Box>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default CasualWear;
