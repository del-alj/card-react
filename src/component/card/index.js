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
  title: "Gabrielle Essence Eau De Parfum",
  text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  price: 149.99,
  oldprice: 169.99,
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
