import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { Grid, GridItem, Flex, Box } from "@chakra-ui/react";
import Header from '../components/Header';

import DraggableElement from "../components/DraggableElement";
import { useCombinationsList } from "../queries/useCombinationsList";
import CombinationsList from "../components/CombinationsList";
import Preview from "../components/Preview";
const lists = ["combinations", "preview"];

const generateListNew = (combinations, selected) => {
  return {
    combinations: combinations?.map((comb) => {
      return { ...comb, prefix: "combinations" };
    }),
    preview: selected?.map((comb) => {
      return { ...comb, prefix: "preview" };
    }),
  };
};

const parseType = (type) => {
  if (type === "shirt" || type === "t-shirt") {
    return "top";
  }
  return type;
};

const Combinations = () => {
  const [elements, setElements] = useState([]);
  const [selected, setSelected] = useState([]);
  let [searchParams] = useSearchParams();
  const selectedItem = JSON.parse(searchParams.get("data"));

  const { data, isLoading, error, isFetching } = useCombinationsList({
    type: parseType(searchParams.get("type")),
    color: searchParams.get("color"),
    gender: searchParams.get("gender"),
  });

  useEffect(() => {
    setSelected(data?.data?.[0]?.combination || []);
    setElements(data?.data);
  }, [data]);

  const onDragEnd = (result) => {
    if (!result.destination || result.destination.droppableId !== "preview") {
      return;
    }
    const listCopy = { ...elements };
    if (result.source.droppableId === "combinations") {
      let elt = null;
      listCopy[result.source.droppableId].map((x, i) => {
        let index = x.combination.findIndex((y) => y.id === result.draggableId);
        if (index > -1) {
          elt = listCopy[result.source.droppableId][i].combination[index];
        }
      });
      listCopy[result.destination.droppableId].splice(
        result.destination.index,
        0,
        elt
      );
    }
    setElements(listCopy);
  };

  const addToPreview = (data) => {
    setSelected(data?.combination || []);
  };

  const deleteItem = (index) => {
    const items = [...selected];
    const id = items.findIndex((item) => item.id === index);
    items.splice(id, 1);
    setSelected(items);
  };

  return (
    // <DragDropContext onDragEnd={onDragEnd}>
    //   <Grid templateColumns="repeat(3, 1fr)">
    //     {lists?.map((listKey) => (
    //       <GridItem colSpan={listKey === "combinations" ? 2 : 1}>
    //         <DraggableElement
    //           elements={elements?.[listKey]}
    //           key={listKey}
    //           prefix={listKey}
    //           addToPreview={addToPreview}
    //           deleteItem={deleteItem}
    //         />
    //       </GridItem>
    //     ))}
    //   </Grid>
    // </DragDropContext>
    <Box px={32}>
      <Header fromHome />
      <Flex pt="88px">
        <CombinationsList
          combinations={elements}
          selectCombination={addToPreview}
        />
        <Preview
          combinations={selected}
          deleteItem={deleteItem}
          selectedItem={selectedItem}
        />
      </Flex>
    </Box>
  );
};

export default Combinations;
