import Axios from "axios";
import { useState } from "react" ; 

function GalleryItem ( props ){

    //const[name, setName]= useState(initialValue);
    // name: is what we're called the variable, setName: is the function that changes the value of the const. useState() is the initial value of the variable. 

    //create a const called show and set it's initial value to true in order for the image to display on the page load before the description 
    const[show, setShow]=useState( true );

    //onClick toggle image 
    const toggleImage = () =>{
        //set show variable to false (to be opposite from the useState value on like 10)
        setShow (!show);
    }

    //create a variable called likes and set it's initial value to the current number of likes for that image. At the restart of the server, likes will go back to 0 as set on the gallery.data.
    const[likes, setLikes]=useState(props.imagesSentToGalleryItem.likes);


    //create an addLike function 
    //make an axios put request to update the likes on the server. 
    const updateLikes =()=>{
        //run an axios put request to the URL of /gallery/like/id (where id is set to props.image.id)
        //we need the image.id to update the correct object as each id for each image will be unique.
        Axios.put(`/gallery/like/${props.imagesSentToGalleryItem.id}`)
            .then(response=>{
                console.log(response);
            }).catch(error=>{
                console.log(error);
            });
        //on click, add a like to the existing number of likes (props.image.likes)
        setLikes (likes + 1);
    }

    return(
        <div>
            {
                //is the show variable true?
                show?
                // <h1>GalleryItem</h1>
                //if it is true, display the image 
                // display image by setting the src= props(what we're bringing in from the parent component).image(the object we're brining in through props).path(the specific image's url path).
                <img width="500px" src={ props.imagesSentToGalleryItem.path } onClick={ toggleImage }></img>
                : //true
                //else, display the description 
                <h3 onClick={ toggleImage }>{props.imagesSentToGalleryItem.description}</h3>
            }
                {/* on click, run the update likes function */}
                <button onClick={updateLikes}>Like</button>
                {/* using a turnery operator, conditionally the word like if there is only one like and likes if there is 0 or more than 1 */}
                {/* is likes greater than 1? */}
                {likes===1?
                // if it is, 
                <h4>{likes} like </h4>:
                //else 
                <h4>{likes} likes </h4>
                }
        </div>
    )
}

export default GalleryItem;

