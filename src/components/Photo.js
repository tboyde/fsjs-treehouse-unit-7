import React from "react";


const Photo = ({server, secret, id, title, key}) => {
    return (
            <li>
                <img 
                key={key}
                src= {`https://farm5.staticflickr.com/${server}/${id}_${secret}.jpg`} 
                alt={title}
                 />
            </li>
    )
}

export default Photo; 
