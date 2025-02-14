import styled from "styled-components";
import fontSizes, { Justify } from "../Buttons/StyledSpace";


const Pad=styled.div`
padding: ${(props)=>{
return [].concat(props.paddings).map((val)=>fontSizes[val]).join(" ");
}};
border-bottom:${({borders})=>borders};
`;
const Com=({as:As,props})=>{
    return<As {...props}/>
}
// const Styles=styled.button`
// display: flex;
// justify-content:${(props)=>Justify[props.justify]};
// align-items:${(props)=>Justify[props.justify]};

// `;
const Buttons=styled(Pad).attrs({paddings:["ss","sp"]})`
display:flex;
width:5rem;
justify-content:center;
justify-self:center;
background-color:red;

border-radius:var(--radius);
`;
const Layer=styled.div`
--radius:0.5rem 0.5rem;
display:flex;
flex-direction: column;
background-image:linear-gradient(to left bottom, #ffd6ff,#e0aaff,#74c69d,#eeef20,#ffc2d1);
border-radius: var(--radius);
width: 20rem;
border:2px solid #ea9ab2;

`;
const H2=styled.h2`
margin:0;
padding:0;
`;
const H3=styled.h3`
color:#8b8788a7;
font-weight: 350;
`;
const Hl=styled.h1`
font-weight:400;
font-size:${(prop)=>prop.font};
`;
const Card=()=>{
return(
    <Layer>
        <Pad paddings={"base"} borders="2px solid red">
            <H2>Gift Card</H2>
            <H3>This is one of our gift cards you can buy.</H3>
            <Hl font={"1.8rem"}>$25.99</Hl>
            <Buttons >Buy</Buttons>
            
        </Pad>
        <Pad paddings={"base"}>
            <p>Includes:</p>
            <ul>
                <li>This is inclusion number 1</li>
                <li>This is inclusion number 2 which comes after inclusion number 1</li>
                <li>This is inclusion number 3</li>
            </ul>
        </Pad>

    </Layer>
)
}
export default Card;