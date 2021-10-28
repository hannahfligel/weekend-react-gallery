import { useState } from "react" ; 

function GalleryItem ( props ){
    //const[name, setName]= useState(null);
    const[show, setShow]=useState( true );

    const toggleImage = () =>{
        setShow (!show);
    }

    return(
        <div>
            {
                show?
                // <h1>GalleryItem</h1>
                <img width="500px" src={ props.image.path } onClick={ toggleImage }></img>: //true
                <h1 onClick={ toggleImage }>{props.image.description}</h1>
            }
        </div>
    )
}

export default GalleryItem;

