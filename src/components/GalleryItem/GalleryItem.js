import Axios from "axios";
import { useState } from "react" ; 
import Button from '@mui/material/Button';


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

    //create a const called image and give set it's initial val to an object that has all of it's info from the props passed from the database and GalleyList. 
    const[image, setImage ] = useState ( {
        id: props.imagesSentToGalleryItem.id,
        path: props.imagesSentToGalleryItem.path,
        description: props.imagesSentToGalleryItem.description,
        likes: props.imagesSentToGalleryItem.likes
    });

    //create an updateLikes function 
    const updateLikes =()=>{
        //use a spread operator to add a like to the images object 
        setImage({
            ...image, likes: ++image.likes
        });
        //run an axios put request to the URL of /gallery/like/id (where id is set to image.id) to send that information to the server which will send send it to the db to be updated. 
        //anything to the right of the coma inside of the parentheses (images in the case) will be the req.body
        Axios.put(`/gallery/like/${image.id}`, image)
            .then(response=>{
                console.log(response);
            }).catch(error=>{
                console.log(error);
            });
        //on click, add a like to the existing number of likes (props.image.likes)
    }

    //create a delete image function
    const deleteImage = ()=>{
        console.log("deleteImage clicked");
        //run an axios req to delete the image that associated to the specific image id 
        Axios.delete(`/gallery/delete/${image.id}`,{
            //data will be the req.body that hold the id of the image 
            data: {
                id: image.id
            }
            //receive getImagesFunctionToDeleteImage (getImages function from App.jsx) from GalleryList via props in order to be able to automatically refresh the images on DOM. 
        }).then(response=>{
            props.getImagesFunctionToDeleteImage();
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });
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
                {/* using a turnery operator, conditionally render the word "like" if there is only one like and "likes" if there is 0 or more than 1 */}
                {/* is likes greater than 1? */}
                {image.likes===1?
                // if it is, 
                <h4>{image.likes} like </h4>:
                //else 
                <h4>{image.likes} likes </h4>
                }
                {/* add a delete button and an onClick run the delete function */}
                <button onClick={deleteImage}>Delete</button>
        </div>
    )
}

export default GalleryItem;

