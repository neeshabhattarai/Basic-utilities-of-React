import { ComponentProps, forwardRef, PropsWithoutRef, useEffect, useRef } from "react";

const valueI = {
    WARNING: "warning",
    SUCCESS: "success",
    DANGER: "danger",
  } as const;
type ValueR= keyof typeof valueI | (string &{});
export default ValueR;
type Buttons=Record<"danger" | "submit",ComponentProps<"button">>;
const Button:Buttons={
    "submit":{
        title:"btns",
        // type:"yellow"
},
"danger":{
    title:"btun",
    // type:"green"
},
// "reset":{
//     title:"btun",
//     type:"green"
// }
};
// type Var1=Record<string,string>;
const NewRecord={
    0:"apple",
    1:"ball"
}
type Var3=Record<keyof typeof NewRecord,number>;
const Var4:Var3={
    "0":7,
    "1":4
}
console.log(Var4);
type NewPar=PropsWithoutRef<{
    text:string,
}>
const LableTry=()=>{
    return <NewFn text="tes" /> 
}
const NewFn=({text}:NewPar)=>{
    return<div>{text}</div>
}
export const NewDiv=()=>{
    const ref=useRef<HTMLInputElement>(null);
    useEffect(()=>{
ref.current?.focus();
    },[])
    return <DivCollector ref={ref}/>
}

const DivCollector=forwardRef<HTMLInputElement>(({},ref)=>{
    console.log(ref);
    return <input ref={ref}/>
})
