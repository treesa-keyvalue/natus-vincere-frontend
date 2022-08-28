import React from "react";
import { Flex, Text, Box, Grid } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import ImageCard from "./ImageCard";
import ImageCardContent from "./ImageCardContent";
import Button from "./Button";
import { SavedCombinations } from "../states/savedCombinations";

const Preview = ({ combinations, deleteItem, selectedItem }) => {
  const [savedCombinations, setSavedCombinations] =
    useRecoilState(SavedCombinations);

  const onBuy = () => {
    combinations.forEach((comb) => {
      window.open(comb.link, "_blank");
    });
  };

  return (
    <Flex position="fixed" direction="column" w="32%" ml={4}>
      <Box position="fixed" right="8%">
        <Text fontWeight="500" fontSize="md" m={7}>
          Preview
        </Text>
        <Box h="65vh" overflow="auto" mb={4}>
          <Box bg="gray.50" mb={4} borderRadius="lg">
            <Box px={6}>
              <Flex p={2} pt={4}>
                <ImageCard
                  src={selectedItem?.image}
                  width="200px"
                  height="200px"
                />
                <Box ml={4}>
                  <ImageCardContent
                    title={selectedItem?.title}
                    description={selectedItem?.description}
                    price={selectedItem?.price}
                    hideRs={true}
                  />
                </Box>
              </Flex>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" py={3} pr={2}>
              {combinations.map((combination) => (
                <Flex
                  direction="column"
                  p={2}
                  bg="gray.50"
                  m={1}
                  borderRadius="lg"
                  maxW="252px"
                >
                  <Box display="block" margin="0 auto">
                    <ImageCard
                      src={combination.image_link}
                      width="140px"
                      height="140px"
                    />
                  </Box>
                  <Box mt={1} display="block" margin="0 auto">
                    <ImageCardContent
                      title={combination.name}
                      description={combination.description}
                      price={combination.price}
                      discount={combination.discount}
                      deleteItem={() => deleteItem(combination?.id)}
                    />
                  </Box>
                </Flex>
              ))}
            </Grid>
          </Box>
        </Box>
        <Flex direction="column">
          <Button type="primary" width="100%" text="Buy now" onClick={onBuy} />
          <Box mt={3}>
            <Button
              type="secondary"
              width="100%"
              text="Save this combo"
              onClick={() =>
                setSavedCombinations([...savedCombinations, combinations])
              }
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Preview;
