import Axios from "axios";
import { useState } from "react" ; 
import Button from '@mui/material/Button';
import '../GalleryList/GalleryList.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';



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
        <div className="col-3 galleryCard">
            <div className="cardImage">
                {
                    //is the show variable true?
                    show?
                        // <h1>GalleryItem</h1>
                        //if it is true, display the image 
                        // display image by setting the src= props(what we're bringing in from the parent component).image(the object we're brining in through props).path(the specific image's url path).
                        <img src={ props.imagesSentToGalleryItem.path } onClick={ toggleImage }></img>
                    : //true
                        //else, display the description 
                        <div className="description">
                            <h3 className="description" onClick={ toggleImage }>{props.imagesSentToGalleryItem.description}</h3>
                        </div>
                }
            </div>

            <div className="heartLikeAndDelete">
                <div className="heartLikeCount">
                    {/* on click, run the update likes function */}
                    {image.likes===0?
                    //if it is 
                    <FavoriteIcon className="heartIconGray" onClick={updateLikes}/>:
                    //else
                    <FavoriteIcon className="heartIconRed" onClick={updateLikes}/>
                    }


                    {/* using a turnery operator, conditionally render the word "like" if there is only one like and "likes" if there is 0 or more than 1 */}
                    {/* is likes greater than 1? */}
                    {image.likes===1?
                    // if it is, 
                    <h4 className="likesCount">{image.likes} like </h4>:
                    //else 
                    <h4 className="likesCount">{image.likes} likes </h4>
                    }
                    </div>
                    <div className="deleteIcon">
                        {/* add a delete button and an onClick run the delete function */}
                        <DeleteIcon onClick={deleteImage} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                    </div>
                </div>
                    {/* modal */}
                    {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Action Confirmation</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Are you sure you want to delete the image?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="dontDelete btn btn-secondary" data-bs-dismiss="modal">No</button>
                                    <button onClick={deleteImage} type="button" data-bs-dismiss="modal" class="deleteConfirm btn btn-primary">Yes, delete image</button>
                                </div>
                            </div>
                        </div>
                    </div> */}

            </div>
    )
}

export default GalleryItem;

