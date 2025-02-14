import styled from "styled-components"

const Layer=styled.div`
box-sizing: content-box;
margin-inline-start: auto;

margin-inline-end: auto;
/* width: 60ch; */
max-inline-size: 60ch;
${(prps)=>prps.centered && `text-align:center;`}
${(prps)=>prps.centeredCHild && `display:flex;
flex-direction:column;
align-items:center;
` }
`;
const Profile=()=>{
    return(
        <Layer centered centeredCHild>
        <h2>I am the title</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quis ea est dolorum voluptatem, magnam architecto reiciendis quisquam nisi sunt nihil corporis autem a, porro reprehenderit animi labore molestias ad.</p>
        </Layer>
    )
}
export default Profile;