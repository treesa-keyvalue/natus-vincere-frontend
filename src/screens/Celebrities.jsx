import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Box } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";

import ImageCard from "../components/ImageCard";
import ImageCardContent from "../components/ImageCardContent";
import Button from "../components/Button";
import Header from "../components/Header";
import "../styles/landing.scss";

const Celebrities = () => {
  return (
    <>
      <Header />
      <div className="celebritypage-bg"></div>
      <main className="navi-celebrity">
        <Box fontSize="lg" fontWeight="medium">CELEBRITIES</Box>
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
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
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
                <img src="./images/celebrity.png" alt="celebrity" />
              </Col>
              <Col sm="7" className="selection-container">
                <Row>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
                    <ImageCardContent
                      title={"X-Brand"}
                      description={"Warm Winter Shirt "}
                      price={"1299"}
                      discount={"5"}
                    />
                  </Col>
                  <Col sm="4">
                    <ImageCard src="./images/party.png" width="100%" />
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
    </>
  );
};

export default Celebrities;
