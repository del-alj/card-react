import React, { useState } from "react";
import { Div, Img, ListImg, ImgItem, Left, Right } from "./style.js";
import angle from "./angle.png";
import { Contor } from "../../component/contor/index";
const img = [
  "https://i.pinimg.com/564x/70/47/9e/70479e82cd530d08b750df0c08de7773.jpg",
  "https://i.pinimg.com/236x/9f/a5/17/9fa517409786ee09eae2515b94c7def4.jpg"
];

export const Slide = () => {
  const [value, setValue] = useState(img[0]);
  const [i, setI] =  useState(0);
  const handelClick = (e, index) => {
    setValue(img[index]);
  };
  
  const handelClickLeft = () => {
    const temp = i > 0 ? i - 1 : img.length - 1;
    setI(temp);
    setValue(img[temp]);
  };

  const handelClickRight = () => {
    const temp = i < img.length - 1 ? i + 1 : 0;
    setI(temp);
    setValue(img[temp]);
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
      <Left onClick={handelClickLeft}><img src={angle} /></Left>
      <Right onClick={handelClickRight}><img src={angle} /></Right>
    </Div>
  );
};
