import { useState } from "react" ; 
import Images from '../Images/Images';

function ImageList ( props ){
    //const[name, setName]= useState(null);
    return(
        <div>
            <h1>ImageList</h1>
            <Images />
            {/* map/loop through images array passes through as props. Then, for every individual image (it's url, description, name, etc..) in the array, run the Images component to pass the image down */}
            { props.images.map( image=>(<Images image={image}/> ) )}

        </div>
    )
}

export default ImageList;

