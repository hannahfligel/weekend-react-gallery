import { useState } from "react" ; 
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

//props is the object the contains the images array from App.jsx
function GalleryList ( props ){
    //const[name, setName]= useState(null);
    return(
    <div className="gallerySection">
        <div className="container">
            {/* map/loop through images array passes through as props. Then, for every individual image (it's url, description, name, etc..) in the array, run the GalleryItem component to pass the image down */}
            {/* key={image.id} is there to give a unique identifier to each mapped component */}
            {/* send then the getImagesFunctionToDeleteImage via props to GalleryItem  */}
            <div className="galleryContainer">
            { props.imagesSentToGalleryList.map( image=>(< GalleryItem imagesSentToGalleryItem={image} key={image.id}  getImagesFunctionToDeleteImage={ props.getImagesFunctionToDeleteImage }/>))}
            </div>
        </div>
    </div>
    )
}

export default GalleryList;

