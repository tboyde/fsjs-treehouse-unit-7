//importing libraries and hooks
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

//importing components 
// import Photo from "./Photo";
// import NotFound from './NotFound';

//importing api key
import APIKEY from '../configure'

const PhotoList = (props) => {

    const [resultsLoading, setResultsLoading] = useState(false); 
    const [photoData, setPhotoData] = useState([]);


    const setSearchTerm = () => {

        let searchTerm; 
        let presetTerm = props.triggerSearchFor; 
        let query = useParams(); 

        if (presetTerm){
            return searchTerm = presetTerm; 
        } else if (query.searchPhrase) {
            return searchTerm = query.searchPhrase; 
        } else {
            return searchTerm = 'dancing'; 
        }
    }
    
    const findPhotos = () => {

        setSearchTerm(); 

        lookUpPhotos = () => {
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${searchTerm}&per_page=12&extras=url_s&format=json&nojsoncallback=1`)
            .then (res => {
                setResultsLoading(true); 
                setPhotoData(res.data.photos.photo)
            })


        }



//   triggerSearch = (query ='dancing') => {
//     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${query}&per_page=12&extras=url_s&format=json&nojsoncallback=1`)
//     .then(res => {
//           this.setState({
//             photos: res.data.photos.photo, 
//             loading: false
//           }); 
//     })
//     .catch(error => {
//       console.log('Error parsing and fetching data!', error); 
//     })
//   }


    }







    // //if results are greater than zero, this function maps the data from the API
    // if (generatedPhotos.length > 0){
    //     photos = generatedPhotos.map((pic, index) => 
    //         <Photo 
    //             id={pic.id}
    //             server={pic.server}
    //             secret={pic.secret}
    //             title={pic.title}
    //             key={index + 1}
    //         />
    //         )
    // } else {
    //     photos = <NotFound /> 
    // }
    // return(
    //     <ul>{photos}</ul>
    // ); 
}

export default PhotoList;