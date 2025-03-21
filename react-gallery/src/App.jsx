import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config'



function fetchData(query) {
  fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&`)
    .then(response => response.json())
    .then(data => console.log(data));


};
fetchData('flower');

function App() {
  const [count, setCount] = useState(0)


  return (
    <h1>Welcome to my app </h1>





  )
}

export default App
