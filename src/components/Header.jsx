import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Img, Button } from "@chakra-ui/react";

const Header = ({ fromHome }) => {
  const navigate = useNavigate();

  return (
    <header className="innerpage-header">
      <Flex className={fromHome? "homeHeader" : "container"} p={5} justifyContent="space-between" zIndex={2}>
        <Img src="./images/logo.png" onClick={() => navigate("/home")} cursor="pointer" />
        <Button
          w="234px"
          bg="white"
          color="292C3E"
          border="1px solid #DBE0E7"
          fontWeight="light"
          onClick={() => navigate("/saved")}
        >
          WISHLIST
        </Button>
      </Flex>
    </header>
  );
};

export default Header;
