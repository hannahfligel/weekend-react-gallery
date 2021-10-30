import { useState } from "react" ; 

//props is the object the contains the images array from App.jsx
function NewGalleryItem() {
    //const[name, setName]= useState(null);

    //create a const called url and set it's initial value to an empty string. This is where the url that the user typed in will be stored.
    const[url, setUrl] = useState( '' );
    //create a const called description and set it's initial value to an empty string. This is where the description that the user typed will be stored. 
    const[description, setDescription] = useState( '' );

    //create an function that will capture the input event for the url 
    const urlChange = (event) =>{
        console.log( 'in urlChange', event.target.value );
        //event(the argument or what is physically being typed), target(the input field itself), value(the value that is currently in the input field) 
        //set the URL variable to be the typed input
        setUrl( event.target.value);
    }

    //create an function that will capture the input event for the description
    const descriptionChange = (event) =>{
        console.log( 'in descriptionChange', event.target.value );
        setDescription( event.target.value);
    }

    return(
        <div>
            {/* creating an input for the image URL, use an onChange method to capture the event of what the user is inputting */}
            {/* onChange fires off the urlChange function */}
            <input placeholder="url" onChange={ (event)=>{ urlChange (event) } }></input>
            {/* creating an input for the image description, use an onChange method to capture the event of what the user is inputting */}
            {/* onChange fires off the descriptionChange function */}
            <input placeholder="description" onChange={ (event)=>{ descriptionChange (event) } }></input>
            <button>upload</button>
        </div>
    );
}



//client side post

export default NewGalleryItem;
