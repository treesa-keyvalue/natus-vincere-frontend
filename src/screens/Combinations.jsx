import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Flex } from "@chakra-ui/react";
import { useRecoilState } from 'recoil';

import DraggableElement from "../components/DraggableElement";
import { combinations, selectedCombinations } from "../constants";
import { SavedCombinations } from '../states/savedCombinations';

const lists = ["combinations", "preview"];

const generateListNew = (selected) => {
  return {
    combinations: combinations.map(comb => {
      return { ...comb, prefix: 'combinations' }
    }),
    preview: selected?.map(comb => {
      return { ...comb, prefix: 'preview' }
    }),
  }
}

const Combinations = () => {
  const [elements, setElements] = React.useState(generateListNew());
  const [selected, setSelected] = React.useState([]);

  const [savedCombinations, setSavedCombinations] = useRecoilState(SavedCombinations);

  useEffect(() => {
    setSelected(selectedCombinations);
  }, [selectedCombinations]);

  useEffect(() => {
    console.log(44444, generateListNew(selected));
    setElements(generateListNew(selected));
    setSavedCombinations(selected);
  }, [selected]);

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination || result.destination.droppableId !== 'preview') {
      return;
    }
    const listCopy = { ...elements };
    if (result.source.droppableId === 'combinations') {
      let elt = null;
      listCopy[result.source.droppableId].map((x, i) => {
        let index = x.combinations.findIndex(y => y.id === result.draggableId);
        console.log(index);
        if (index > -1) {
          elt = listCopy[result.source.droppableId][i].combinations[index];
        }
      })
      listCopy[result.destination.droppableId].splice(result.destination.index, 0, elt);
    }
    setElements(listCopy);
  };

  const addToPreview = (data) => {
    setSelected(data?.combinations || []);
  };

  const deleteItem = (index) => {
    const items = [...selected];
    const id = items.findIndex(item => item.id === index);
    items.splice(id, 1);
    setSelected(items);
  };

  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex>
          {lists?.map((listKey) => (
            <DraggableElement
              elements={elements?.[listKey]}
              key={listKey}
              prefix={listKey}
              addToPreview={addToPreview}
              deleteItem={deleteItem}
            />
          ))}
        </Flex>
      </DragDropContext>
  );
}

export default Combinations;
