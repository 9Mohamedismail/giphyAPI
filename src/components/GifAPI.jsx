import React, {useState} from "react";
import GifCard from "./GifCard";

// will render the API information, and send that down to GifCard for presentation
function GifAPI() {
    return (  
        <div>
            <GifCard></GifCard>
        </div>
    );
}

export default GifAPI;