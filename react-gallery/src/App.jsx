import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'


import { BrowserRouter} from 'react-router-dom'


import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config'

import { Route, Routes, Navigate } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import Photo from './components/Photo';


function fetchData(query) {
  fetch(`https://pixabay.com/api/?key=${myKey}&q=${query}&image_type=photo&`)
    .then(response => console.log(response.json()))
    


};



const myKey=apiKey;




{/*
    / - Home route: when visiting the home route, the user should be redirected to the first static route.
    3 static routes for default topics, for example /cats, /dogs and /computers. These will be used in the navigation component, feel free to customize these topics. These should render the PhotoList component.
    /search/:query - route to handle user search queries. This should render the PhotoList component.
    Use <NavLink> components in your Nav component for the 3 default topics.
    The current route should always be reflected in the URL.
*/}


const App=()=> {
  let dogData= fetchData('dogs');
  let catData=fetchData('cats');
  let computerData=fetchData('computers');

  return (
<>
      <Nav />
      <SearchForm/>

<Routes>
        
      

        <Route path='/' element={<PhotoList  /> }/>
        <Route path='/cats' element={<PhotoList data={catData}/>} />
        <Route path='dogs' element={<PhotoList  />}/>  
        <Route path='/computers' element={<PhotoList  />} />   
</Routes>





    
  
    <PhotoList />
    </>

    





  )
}

export default App
