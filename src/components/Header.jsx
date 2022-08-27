import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "phosphor-react";
import { Flex } from '@chakra-ui/react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="innerpage-header">
      <Flex className="container" p={5} justifyContent="space-between">
        <ArrowLeft cursor="pointer" size={24} color="#3e3a6e" weight="bold" onClick={() => navigate(-1)} />
        <ShoppingCart cursor="pointer" size={24} color="#3e3a6e" weight="bold" onClick={() => navigate('/saved')} />
      </Flex>
    </header>
  );
};

export default Header;
