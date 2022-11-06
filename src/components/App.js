//Importing Libraries, tools and packages needed for app
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'; 

//importing components 
import Nav from './Nav';
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';
import PageNotFound from './404Error';


const App = () => {


return (
  <>
  <div className='container'>
    <SearchBar /> 
    <Nav />
    <div className="photo-list">
    {/* {Routes below are created to render the navigation items, returned photos from search results, and for 404 errors} */}
      <Routes>
        <Route path="/" element={<Navigate to="/dancing" />}/>
        <Route path="/dancing" element={<PhotoList triggerSearchFor="dancing"  />} />
        <Route path="/painting" element={<PhotoList triggerSearchFor="painting" />} />
        <Route path="/acting" element={<PhotoList triggerSearchFor="acting" />} />
        <Route path="/search/:searchPhrase" element={<PhotoList />} /> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
</div>
</>
      ); 

}

export default App; 