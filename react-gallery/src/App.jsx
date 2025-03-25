import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'


import { BrowserRouter} from 'react-router-dom'


import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config'

import { Route, Routes, Navigate } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoList from './components/Photolist';
import Photo from './components/Photo';





const myKey=apiKey;


function fetchData(query) {
  fetch(`https://pixabay.com/api/?key=${myKey}&q=${query}&image_type=photo&`)
    .then(response => response.json())
    .then(data => console.log(data));


};
{/*
    / - Home route: when visiting the home route, the user should be redirected to the first static route.
    3 static routes for default topics, for example /cats, /dogs and /computers. These will be used in the navigation component, feel free to customize these topics. These should render the PhotoList component.
    /search/:query - route to handle user search queries. This should render the PhotoList component.
    Use <NavLink> components in your Nav component for the 3 default topics.
    The current route should always be reflected in the URL.
*/}


const App=()=> {





  return (
<>
<Nav/>     

<Routes>

        <Route path='/*' element={<SearchForm />}/>
        <Route index element={<Navigate replace to='/cats'/>}/>
        <Route path='dogs'/>   
        <Route path='/computers'/>   
</Routes>





    
  
    <PhotoList />
    </>

    





  )
}

export default App
