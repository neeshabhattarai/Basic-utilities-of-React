import { ComponentPropsWithoutRef, JSX } from "react"

type ChildrenProp={
    children:string
} & ComponentPropsWithoutRef<"div">;
type PropswithSh=ChildrenProp & {expanded?:boolean ,short:true};
type PropswithNo=ChildrenProp & {short?:false};
const TextModiifer=({text,length=50}:{text:string,length?:number}):string=>{
    const TextMo=text.slice(0,length)+"...";
    return TextMo;
}

function TextPan(props:PropswithNo ):JSX.Element;
function TextPan(props:PropswithSh):JSX.Element;
function TextPan(props:ChildrenProp &{expanded?:boolean,short?:boolean}){
const {children:text,expanded=false,short=false,...others}=props;
const ShortenText=short && !expanded;
const TextSLicer=ShortenText?TextModiifer({text}):text;
    return (<div {...others}>{TextSLicer}</div>)
}
export default TextPan;