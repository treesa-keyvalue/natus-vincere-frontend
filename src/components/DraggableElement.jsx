import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Box, Grid, Flex } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import ListItem from "./ListItem";
import Button from "./Button";
import { SavedCombinations } from '../states/savedCombinations';

const DraggableElement = ({ prefix, elements, addToPreview, deleteItem }) => {
  const setSavedCombinations = useSetRecoilState(SavedCombinations);

  const onBuy = () => {
    console.log(elements);
    elements.map(async(elt) => {
      console.log(elt.link);
      await window.open(elt.link, "_blank");
    });
  };

  return (
  <Box p={4}>
    <Box fontWeight="bold" fontSize="lg" mb={4}>
      {prefix === "combinations" ? "All Combinations" : "Preview"}
    </Box>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <Grid
          templateColumns={
            prefix === "preview" ? "repeat(2, 1fr)" : "repeat(1, 1fr)"
          }
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {elements?.map((item, index) => (
            <ListItem
              key={item?.id}
              item={item}
              index={index}
              addToPreview={addToPreview}
              deleteItem={deleteItem}
            />
          ))}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
    {prefix === "preview" && (
      <>
        {elements?.length > 0 ? (
          <Flex direction="column">
            <Button type="primary" width="484px" text="Buy now" onClick={onBuy} />
            <Box mt={3}>
              <Button type="secondary" width="484px" text="Save this combo" onClick={() => setSavedCombinations(elements) } />
            </Box>
          </Flex>
        ) : (
          <Box color="gray.400" textAlign="center" mt={5}>
            Please select a combination to see a preview
          </Box>
        )}
      </>
    )}
  </Box>
)};

export default DraggableElement;
