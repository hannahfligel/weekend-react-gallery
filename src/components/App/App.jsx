import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../../GalleryList/GalleryList'
import {useEffect, useState} from "react";
import NewGalleryItem from '../../NewGalleryItem/NewGalleryItem';
import Header from '../../Header/Header';


function App() {
  //create a const called images and set it's initial value to an empty array, this is where all the images will get stored and then will be able to be passed down via props.
  //setImages is the function that changes the images variable. 
  const[images, setImages] = useState( [] );

  //useEffect displays everything on DOM at page load 
  useEffect( ()=>{
    console.log( 'component loaded' );
    getImages();
  //[] as long as it's empty run this
},[]);

  //get request to get the array of images and their data from the /gallery route (in gallery.data.js)
  const getImages=()=>{
    //make an axios call to /gallery(from server.js) to get the images array from gallery.data.js
    axios.get( '/gallery' ).then((response)=>{
      console.log(response.data);
      //change the images variable value from an empty array (or whatever it's initial val is) to the images array from the get request (response.data) (in gallery.data.js)
      setImages(response.data);
    }).catch((err)=>{
      alert('nope!');
      console.log(err);
    })
  }

    return (
      <div className="App">
        <Header />
        {/* bring in the NewGalleryItem component and send it the getImages function */}
        <NewGalleryItem getImagesFunctionSentToNewGalleyItem={ getImages }/>
        {/* button i'll use later */}
        {/* <a href="#!" className="button" data-micron="squeeze">Squeeze</a> */}

        {/* GalleryList is the entire gallery of images. */}
        {/* Bring in GalleryList component to then send the images variable from line 11 to it via props */}
        {/* Being in GalleryList component to then send the getImages function to when to it via props */}
        <GalleryList imagesSentToGalleryList={ images } getImagesFunctionToDeleteImage={ getImages }/>
      </div>
    );

}//end function

export default App;
