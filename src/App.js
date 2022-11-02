//Importing Libraries and packages needed for app
import React, { Component } from 'react';
import './css/index.css';
import axios from 'axios'; 

//importing components 
import Nav from './components/Nav';
import Photo from './components/Photo';
import SearchBar from './components/SearchBar';
import CreateRoutes from './components/Routes';

//importing needed apiKey
import APIKEY from './configure';


export default class App extends Component{
  constructor() {
    super();
    this.state = {
      photos: [], 
      loading: true
    }; 
  } 
  componentDidMount(){
    this.triggerSearch(); 
  }

  triggerSearch = (query ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=apples&per_page=24&extras=url_s&format=json&nojsoncallback=1`)
    .then(res => {
          this.setState({
            photos: res.photos.photo, 
            loading: false
          }); 
    })
    .catch(error => {
      console.log('Error parsing and fetching data!', error); 
    })
  }

  render(){
  return(
    <>
    <SearchBar onSearch={this.triggerSearch} /> 
    <Nav /> 
    <Photo />
    <CreateRoutes /> 
    <button>Click Here</button>
    </>
  ); 
  }
}