import React from "react";
import { useRecoilState } from "recoil";
import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/Header";

import { SavedCombinations } from "../states/savedCombinations";
import ImageCard from "../components/ImageCard";
import ImageCardContent from "../components/ImageCardContent";
import Button from "../components/Button";

const SavedProducts = () => {
  const [savedCombinations, setSavedCombinations] = useRecoilState(SavedCombinations);

  const onBuy = (item) => {
    item.forEach(comb => {
      window.open(comb.link, "_blank");
    });
  };

  const onRemove = (index) => {
    const combs = [...savedCombinations];
    combs.splice(index, 1);
    setSavedCombinations(combs);
  }

  return (
    <>
      <Header />
      {savedCombinations.length > 0 ? (
        <Box pt={16}>
          <Flex
            alignItems="center"
            borderRadius="lg"
            direction="column"
          >
            {savedCombinations.map((item, index) => (
              <Flex alignItems="center" bg="gray.50" mb={2} borderRadius="lg" pr={3}>
                {item.map((it) => (
                  <>
                    <Flex direction="column" p={4} mr={2} borderRadius="lg">
                      <ImageCard
                        src={it.image_link}
                        width="140px"
                        height="140px"
                      />
                      <Box>
                        <ImageCardContent
                          title={it.name}
                          description={it.description}
                          price={it.price}
                          discount={it.discount}
                        />
                      </Box>
                    </Flex>
                  </>
                ))}
                <Flex direction="column">
                  <Button type="primary" width="200px" text="Buy now" onClick={() => onBuy(item)} />
                  <Box mt={2}>
                    <Button type="secondary" width="200px" text="Remove" onClick={() => onRemove(index)}/>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>
      ) : (
        <Box color="gray.500" fontWeight="300" textAlign="center" mt={100}>
          Please save a combination to view saved items
        </Box>
      )}
    </>
  );
};

export default SavedProducts;
