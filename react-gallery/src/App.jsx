import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config'

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoList from './components/Photolist';
import Photo from './components/Photo';




function fetchData(query) {
  fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&`)
    .then(response => response.json())
    .then(data => console.log(data));


};
fetchData('flower');

const App=()=> {

  const [count, setCount] = useState(0)


  return (
 
<>      {/* Add a */}
    <SearchForm />
    <Nav />
    <PhotoList />
    </>

    





  )
}

export default App
