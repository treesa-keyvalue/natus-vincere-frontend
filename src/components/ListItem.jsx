import React, { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Flex, Grid, GridItem, Box } from "@chakra-ui/react";

import ImageCard from "./ImageCard";
import ImageCardContent from "./ImageCardContent";

const ListItem = ({ item, index, addToPreview, deleteItem }) => {
  useEffect(() => {
      console.log(item);
  }, [item])

  return (
    <>
      {item.prefix === "combinations" ? (
        <Grid templateColumns="repeat(3, 1fr)">
          {item.combinations?.map((combination, index) => (
            <Draggable draggableId={combination.id} index={index}>
              {(provided, snapshot) => {
                return (
                  <Box
                    onClick={() => addToPreview(item)}
                    ref={provided.innerRef}
                    snapshot={snapshot}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <GridItem key={combination.id} bg="gray.50" p={5} mb={2}>
                      <Flex direction="column">
                        <ImageCard src={combination.image} width="260px" />
                        <ImageCardContent
                          title={combination.title}
                          description={combination.description}
                          price={combination.price}
                          discount={combination.discount}
                        />
                      </Flex>
                    </GridItem>
                  </Box>
                );
              }}
            </Draggable>
          ))}
        </Grid>
      ) : (
        <>
        <Draggable draggableId={item.id} index={index}>
          {(provided, snapshot) => {
            return (
              <Box
                ref={provided.innerRef}
                snapshot={snapshot}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Flex direction="column" bg="gray.50" p={4} mr={2} borderRadius="lg">
                  <ImageCard src={item.image} width="190px" height="202px" />
                  <Box>
                    <ImageCardContent
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      discount={item.discount}
                      deleteItem={() => deleteItem(item.id)}
                    />
                  </Box>
                </Flex>
              </Box>
            );
          }}
        </Draggable>
        </>
      )}
    </>
  );
};

export default ListItem;
