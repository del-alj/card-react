import styled from "styled-components";

const color = { premium: "#FF7D1B", second: "#ff7d1b0a" };

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: auto;
  max-width: 80em;
  font-size: 18px;
  /* border: 1px solid black; */
  @media (max-width: 768px) {
    flex-direction: column;
    /* height: 30em; */
    min-width: 300px;

    font-size: 15px;
  }

`;

export const SlideDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 500px;
  /* border: 1px solid black; */
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  padding: 0.8em;
  justify-self: center;
  /* align-self: center; */
  text-align: justify;
  @media (max-width: 768px) {
    width: 90%;
    /* height: 60%; */
    padding: 1em;
  }
`;

export const Category = styled.div`
  font-size: 0.8em;
  opacity: 0.8;
  font-weight: 700;
  color: ${color.premium};
`;
export const Title = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  text-align: justify;
`;
export const Text = styled.div`
  font-size: 1em;
  text-align: justify;
`;
export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 7em;
  padding: 0.8em 0;
  > p {
    font-size: 1.2em;
    font-weight: 700;
    margin: 0;
    text-decoration: line-through;
  }
`;
export const DiscountTag = styled.div`
  border: 0.9px solid ${color.premium};
  border-radius: 2px;
  color: ${color.premium};
  font-size: 0.5em;
  font-weight: 700;
  margin: 0;
  align-self: center;
  padding: 0.25em;
  background-color: ${color.second};
`;
export const OldPrice = styled.div`
  font-size: 0.5em;
  font-weight: 700;
  margin: 0;
  text-decoration: line-through;
  opacity: 0.5;
  margin: 5px 0;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
export const OrderRow = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
  padding-top: 2em;
  width: 90%;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    width: 100%;
  }
`;
export const Button = styled.button`
  border: none;
  width: 22em;
  padding: 1em 0;
  background-color: ${color.premium};
  border-radius: 5px;
  color: white;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
`;
