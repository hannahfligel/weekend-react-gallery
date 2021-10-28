import React from 'react';
import './App.css';
import axios from 'axios';
import ImageList from '../../ImageList/ImageList'
import {useEffect, useState} from "react";


function App() {
  //create a const called images and set it's initial value to an empty array, this is where all the images will get stored and then will be able to be passed down via props. 
  //setImages is the function that changes the images variable. 
  const[images, setImages] = useState( [] );


  //get request to get the images gallery.data.js
  const getImages=()=>{
    //make an axios call to /gallery(from server.js) to get the images array from gallery.data.js
    axios.get( '/gallery' ).then((response)=>{
      console.log(response.data);
      //change Images to the images array from the get request (response.data)
      setImages(response.data);
    }).catch((err)=>{
      alert('nope!');
      console.log(err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <button onClick={getImages}>Button</button>
        <ImageList images={ images }/>
        
      </div>
    );

}//end function

export default App;
