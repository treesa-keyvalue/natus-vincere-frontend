import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { themes } from "../constants";

const Themes = () => {
  return (
    <>
      <Box fontWeight="600" my={5}>
        CHOOSE YOUR STYLE
      </Box>
      <Flex bg="gray.50" direction="column" p={2}>
        <Flex>
          {themes.map((theme) => (
            <Flex direction="column" p={2}>
              <Image
                src={theme.image_link}
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
              />
              <Box mt={theme.name !== "Street Wear" ? "5px" : 0}>
                {theme.name}
              </Box>
            </Flex>
          ))}
          <Flex direction="column" p={2} cursor="pointer" _hover={{ opacity: 0.8 }}>
            <Image src="./images/upload.png" />
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <div className="colorbox-selector selectbox-detail">
          <Box fontWeight="600" my={5}>
            Color
          </Box>
          <ul className="colorbox-list">
            <li style={{ background: "#94003C" }}></li>
            <li style={{ background: "#AC607F" }}></li>
            <li style={{ background: "#E4D7DC" }} className="active"></li>
            <li style={{ background: "#A89CA1" }}></li>
            <li style={{ background: "#FD798C" }}></li>
            <li style={{ background: "#FEBFCD" }}></li>
            <li style={{ background: "#FE6695" }}></li>
          </ul>
        </div>
        <Box>
          <div className="colorbox-selector selectbox-detail">
            <Box fontWeight="600" my={5}>
              Skin Tone
            </Box>
            <ul className="colorbox-list">
              <li style={{ background: "#8D5524" }}></li>
              <li style={{ background: "#C68642" }}></li>
              <li style={{ background: "#E0AC69" }} className="active"></li>
              <li style={{ background: "#F1C27D" }}></li>
              <li style={{ background: "#FFDBAC" }}></li>
            </ul>
          </div>
        </Box>
      </Flex>

      <div className="sizebox-selector selectbox-detail">
        <Box fontWeight="600" mt={10} mb={3}>
          Size Chart
        </Box>
        <Flex direction="column" justifyContent="space-between">
          <Flex justifyContent="space-between">
            <Box>
              <Text>Top</Text>
              <ul className="sizebox-list">
                <li>XS</li>
                <li>S</li>
                <li className="active">M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </Box>
            <Box mr={9}>
              <Text>Bottom</Text>
              <ul className="sizebox-list">
                <li>28</li>
                <li>30</li>
                <li className="active">32</li>
                <li>34</li>
                <li>36</li>
              </ul>
            </Box>
          </Flex>
          <Box mt={3}>
            <Text>Shoes</Text>
            <ul className="sizebox-list">
              <li>6</li>
              <li>7</li>
              <li className="active">8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
            </ul>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Themes;
