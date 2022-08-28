import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Header from '../components/Header';
import Button from "../components/Button";

import { themes } from "../constants";

const colors = ['#94003C', '#AC607F', '#E4D7DC', '#A89CA1', '#FD798C', '#FEBFCD', '#FE6695'];
const colorsSkin = ['#8D5524', '#C68642', '#E0AC69', '#F1C27D', '#FFDBAC'];
const sizeTop = ['S', 'M', 'L', 'XL', 'XXL'];
const sizeBottom = ['28', '30', '32', '34', '36'];
const sizeShoes = ['6', '7', '8', '9', '10'];

const ColorComponent = ({ background, isSelected, onClick }) => {
  return (
    <li style={{ background: `${background}` }} {...(isSelected && { className: 'active'})} onClick={onClick}></li>
  )
};

const SkinComponent = ({ background, isSelected, onClick }) => {
  return (
    <li style={{ background: `${background}` }} {...(isSelected && { className: 'active'})} onClick={onClick}></li>
  )
};

const SizeTopComponent = ({ size, isSelected, onClick }) => {
  return (
    <li {...(isSelected && { className: 'active'})} onClick={onClick}>{size}</li>
  )
};

const SizeBottomComponent = ({ size, isSelected, onClick }) => {
  return (
    <li {...(isSelected && { className: 'active'})} onClick={onClick}>{size}</li>
  )
};

const SizeShoesComponent = ({ size, isSelected, onClick }) => {
  return (
    <li {...(isSelected && { className: 'active'})} onClick={onClick}>{size}</li>
  )
};

const Themes = () => {
  const [activeClass, setActiveClass] = useState({ color: '#94003C', skin: '#8D5524', sizeTop: 'S', sizeBottom: '28', sizeShoes: '6'  })
  const [wearType, setWearType] = useState('1');

  return (
    <div className="container">
      <Header />
      <main className="theme-main-container">
        <Box fontWeight="600" my={5}>
          CHOOSE YOUR STYLE
        </Box>
        <Flex bg="gray.50" direction="column" p={2} className="activewear-container">
          <Flex>
            {themes.map((theme) => (
              <Flex direction="column" p={2} className={theme.id === wearType ? 'active': ''} onClick={() => setWearType(theme.id)}>
                <Image
                  src={theme.image_link}
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                />
                <Box mt={"5px"}>
                  {theme.name}
                </Box>
              </Flex>
            ))}
            <Flex direction="column" p={2} cursor="pointer" _hover={{ opacity: 0.8 }}>
              <Image src="./images/upload.png" />
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <div className="colorbox-selector selectbox-detail">
            <Box fontWeight="600" my={5}>
              Color
            </Box>
            <ul className="colorbox-list">
              {colors.map(item => (<ColorComponent background={item} onClick={() => setActiveClass({ ...activeClass, color: item})} isSelected={activeClass.color === item}/>))}
            </ul>
          </div>
          <Box>
            <div className="colorbox-selector selectbox-detail">
              <Box fontWeight="600" my={5}>
                Skin Tone
              </Box>
              <ul className="colorbox-list">
              {colorsSkin.map(item => (<SkinComponent background={item} onClick={() => setActiveClass({ ...activeClass, skin: item})} isSelected={activeClass.skin === item}/>))}
              </ul>
            </div>
          </Box>
        </Flex>
        <div>
          <Box fontWeight="600" mt={10} mb={3}>
            Size Chart
          </Box>
          <Flex direction="column" justifyContent="space-between" flexWrap="wrap">
            <Flex justifyContent="space-between" flexWrap="wrap">
              <Box className="sizebox-selector selectbox-detail">
                <Text>Top</Text>
                <ul className="sizebox-list">
                {sizeTop.map(item => (<SizeTopComponent size={item} onClick={() => setActiveClass({ ...activeClass, sizeTop: item})} isSelected={activeClass.sizeTop === item}/>))}
                </ul>
              </Box>
              <Box className="sizebox-selector selectbox-detail">
                <Text>Bottom</Text>
                <ul className="sizebox-list">
                {sizeBottom.map(item => (<SizeBottomComponent size={item} onClick={() => setActiveClass({ ...activeClass, sizeBottom: item})} isSelected={activeClass.sizeBottom === item}/>))}
                </ul>
              </Box>
            </Flex>
            <Box mt={3} className="sizebox-selector selectbox-detail">
              <Text>Shoes</Text>
              <ul className="sizebox-list">
              {sizeShoes.map(item => (<SizeShoesComponent size={item} onClick={() => setActiveClass({ ...activeClass, sizeShoes: item})} isSelected={activeClass.sizeShoes === item}/>))}
              </ul>
            </Box>
          </Flex>
        </div>
        <div className="themepage-btn">
          <Button type="primary" text={'Explore outfits'} />
        </div>
      </main>
    </div>
  );
};

export default Themes;