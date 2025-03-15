import { memo, useCallback } from "react";


const TectPan=memo((props:{children:string} &{expanded?:boolean,short?:boolean})=>{
    
    const {children:text,expanded=false,short=false,...others}=props;
    const TextModiifer=useCallback((length?:number):string=>{
        console.log("rerender")
        const TextMo=text.slice(0,length)+"...";
        console.log(typeof TextMo)
        return TextMo;
    },[]);
    const ShortenText=short && !expanded;
const TextSLicer=ShortenText?TextModiifer(50):text;
    return (<div {...others}>{TextSLicer}</div>)
})
export default TectPan