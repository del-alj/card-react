import React from "react";

import {
  Div,
  Title,
  Text,
  Button,
  Price,
  OldPrice,
  Img,
  DivParagraphe,
  PricDiv,
  MiniTitle
} from "./style.js";
const img =
  "https://i.pinimg.com/564x/70/47/9e/70479e82cd530d08b750df0c08de7773.jpg";
const data = {
  category: "Shoes",
  title: "SODA Malia Round Toe Stacked Lug Heel Lace Up Ankle Booties",
  text: "Soda is a fashion shoe brand based in California. Soda offers a wide array of styles including heels, wedges, flats, shoes, sandals and boots,",
  price: 54.99,
  oldprice: 99.99,
};

export const Card = () => {
  return (
    <>
      <Div>
        <Img src={img} />
        <DivParagraphe>
          <MiniTitle>{data.category}</MiniTitle>
          <Title>{data.title}</Title>
          <Text>{data.text}</Text>
          <PricDiv>
            <Price>${data.price}</Price>
            <OldPrice>${data.oldprice}</OldPrice>
          </PricDiv>
          <Button>Add to Cart</Button>
        </DivParagraphe>
      </Div>
    </>
  );
};
