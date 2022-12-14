import React from "react";
import { Flex, Text, Grid, GridItem, Box } from "@chakra-ui/react";

import ImageCard from "./ImageCard";
import ImageCardContent from "./ImageCardContent";

const CombinationsList = ({ combinations, selectCombination }) => {
  return (
    <Flex direction="column" w="58%" ml="5px">
      <Text fontWeight="600" fontSize="lg" my={7}>
        ALL COMBINATIONS
      </Text>
      {combinations?.map((comb) => (
        <Grid
          bg="gray.50"
          cursor="pointer"
          templateColumns="repeat(3, 1fr)"
          onClick={() => selectCombination(comb)}
          mb={8}
          borderRadius="lg"
          pt={2}
        >
          {comb.combination?.map((combination) => (
            <GridItem key={combination.id} p={2} mb={2}>
              <Flex direction="column" bg="white" p={2} borderRadius="lg">
                <Flex justifyContent="center" onClick={() => window.open(combination.link)}>
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
