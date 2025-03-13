import { useState } from "react"
import TextPan from "./TextPan";

const TextExpand=()=>{
    const [state,setState]=useState(false);
    const dummyText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam repellat perferendis corporis perspiciatis voluptatibus, fugit aut! Est fugiat vitae voluptas, modi sed odit sit. Ipsum accusantium nesciunt voluptates atque consequatur.";
return <div>
    <TextPan id="text" expanded={state} short >
        {dummyText}
    </TextPan>
    <section>
        <button onClick={()=>setState(!state)} >{!state?"open":"close"}</button>
    </section>
</div>
}
export default TextExpand;