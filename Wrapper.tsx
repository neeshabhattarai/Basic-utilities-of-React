import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const Wrapper=({label}:{label?:string})=>{
const [dates,setDate]=useState(new Date());
    return <>
    {label && <label>{label}</label>}
    <DatePicker selected={dates} onSelect={(dates)=>dates && setDate(dates)} />
    </>
}
export default Wrapper;