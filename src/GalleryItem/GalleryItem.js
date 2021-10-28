import { useState } from "react" ; 

function GalleryItem ( props ){
    //const[name, setName]= useState(null);
    return(
        <div>
            <h1>GalleryItem</h1>
            <img width="500px" src={props.image.path}></img>
        </div>
    )
}

export default GalleryItem;

