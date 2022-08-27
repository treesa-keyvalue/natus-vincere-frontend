/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { Tween } from 'react-gsap';

const HeaderLanding = () => {
  // const [isSticky, toggleIsSticky] = useState(false);
  // const scrollEventListner = () => {
  //   toggleIsSticky(window.pageYOffset > 80);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollEventListner);
  //   return () => {
  //     window.removeEventListener('scroll', scrollEventListner);
  //   };
  // }, []);

  return (
    <Tween to={{ y: '0', opacity: 1 }} duration={1} delay={0.5} ease="back.out(1.7)">
      <header className="landing-header">
        <Container className="d-flex justify-content-between align-items-center">
          <a href="#">
            <img src="./images/logo.svg" alt="Logo" />
          </a>
          <nav className="ms-auto">
            <a href="/celebrities">Celebrities</a>
          </nav>
          <div className="account-buttons">
            <a href="#" className="head-btn">LOGIN</a>
            <a href="#" className="head-btn">SIGN UP</a>
          </div>
        </Container>
      </header>
    </Tween>
  );
};

export default HeaderLanding;
