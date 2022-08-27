import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Flex, Box } from "@chakra-ui/react";

import { SavedCombinations } from "../states/savedCombinations";
import ImageCard from "../components/ImageCard";
import ImageCardContent from "../components/ImageCardContent";
import Button from '../components/Button';

const SavedProducts = () => {
  const savedCombinations = useRecoilValue(SavedCombinations);

  useEffect(() => {
    console.log(savedCombinations);
  }, [savedCombinations]);

  return (
    <>
      <Flex>
        {savedCombinations.map((item) => (
          <>
            <Flex
              direction="column"
              bg="gray.50"
              p={4}
              mr={2}
              borderRadius="lg"
            >
              <ImageCard src={item.image} width="190px" height="202px" />
              <Box>
                <ImageCardContent
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  discount={item.discount}
                />
              </Box>
            </Flex>
          </>
        ))}
      </Flex>
      <Flex>
        <Button type="primary" width="200px" text="Buy now" />
      </Flex>
    </>
  );
};

export default SavedProducts;
