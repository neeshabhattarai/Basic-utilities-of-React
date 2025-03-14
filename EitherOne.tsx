import React, { ComponentPropsWithoutRef, PropsWithoutRef, ReactElement } from "react"

type Mains=|
{
    name:string,
    age:number
}|
{
    name?:undefined
    age?:undefined
}
const RenderElement=()=>{
    return<Lables name="re" age={5}/>
}
const Lables=({name,age}:Mains)=>{
return <h1>{name} &{age}</h1>
}
export default RenderElement;

type Button=ComponentPropsWithoutRef<"div">;
const Buttons=({onChange,title,...others}:Button)=>{
    return<div onChange={onChange} title={title} {...others}></div>
}
