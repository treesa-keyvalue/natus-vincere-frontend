import React from 'react';
import { Button as Btn } from '@chakra-ui/react';

const Button = ({ width, type, text, onClick }) => {
  let style= {};
  if (type === 'primary') {
    style = {
      bg: '#EF4F72',
      color: 'white',
      height: '44px',
      fontSize: 'sm'
    }
  } else {
    style = {
      bg: '#DBE0E7',
      color: 'black',
      height: '44px',
      fontSize: 'sm'
    }
  }

  return  <Btn {...style} width={width} textTransform="uppercase" _hover={{ opacity: 0.8}} onClick={onClick}>{text}</Btn>;
}
 

export default Button;
