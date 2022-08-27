import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

import ImageCard from "./ImageCard";
import ImageCardContent from "./ImageCardContent";

const Preview = ({ combinations }) => {
  return (
    <Flex direction="column">
      <Text fontWeight="medium" fontSize="md" m={3}>
        Preview
      </Text>
      {combinations.map((combination) => (
        <Flex p={3}>
          <ImageCard src={combination.image_link} width="220px" />
          <Box ml={4}>
            <ImageCardContent title={combination.name} description={combination.description} price={combination.price} discount={combination.discount}/>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Preview;
