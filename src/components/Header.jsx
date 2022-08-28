import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Img, Button } from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="innerpage-header">
      <Flex className="container" p={5} justifyContent="space-between">
        <Img src="./images/logo.png" />
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
