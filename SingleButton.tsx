import "./Styles.css";
type ButtonProps={
    children:string
}
type PrimaryBtn={
    primary:boolean,
    secondary?:never
}
type SecondaryBtn={
    primary?:never,
    secondary:boolean
}
const className=(classes:{[key:string]:boolean}):string=>{
let classNames="";
for(const [key,value] of Object.entries(classes)){
    if(value)classNames+=key+" ";
}
return classNames.trim();
}

const Button=({children,primary=false,secondary=false}:ButtonProps & (PrimaryBtn | SecondaryBtn))=>{
    const classes=className({primary,secondary});
    return<button className={classes}>{children}</button>
}
export default Button;