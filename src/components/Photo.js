import React from "react";

const Photo = ({info}) => {
    return (
            <li>
                <img 
                src= {`https://farm5.staticflickr.com/${info.server}/${info.id}_${info.secret}.jpg`} 
                alt={info.title}
                 />
            </li>
    )
}

export default Photo; 
