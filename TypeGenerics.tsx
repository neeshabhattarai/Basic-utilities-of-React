import { ReactNode } from "react"

interface ListInfo<T>{
listed:T[],
render:(row:T)=>ReactNode;
}
const RenderingElement=()=>{
    type product={
        name:string,
        age:number
    }
    const List=[{
        name:"arjhu",
        age:21
    }]
    return <ProductList<product> listed={List} render={((row)=>(<li>{row.name}</li>))}/>
}
const ProductList=<T,>({listed,render}:ListInfo<T>)=>{
    return listed.map(render);
}
export default RenderingElement;