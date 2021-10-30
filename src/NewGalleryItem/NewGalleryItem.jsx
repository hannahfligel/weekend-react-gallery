import { useState } from "react" ; 

//props is the object the contains the images array from App.jsx
function NewGalleryItem() {
    //const[name, setName]= useState(null);
    return(
        <div>
            <input placeholder="url"></input>
            <input placeholder="description"></input>
            <button>upload</button>
        </div>
    );
}



//client side post

export default NewGalleryItem;
