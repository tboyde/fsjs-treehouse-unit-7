import React from "react";

const Photo = ({photo, key}) => {
    return (
            <li>
                <img 
                key={photo.key}
                src= {`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                alt={photo.title}
                 />
            </li>
    )
}

export default Photo; 
