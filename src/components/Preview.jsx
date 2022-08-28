import React from "react";
import { Flex, Text, Box, Grid } from "@chakra-ui/react";
import { useRecoilState } from 'recoil';

import ImageCard from "./ImageCard";
import ImageCardContent from "./ImageCardContent";
import Button from "./Button";
import { SavedCombinations } from '../states/savedCombinations';

const Preview = ({ combinations, deleteItem, selectedItem }) => {
  const [savedCombinations, setSavedCombinations] = useRecoilState(SavedCombinations);

  const onBuy = () => {
    combinations.forEach(comb => {
      window.open(comb.link, "_blank");
    });
  }

  return (
    <Flex direction="column" w="35%">
      <Text fontWeight="500" fontSize="md" m={7}>
        Preview
      </Text>
      <Box>
        <Flex p={3}>
            <ImageCard
              src={selectedItem?.image}
              width="140px"
              height="140px"
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
      <Grid templateColumns="repeat(2, 1fr)" p={3}>
        {combinations.map((combination) => (
          <Flex direction="column" p={2} bg="gray.50" m={1} borderRadius="lg">
            <ImageCard
              src={combination.image_link}
              width="140px"
              height="140px"
            />
            <Box ml={4}>
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
      <Flex direction="column">
        <Button type="primary" width="484px" text="Buy now" onClick={onBuy} />
        <Box mt={3}>
          <Button
            type="secondary"
            width="484px"
            text="Save this combo"
            onClick={() => setSavedCombinations([...savedCombinations, combinations])}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Preview;
