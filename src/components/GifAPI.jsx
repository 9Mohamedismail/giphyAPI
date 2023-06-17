import React, {useState} from "react";
import GifCard from "./GifCard";

function GifAPI() {
    return (  
        <div>
            <GifCard></GifCard>// will render the API information, and send that down to GifCard for presentation
        </div>
    );
}

export default GifAPI;