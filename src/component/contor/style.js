import styled from "styled-components";
const color = { bg: "#F7F8FD", tx:"#FF7D1B" };
export const Div = styled.div`
display: flex;
background-color: ${color.bg};
width: 30%;
padding: 0.8em 0;
justify-content: space-between;
border-radius: 5px;
margin: 0 10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
@media (max-width: 768px) {
    width: 293px;
    margin: 10px 0;

  }
`;
export const Left = styled.button`
width: 3em;
background-color: transparent;
border: none;
color: ${color.tx};
font-weight: 600;
`;
export const Input = styled.input`
width: 3em;
background-color: transparent;
border: none;
text-align: center;
font-weight: 600;
`;
export const Right = styled.button`
width: 3em;
background-color: transparent;
border: none;
color: ${color.tx};
font-weight: 600;
`;
