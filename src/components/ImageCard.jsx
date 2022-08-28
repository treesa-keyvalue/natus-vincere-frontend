import React from 'react';
import { Img } from '@chakra-ui/react';

const ImageCard = ({ src, width, height }) => (
  <Img src={src} w={width} h={height} borderRadius="lg" objectFit="cover" />
);

export default ImageCard;
