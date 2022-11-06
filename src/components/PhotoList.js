//importing libraries and hooks
import React from "react";
import { useLocation } from 'react-router-dom';
// import axios from "axios";

//importing components 
// import Photo from "./Photo";
// import NotFound from './NotFound';

//importing api key
// import apiKey from '../configure'


const PhotoList = (props) => {
    // const [resultsLoading, setResultsLoading] = useState(false); 
    // const [photoData, setPhotoData] = useState([]);
    let location = useLocation(); 

    const requestedPhrase = location.pathname.slice(1); 

    // const  presetTerm = props.triggerSearchFor; 

    // let searchTerm = presetTerm ? presetTerm : query.searchPhrase; 


    return (
        <>
        {[console.log(requestedPhrase)]}
        </>
    )




    // const lookUpPhotos = () => 

    //     fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=12&extras=url_s&format=json&nojsoncallback=1`)
    //     .then((res) => res.json())
    //     .then ((resData) => {
    //         // setResultsLoading(true); 
    //         setPhotoData(resData.photos.photo)
    //     })
    //     .catch(error => {
    //          console.log('Error parsing and fetching data!', error); 
    //     })
    // }

    // lookUpPhotos()


    // let photos; 

    // if (photoData.length > 0){
    //     photos = photoData.map((photo, index) => {
    //         return( <Photo 
    //         photoInfo={photo}
    //         key = {index}
    //          />)
    //     })
    // } else {
    //     photos = <NotFound />
    // } return (
    //     <ul>{photos}</ul>
    // ); 
}

export default PhotoList;