import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Trash } from "phosphor-react";

const ImageCardContent = ({
  title,
  description,
  price,
  discount,
  deleteItem,
}) => (
  <Flex direction="column">
    <Box fontWeight="medium">{title}</Box>
    <Text fontSize="xs">{description}</Text>
    <Flex fontSize="sm" color="red.500" justifyContent="space-between">
      <Flex>
        <Text>Rs {price}</Text>
        <Text ml={4}>{discount}% OFF</Text>
      </Flex>
      {deleteItem && (
        <Trash size={16} color="#3e3a6e" weight="bold" onClick={deleteItem} />
      )}
    </Flex>
  </Flex>
);

export default ImageCardContent;
