import React, {useState} from "react";
import GifAPI from "./GifCard";

function SearchField() {
    return (  
        <GifAPI></GifAPI> // will send down information to the API from search field as a prop
    );
}

export default SearchField;