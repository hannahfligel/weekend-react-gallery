import { useState } from "react" ; 
import GalleryItem from '../GalleryItem/GalleryItem';

//props is the object the contains the images array from App.jsx
function GalleryList ( props ){
    //const[name, setName]= useState(null);
    return(
        <div>
            <h1>ImageList</h1>
            {/* map/loop through images array passes through as props. Then, for every individual image (it's url, description, name, etc..) in the array, run the GalleryItem component to pass the image down */}
            {/* key={image.id} is there to give a unique identifier to each mapped component */}
            { props.imagesSentToGalleryList.map( image=>(< GalleryItem imagesSentToGalleryItem={image} key={image.id} />))}
        </div>
    )
}

export default GalleryList;

