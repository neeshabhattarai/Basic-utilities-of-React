const items = [
    { id: 1, title: "CEO", name: "John Doe" },
    { id: 2, title: "Manager", name: "Jane Smith" },
    { id: 3, title: "Developer", name: "Alice Johnson" },
    { id: 4, title: "Designer", name: "Bob Brown" }
];

const RenderProp=()=>{
return(<div>
{items.map((val)=>(<ElementWrapper val={val} keyEx={(item)=> item.id} renderProps={(item)=> item.title}/>))}
</div>
)
}
const ElementWrapper=({val,renderProps,keyEx}:{val: { id: number; title: string; name: string };  renderProps: (item: { id: number; title: string; name: string }) => string;
keyEx: (item: { id: number; title: string; name: string }) => number;})=>{
return<div ><h1 key={keyEx(val)}>{renderProps(val)}</h1></div>
}
export default RenderProp;