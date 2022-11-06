import React from "react";

const Photo = ({photoInfo}) => {
    return (
            <li>
                <img 
                key={photoInfo.index}
                src= {`https://farm5.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}.jpg`} 
                alt={photoInfo.title}
                 />
            </li>
    )
}

export default Photo; 
