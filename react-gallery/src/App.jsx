import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'


import { BrowserRouter, useParams } from 'react-router-dom'



import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config'

import { Route, Routes, Navigate } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
const myKey = apiKey;









const App = () => {


  {/*
    Setting inital states for pictures and query variables
    and their setting functions
*/}
  const [query, setQuery] = useState("");

  const [images, setImages] = useState([]);

  {/*
   Function definition to fetch data from apy
*/}


  function fetchData(query) {
    {/*
   this function not only does it fetch the data, it sets the value of images
   to the object obtained from the api
*/}
    return fetch(`https://pixabay.com/api/?key=${myKey}&q=${query}&image_type=photo&`)
      .then(response => response.json())
      .then(responseData => responseData.hits)
      .then(imageData => setImages(imageData));

  }



  {/*
    helper function to get the query value 
    from the navbar and the search bar 
    and assign the new value for query value used in fetchdata
*/}

  const getQuery = (newQuery) => {


    setQuery(newQuery);
  }



  {/*
    making sure we make sure of the useEffect Hook to get details of data
    to be displayed later
*/}

  useEffect(() => {
    fetchData(query);
  }

    , [query])





  return (

    <>

      {/*
    importing the Nav and SearchForm at the top so that they are present
    all over the app 
*/}

      <Nav getQuery={getQuery} />
      <SearchForm getQuery={getQuery} />
      {/*
    / - Home route: when visiting the home route, the user should be redirected to the first static route.
    3 static routes for default topics, for example /cats, /dogs and /computers. These will be used in the navigation component, feel free to customize these topics. These should render the PhotoList component.
    /search/:query - route to handle user search queries. This should render the PhotoList component.
   
*/}

      <Routes>
        <Route path='/' element={<Navigate to='/cats' />} />
        <Route path='/cats' element={<PhotoList data={images}  />} />
        <Route path='/dogs' element={<PhotoList data={images} />} />
        <Route path='/computers' element={<PhotoList data={images} />} />


        <Route path='/search/' element={<PhotoList data={images} />}/>
        <Route path='/search/:query' element={<PhotoList data={images}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>







  )
}

export default App