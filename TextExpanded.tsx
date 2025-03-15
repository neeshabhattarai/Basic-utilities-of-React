import React, { memo, PropsWithChildren, useCallback, useMemo, useState } from "react"
import TectPan from "./TextUtilizer";
// import TextPan from "./TextPan";

const TextExpand=()=>{
    const [state,setState]=useState(false);
    const[count,setCount]=useState<number>(0);
    const dummyText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam repellat perferendis corporis perspiciatis voluptatibus, fugit aut! Est fugiat vitae voluptas, modi sed odit sit. Ipsum accusantium nesciunt voluptates atque consequatur.";
    const HandleClick=useCallback(()=>{
        setState(!state)
    },[state]);
    const Handle=useCallback(()=>{
       setCount((c)=>c+1);
    },[count]);
return <div>
    <button onClick={Handle}>{count}</button>
    {/* <TextPan id="text" expanded={state} short >
        {dummyText}
    </TextPan> */}
    <TectPan expanded={state} short >{dummyText}</TectPan>
    <section>
        <button onClick={HandleClick} >{!state?"open":"close"}</button>
    </section>
</div>
}


export default TextExpand;