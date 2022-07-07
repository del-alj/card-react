import React, {useState} from "react";

import {
    Left, Input, Right, Div
} from "./style.js";


export const Contor = () => {
    const [value, setValue] = useState(0);
  return (
    <Div>
     <Left onClick={() => {setValue(value > 0 ? value - 1 : value)}}>-</Left>
     <Input defaultValue={0} value={value}/>
     <Right onClick={() => {setValue(value + 1)}}>+</Right>
    </Div>
  );
};
