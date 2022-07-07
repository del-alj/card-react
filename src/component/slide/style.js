import styled from "styled-components";
const color = { bg: "#F7F8FD", tx: "#FF7D1B" };
export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  @media (max-width: 768px) {
      /* border: 1px solid black; */
  }
`;
export const Left = styled.button`
  width: 3em;
  background-color: transparent;
  /* border: none; */
  color: ${color.tx};
  font-weight: 600;
  position: absolute;
left:10%;
top: 40%;
`;

export const Right = styled.button`
  width: 3em;
  position: absolute;
right: 10%;
top: 40%;
  background-color: transparent;
  /* border: none; */
  color: ${color.tx};
  font-weight: 600;
`;

export const Img = styled.div`
  display: flex;
  width: 70%;
  height: 70%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src ?? props.src});
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const ListImg = styled.div`
  display: flex;
  width: 70%;
  height: 20%;
  /* border: 1px solid black; */
@media (max-width: 768px) {
  display: none;
}
`;

export const ImgItem = styled.div`
  width: 20%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src ?? props.src});
  border-radius: 5px;
  margin: 0 5px;
  box-sizing: border-box;
  &:active {
    border: 2px solid ${color.tx};
  }
`;
