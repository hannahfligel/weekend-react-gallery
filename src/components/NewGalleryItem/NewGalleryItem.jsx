import { useState } from "react" ; 
import axios from "axios";
import './NewGalleryItem.css';
import CancelIcon from '@mui/icons-material/Cancel';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


//props is the object the contains the images array from App.jsx
function NewGalleryItem(props) {
    //const[name, setName]= useState(null);

    //create a const called url and set it's initial value to an empty string. This is where the url that the user typed in will be stored.
    const[url, setUrl] = useState( '' );
    //create a const called description and set it's initial value to an empty string. This is where the description that the user typed will be stored. 
    const[description, setDescription] = useState( '' );

    //create an function that will capture the input event for the url 
    const urlChange = (event) =>{
        // console.log( 'in urlChange', event.target.value );
        //event(the argument or what is physically being typed), target(the input field itself), value(the value that is currently in the input field) 
        //set the URL variable to be the typed input
        setUrl( event.target.value);
    }

    //create an function that will capture the input event for the description
    const descriptionChange = (event) =>{
        // console.log( 'in descriptionChange', event.target.value );
        //set the description variable to be the typed input
        setDescription( event.target.value);
    }

    const uploadImage = ()=>{
        if(url === '' || description === ''){
            alert("One or more inputs are missing")
        }
        else{
            //create an object called imageToUpload and give it the keys of url and description and set their values to the url and description consts that were created above on line 11 & 13. 
            let imageToUpload={
                url: url,
                description: description
            }
            //create an axios post req to /gallery and send it the imageToUpload object 
            axios.post('/gallery', imageToUpload
                ).then(function (response) {
                    //run the get.req that was passed through props from app.jsx
                    //the reasoning for this is so that you don;t have to reload the page manually to display the new uploaded image. 
                    props.getImagesFunctionSentToNewGalleyItem();
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(imageToUpload);
        }
    }

    const[show, setShow] = useState (true);

    const showUpload=()=>{
        setShow(false);
    }

    const hideUpload=()=>{
        setShow(true);
    }

    return(

        <div className="uploadBackground">
            {
            show?
            <div className="showUploadButton">
                <AddAPhotoIcon className="addAPhotoIcon" onClick={showUpload}>add photo</AddAPhotoIcon>
                </div>
                :
                <div className="hideUploadButton" className="uploadForm">
                    <form className= "label-background">
                        <h2 className="addImageTitle">ADD AN IMAGE</h2>
                        <hr/>
                        <label htmlFor="urlInput" className="urlInput form-label ">
                            IMAGE LINK:
                            {/* creating an input for the image URL, use an onChange method to capture the event of what the user is inputting */}
                            {/* onChange fires off the urlChange function */}
                            <input id="urlInput" className="form-control" placeholder="enter url..." onChange={ (event)=>{ urlChange (event) } }></input>
                        </label>
                        <label htmlFor="descriptionInput" className="descriptionInput form-label">
                            IMAGE DESCRIPTION:
                            {/* creating an input for the image description, use an onChange method to capture the event of what the user is inputting */}
                            {/* onChange fires off the descriptionChange function */}
                            <input id="descriptionInput" className="form-control" placeholder="enter description..." onChange={ (event)=>{ descriptionChange (event) } }></input>
                        </label>
                            <button className="uploadButton btn btn-light" onClick={uploadImage}>Upload</button>
                    </form>
                <div className="hideUploadButton">
                    <CancelIcon className="closeIcon" onClick={hideUpload}>Close</CancelIcon>
                </div>
            </div>
            }

        </div>
    );
}



//client side post

export default NewGalleryItem;
