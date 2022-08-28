import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Trash } from "phosphor-react";

const ImageCardContent = ({
  title,
  description,
  price,
  discount,
  deleteItem,
  hideRs,
}) => (
  <Flex direction="column">
    <Box fontWeight="medium">{title}</Box>
    <Text fontSize="xs">{description}</Text>
    <Flex fontSize="sm" color="red.500" justifyContent="space-between">
      <Flex>
        {!hideRs && <Text mr={1}>Rs</Text>}
        <Text>{price}</Text>
      </Flex>
      {deleteItem && (
        <Trash
          cursor="pointer"
          size={16}
          color="#3e3a6e"
          weight="bold"
          onClick={deleteItem}
        />
      )}
    </Flex>
  </Flex>
);

export default ImageCardContent;
