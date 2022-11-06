//Importing Libraries, tools and packages needed for app
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'; 

//importing components 
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';


const App = () => {

return (
  <>
  <div className='container'>
  <SearchBar /> 
  <Nav />
  <div className="photo-list">
    <h2>Results</h2>
  <Routes>
    <Route path="/" element={<Navigate to="/dancing" />}/>
    <Route path="/dancing" element={<PhotoList triggerSearchFor="dancing"  />} />
    <Route path="/painting" element={<PhotoList triggerSearchFor="painting" />} />
    <Route path="/acting" element={<PhotoList triggerSearchFor="acting" />} />
    <Route path="/search/:searchPhrase" element={<PhotoList />} /> 
    <Route path="*" element={<NotFound />} />
  </Routes>
  </div>
</div>
</>
); 

}

export default App; 



// export default class App extends Component{
//   constructor() {
//     super();
//     this.state = { 
//       photos: [], 
//       loading: true
//     }; 
//   } 
//   componentDidMount(){
//     this.triggerSearch(); 
//   }

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
//   render(){
//   return(
//     <>
//       <div className='container'>
//         <SearchBar onSearch={this.triggerSearch} /> 
//         <Nav lookUp={this.triggerSearch} /> 
//           <div className="photo-list">
//             <h2>Results</h2>
//             {
//               (this.state.loading)
//               ? <p>Finding Photos...</p>
//               :  <PhotoList data={this.state.photos} /> 
//             }
//             <Routes>
//               <Route path="/" element={<Navigate to="/dancing" />}/>
//               <Route path="/dancing" element={<PhotoList data="dancing" search={this.triggerSearch}  />} />
//               <Route path="/painting" element={<PhotoList data="painting" search={this.triggerSearch} />} />
//               <Route path="/acting" element={<PhotoList data="acting" search={this.triggerSearch} />} />
//               <Route path="/search/:searchWord" element={<PhotoList search={this.triggerSearch} />} /> 
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>

//     </div>
//     </>
//   ); 
// }
// }
