import React from "react";

import {
  Div,
  SlideDiv,
  InfoDiv,
  Category,
  Title,
  Text,
  PriceDiv,
  Price,
  DiscountTag,
  OldPrice,
  OrderRow,
  Button
} from "./style.js";

import { Contor } from "../../component/contor/index";
import {Slide} from "../../component/slide/index";
const img = [
  "https://i.pinimg.com/564x/70/47/9e/70479e82cd530d08b750df0c08de7773.jpg",
  "https://i.pinimg.com/236x/9f/a5/17/9fa517409786ee09eae2515b94c7def4.jpg"
];
const data = {
  category: "Shoes",
  title: "SODA Malia Round Toe Stacked Lug Heel Lace Up Ankle Booties",
  text: "Soda is a fashion shoe brand based in California. Soda offers a wide array of styles including heels, wedges, flats, shoes, sandals and boots,",
  price: 54.99,
  oldprice: 99.99,
  discount: 50
};

export const Product = () => {
  return (
    <>
      <Div>
        <SlideDiv>
          <Slide/>
        </SlideDiv>
        <InfoDiv>
          <Category>{data.category}</Category>
          <Title>{data.title}</Title>
          <Text>{data.text}</Text>
          <PriceDiv>
            <Price>
              <p>${data.price}</p>
              <DiscountTag>{data.discount}%</DiscountTag>
            </Price>
            <OldPrice>${data.oldprice}</OldPrice>
          </PriceDiv>
          <OrderRow>
            <Contor />
            <Button>Add to cart</Button>
          </OrderRow>
        </InfoDiv>
      </Div>
    </>
  );
};
