//Importing Libraries, tools and packages needed for app
import React, { Component } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom'; 
import './css/index.css';
import axios from 'axios'; 

//importing components 
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import BuildList from './components/PhotoList';
// import NotFound from './components/NotFound';

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

  triggerSearch = (query = 'dancing') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${query}&per_page=24&extras=url_s&format=json&nojsoncallback=1`)
    .then(res => {
          this.setState({
            photos: res.data.photos.photo, 
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
      <div className='container'>
        <SearchBar onSearch={this.triggerSearch} /> 
        <Nav lookUp={this.triggerSearch} /> 
          <div className="photo-list">
            <h2>Results</h2>
            <div>
            {
              (this.state.loading)
              ? <p>Finding Photos...</p>
              :  <BuildList data={this.state.photos} /> 
            }
            </div>
            {/* <Routes>
              <Route path="/" element={<Navigate to="/dancing" />} />
              <Route
                path="/dancing"
                element={
                <BuildList
                  data={this.state.photos}
                  lookUp={this.triggerSearch}
                />
              }
              />
              <Route
                path="/acting"
                element={
                <BuildList
                  data={this.state.photos}
                  lookUp={this.triggerSearch}
                />
              }
            />
            <Route
                path="/painting"
                element={
                <BuildList
                  data={this.state.photos}
                  lookUp={this.triggerSearch}
                />
              }
            />
            <Route
            path="/search/:query"
            element={
              <BuildList
                data={this.state.photos}
                lookUp={this.triggerSearch}
              />
            }
          />
           <Route path="*" element={<NotFound />} />
            </Routes>
             */}
          </div>

    </div>
    </>
  ); 
  }
}