import React from "react";
import styled from "styled-components";
const StyledButton=styled.div`
>button{
background-color: blue;
}
a{
    background-color:burlywood ;
    outline-offset:none ;
    outline-style: dashed;
    outline-color: crimson;
    outline-width: 5px;
}
`;

const Buttons=()=>{
    return <>
    <Button as="a">This is the button1</Button>
    <Button>This is the button2</Button>

    </>
}
const Button=({children,as="button",...others}:{children:string,as?:string})=>{

  
return<StyledButton>
{React.createElement(as,others,children)}
</StyledButton>
}
export default Buttons;