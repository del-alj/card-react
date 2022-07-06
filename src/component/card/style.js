import styled from "styled-components";

const color = {
white : "#FFFFFF",
green: "#3F8068",
}
const radius = "10px";


export const Div = styled.div`
display: flex;
flex-direction: row;
background-color: ${color.white};
border-radius: ${radius};
/* border: 1px solid black; */
width: 30em;
min-width: 222px;
min-height: 20em;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
@media (max-width: 425px) {
    flex-direction: column;
    height: 30em;
}
`;
export const MiniTitle = styled.p`
font-size: 0.8em;
font-family: 'Times New Roman', Times, serif;
text-align: "left";
opacity: 0.5;
margin:2px 0px ;

`;
export const Title = styled.p`
font-size: 1.5em;
font-family: 'Times New Roman', Times, serif;
font-weight: 600;
margin: 0;
text-align: "left";


`;
export const Text = styled.p`
font-size: 0.8em;
font-family: 'Times New Roman', Times, serif;
/* text-align: "left"; */
text-align: justify;
min-height: 5em;
max-height: 120px;
/* overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; */
`;
export const Button = styled.button`
border: none;
border-radius: 5px;
background-color: ${color.green};
color: ${color.white};
width: 80%;
/* height: 5em; */
padding: 10px 0;
margin: 1em;
align-self: center;
font-weight: 500;
:active {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
}
`;
export const Price = styled.p`
font-size: 1.5em;
font-family: 'Times New Roman', Times, serif;
font-weight: 600;
margin: 0;
text-align: "left";
color: ${color.green};
`;
export const OldPrice = styled.p`
font-size: 0.7em;
font-family: 'Times New Roman', Times, serif;
font-weight: 600;
margin: 0;
opacity: 0.5;
text-decoration: line-through;
`;
export const Img = styled.div`
width: 50%;
background-image: url(${(props) => (props.src ?? props.src)});
background-size: cover;
background-position: center;
border-radius: ${radius} 0 0 ${radius};
@media (max-width: 425px) {
    width: 100%;
    height: 40%;
    border-radius: ${radius}  ${radius} 0 0;
}
`;

export const DivParagraphe = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 1em;
@media (max-width: 425px) {
    width: 90%;
    height: 40%;
    padding: 0.8em;
    
}
@media (max-width: 342px) {
    height: 60%;
}
`;

export const PricDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`