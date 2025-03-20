import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config.js'

let 

let response=`https://pixabay.com/api/${apiKey}`


function fetchData(query){

  fetch(response+`&q=${query}`)
  .then((response)=>{

    console.log(response.json);
  })
}
