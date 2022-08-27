import React from "react";
import { useRecoilValue } from "recoil";
import { Flex, Box, Grid } from "@chakra-ui/react";

import { SavedCombinations } from "../states/savedCombinations";
import ImageCard from "../components/ImageCard";
import ImageCardContent from "../components/ImageCardContent";
import Button from "../components/Button";

const SavedProducts = () => {
  const savedCombinations = useRecoilValue(SavedCombinations);

  return (
    <>
      {savedCombinations.length > 0 ? (
        <>
          <Grid templateColumns="repeat(4, 1fr)" alignItems="center" bg="gray.50">
            {savedCombinations.map((item) => (
                <Flex
                  direction="column"
                  p={4}
                  mr={2}
                  borderRadius="lg"
                >
                  <ImageCard
                    src={item.image_link}
                    width="140px" height="140px"
                  />
                  <Box>
                    <ImageCardContent
                      title={item.name}
                      description={item.description}
                      price={item.price}
                      discount={item.discount}
                    />
                  </Box>
                </Flex>
            ))}
            <Button type="primary" width="200px" text="Buy now" />
          </Grid>
        </>
      ) : (
        <Box color="gray.500" fontWeight="300" textAlign="center" mt={100}>Please save a combination to view saved items</Box>
      )}
    </>
  );
};

export default SavedProducts;
