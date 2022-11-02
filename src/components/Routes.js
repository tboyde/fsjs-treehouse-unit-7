import React from "react";
import Photo from "./Photo";
import NotFound from './NotFound'
import {Router, Routes, Route, Navigate} from 'react-router-dom'; 

const CreateRoutes = () => {
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/Dancing"/>} />
            <Route path="/cities" element={<Photo data="cities" />} />
            <Route path="/cafes" element={<Photo data="cafes" />} />
            <Route path="/computers" element={<Photo data="computers" />} />
            <Route path="/search/:keyword" element={<Photo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    ); 

}

export default CreateRoutes; 