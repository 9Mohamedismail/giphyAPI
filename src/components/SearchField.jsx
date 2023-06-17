import React, {useState} from "react";
import GifAPI from "./GifCard";

// will send down information to the API from search field as a prop
function SearchField() {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        const input = document.getElementById('input').value;
        setSearch(input);
    }
    
    return (  
        <div>
            <input type="text" id="input"></input>
            <button onClick={handleSearch}/>
            <GifAPI search={search}></GifAPI>
        </div>
    );
}

export default SearchField;