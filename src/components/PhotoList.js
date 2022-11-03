import React from "react";
import Photo from "./Photo";
import NotFound from './NotFound';

const PhotoList = (props) => {
    const generatedPhotos = props.data; 
    let photos; 
    //if results are greater than zero, this function maps the data from the API
    if (generatedPhotos.length > 0){
        photos = generatedPhotos.map((pic, index) => 
            <Photo 
                id={pic.id}
                server={pic.server}
                secret={pic.secret}
                title={pic.title}
                key={index + 1}
            />
            )
    } else {
        photos = <NotFound /> 
    }
    return(
        <ul>{photos}</ul>
    ); 
}

export default PhotoList;