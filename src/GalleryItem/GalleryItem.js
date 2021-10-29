import { useState } from "react" ; 

function GalleryItem ( props ){
    //const[name, setName]= useState(null);
    const[show, setShow]=useState( true );

    //onClick toggle image 
    const toggleImage = () =>{
        //set show variable to true/false
        setShow (!show);
    }

    //create a variable called likes and set it's initial value to 0
    const[likes, setLikes]=useState(0);

    //create an addLike function 
    const addLike =()=>{
        //on click, add a like 
        setLikes (likes + 1);
    }

    return(
        <div>
            {
                //is the show variable true?
                show?
                // <h1>GalleryItem</h1>
                //if it is true, display the image 
                <img width="500px" src={ props.image.path } onClick={ toggleImage }></img>
                : //true
                //else, display the description 
                <h3 onClick={ toggleImage }>{props.image.description}</h3>
            }
                <button onClick={addLike}>Like</button>
                <h4>Liked by {likes} users</h4>
        </div>
    )
}

export default GalleryItem;

