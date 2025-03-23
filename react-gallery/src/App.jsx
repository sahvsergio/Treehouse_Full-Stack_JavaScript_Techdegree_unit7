import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config'

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


const App=()=> {
  

 


  return (
 
<>      {/* Add a */}
    <SearchForm />
    <Nav />
    <PhotoList />
    </>

    





  )
}

export default App
