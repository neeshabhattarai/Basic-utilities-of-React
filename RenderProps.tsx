import { PropsWithChildren, PropsWithoutRef } from "react";

const items = [
    { id: 1, title: "CEO", name: "John Doe" },
    { id: 2, title: "Manager", name: "Jane Smith" },
    { id: 3, title: "Developer", name: "Alice Johnson" },
    { id: 4, title: "Designer", name: "Bob Brown" }
];
type Element={
    id:number,
    title:string,
    name:string
}
const RenderProp=()=>{
return(<div>
{items.map((val)=>(<ElementWrapper val={val} keyEx={(item)=> item.id} renderProps={(item)=> item.title}/>))}
</div>
)
}
const ElementWrapper=({val,renderProps,keyEx}:{val:Element,renderProps:(item:Element)=>string,keyEx:(item:Element)=>number})=>{
return<div ><h1 key={keyEx(val)}>{renderProps(val)}</h1></div>
}
export default RenderProp;