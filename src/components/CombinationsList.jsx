import React from "react";
import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";

import ImageCard from './ImageCard';
import ImageCardContent from './ImageCardContent';

const CombinationsList = ({ combinations }) => {
  return (
    <Flex direction="column">
      <Text fontWeight="medium" fontSize="md" m={3}>All Combinations</Text>
      <Grid templateColumns="repeat(2, 1fr)">
        {combinations?.map(combination => (
            <GridItem key={combination.id} bg="gray.50" p={3} px={8} mb={2}>
                <Flex direction="column">
                    <ImageCard src={combination.image} width="220px" />
                    <ImageCardContent title={combination.title} description={combination.description} price={combination.price} discount={combination.discount}/>
                </Flex>
            </GridItem>
        ))}
      </Grid>
    </Flex>
  )
};

export default CombinationsList;
