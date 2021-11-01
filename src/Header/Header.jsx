import { useState } from "react" ; 
import './Header.css'

function Header(props){
    return( 
        <header className="App-header">
            <p className="firstAndLastName">HANNAH FLIGEL</p>
            <h1 className="App-title">Gallery</h1>
            <p className="subHeading">of my life</p>
        </header>
    );
}

export default Header;