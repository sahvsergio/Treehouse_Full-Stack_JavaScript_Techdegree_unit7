import React from 'react'
import Photo from './Photo'


const PhotoList =  ({data})=>{
    data.then(images=>()=>{
        for (let i=0;i<images.length;i++){

            let imageURL=images[i].pageURL;
            { console.log(imageURL) }
        }
    })

    
   
   

            




   


    

    

    
   
    
    return (<div className="photo-container">
        <h2>Results</h2>
     
        
        <ul>
         
                     <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>

<li>
                <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />



        
            </li>






          
            
          
        </ul>
    </div>
    );
}
export default PhotoList