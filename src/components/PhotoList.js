//importing libraries and hooks
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

//importing components 
import Photo from "./Photo";
import NotFound from './NotFound';

//importing api key
import apiKey from '../configure';

const PhotoList = (props) => {
    //setting state for search results and photo data 
    const [resultsLoading, setResultsLoading] = useState(false); 
    const [photoData, setPhotoData] = useState([]); 
    let params = useParams(); 

    //setting variables for preset and phrase captured from user
    let searchTerm = params.searchPhrase ? params.searchPhrase : props.triggerSearchFor; 

    //find photos function will render depening on the change in the search term
    useEffect(() => {
        findPhotos(searchTerm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])


const findPhotos = (phrase) => {

    setResultsLoading(true); 

    //axios gets the results from the url, then takes the response and creates a photo component for object that is returned from response 
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

//if page is loading, user friendly message appears or the photoData list is rendered. Otherwise, a not found component will be rendered. 
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