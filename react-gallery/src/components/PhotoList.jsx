import React from 'react'
import Phot from './Photo'


const PhotoList = (data) => {

   

    return (<div className="photo-container">
        <h2>Results</h2>
    
        
        <ul>
            if(data.URL===''){
                     <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
}
else{<li>
                <img src={data.largeImageURL} alt="" />
            </li>

}




          
            
          
        </ul>
    </div>
    );
}
export default PhotoList