import Axios from "axios";
import { useState } from "react" ; 

function GalleryItem ( props ){
    //const[name, setName]= useState(null);
    const[show, setShow]=useState( true );

    //onClick toggle image 
    const toggleImage = () =>{
        //set show variable to true/false
        setShow (!show);
    }

    //create a variable called likes and set it's initial value to the current number of likes for that image 
    const[likes, setLikes]=useState(props.image.likes);


    //create an addLike function 
    //make an axios put request to update the likes on the server. 
    const updateLikes =()=>{
        //run an axios put request to the URL of /gallery/like/id (where id is set to props.image.id)
        Axios.put(`/gallery/like/${props.image.id}`, props.image)
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
                <img width="500px" src={ props.image.path } onClick={ toggleImage }></img>
                : //true
                //else, display the description 
                <h3 onClick={ toggleImage }>{props.image.description}</h3>
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

