import React from "react";
import { Flex, Text, Grid, GridItem, Box } from "@chakra-ui/react";

import ImageCard from "./ImageCard";
import ImageCardContent from "./ImageCardContent";

const CombinationsList = ({ combinations, selectCombination }) => {
  return (
    <Flex direction="column" w="65%">
      <Text fontWeight="500" fontSize="md" m={7}>
        All Combinations
      </Text>
      {combinations?.map((comb) => (
        <Grid
          bg="gray.50"
          cursor="pointer"
          templateColumns="repeat(3, 1fr)"
          onClick={() => selectCombination(comb)}
          mb={4}
          borderRadius="lg"
          pt={2}
        >
          {comb.combination?.map((combination) => (
            <GridItem key={combination.id} p={2} mb={2}>
              <Flex direction="column" bg="white" p={2} borderRadius="lg">
                <Flex justifyContent="center">
                  <ImageCard
                    src={combination.image_link}
                    width="200px"
                    height="200px"
                  />
                </Flex>
                <Box mt={2}>
                  <ImageCardContent
                    title={combination.name}
                    description={combination.description}
                    price={combination.price}
                    discount={combination.discount}
                  />
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      ))}
    </Flex>
  );
};

export default CombinationsList;
