import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { Grid, GridItem } from "@chakra-ui/react";

import DraggableElement from "../components/DraggableElement";
import { useCombinationsList } from "../queries/useCombinationsList";

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

const Combinations = () => {
  const [elements, setElements] = useState(generateListNew());
  const [selected, setSelected] = useState([]);
  let [searchParams] = useSearchParams();

  const { data, isLoading, error, isFetching } = useCombinationsList({
    type: searchParams.get("type"),
    color: searchParams.get("color"),
    gender: searchParams.get("gender"),
  });

  useEffect(() => {
    setSelected(data?.data?.[0]?.combination || []);
    setElements(generateListNew(data?.data, data?.data?.[0]?.combination || []));
  }, [data]);

  const onDragEnd = (result) => {
    if (!result.destination || result.destination.droppableId !== "preview") {
      return;
    }
    const listCopy = { ...elements };
    if (result.source.droppableId === "combinations") {
      let elt = null;
      listCopy[result.source.droppableId].map((x, i) => {
        let index = x.combination.findIndex(
          (y) => y.id === result.draggableId
        );
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
    console.log(data);
    setSelected(data?.combination || []);
  };

  const deleteItem = (index) => {
    const items = [...selected];
    const id = items.findIndex((item) => item.id === index);
    items.splice(id, 1);
    setSelected(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid templateColumns="repeat(3, 1fr)">
        {lists?.map((listKey) => (
          <GridItem colSpan={listKey === "combinations" ? 2 : 1}>
            <DraggableElement
              elements={elements?.[listKey]}
              key={listKey}
              prefix={listKey}
              addToPreview={addToPreview}
              deleteItem={deleteItem}
            />
          </GridItem>
        ))}
      </Grid>
    </DragDropContext>
  );
};

export default Combinations;
