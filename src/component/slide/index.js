import React, { useState } from "react";

import { Div, Img, ListImg, ImgItem, Left, Right } from "./style.js";

import { Contor } from "../../component/contor/index";
const img = [
  "https://i.pinimg.com/564x/70/47/9e/70479e82cd530d08b750df0c08de7773.jpg",
  "https://i.pinimg.com/236x/9f/a5/17/9fa517409786ee09eae2515b94c7def4.jpg"
];

export const Slide = () => {
  const [value, setValue] = useState(img[0]);
  const handelClick = (e, index) => {
    setValue(img[index]);
  };

  return (
    <Div>
      <Img src={value}></Img>
      <ListImg>
        {img.map((el, index) => {
          return (
            <ImgItem
              onClick={(e) => {
                handelClick(e, index);
              }}
              src={el}
              key={index}
            />
          );
        })}
      </ListImg>
      {/* <Left>`\`</Left>
      <Right>`/`</Right> */}
    </Div>
  );
};
