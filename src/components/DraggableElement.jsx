import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Box, Grid, Flex } from "@chakra-ui/react";

import ListItem from "./ListItem";
import Button from "./Button";

const DraggableElement = ({ prefix, elements, addToPreview, deleteItem }) => (
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
            <Button type="primary" width="484px" text="Buy now" />
            <Box mt={3}>
              <Button type="secondary" width="484px" text="Save this combo" />
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
);

export default DraggableElement;
