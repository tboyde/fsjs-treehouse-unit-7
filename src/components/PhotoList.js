//importing libraries and hooks
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

//importing components 
import Photo from "./Photo";
import NotFound from './NotFound';

//importing api key
import apiKey from '../configure'

const PhotoList = (props) => {
    //setting state for results and photo data that will be passed to the photo cards 
    const [resultsLoading, setResultsLoading] = useState(false); 
    const [photoData, setPhotoData] = useState([]); 
    let params = useParams(); 

    //setting variables for preset and phrase captured from user
    let searchTerm = params.searchPhrase ? params.searchPhrase : props.triggerSearchFor; 

    useEffect(() => {
        findPhotos(searchTerm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])


const findPhotos = (phrase) => {

    setResultsLoading(true); 

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${phrase}&per_page=24&extras=url_s&format=json&nojsoncallback=1`)
    .then(response => {
        let photos = response.data.photos.photo.map(photo =>{
            return <Photo 
                key={photo.id}
                info={photo}
            />
        })
        setPhotoData(photos)
    })
        .catch(error => console.log('Error parsing and fetching data!', error))
        .finally(()=> setResultsLoading(false))
}

// const checkStatus = (res) => {
//     if (res.ok){
//         return Promise.resolve(res)
//     } else {
//         return Promise.reject(new Error(res.statusText))
//     }
// }


if (resultsLoading){
    return (
        <p>{`Finding Photos of ${searchTerm.toUpperCase()}...`}</p>
    )
} else if (!resultsLoading){
    return(
        <>
        <h2>{`RESULTS FOUND FOR: ${searchTerm.toUpperCase()}`}</h2>
        <ul>{photoData}</ul>
        </>
    )
} else {
    return(
        <NotFound/>
    )
}

}

export default PhotoList;