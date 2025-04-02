import React from 'react'
import Photo from './Photo'


const PhotoList = props => {
    const results = props.data;
    { console.log(results) }
    let photosData = results.map(photo => <Photo url={photo.previewURL} key={photo.id} />);





    return (<div className="photo-container">
        <h2>Results</h2>
        <ul>
            {photosData}
    
      
        
        < li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
      </li>
    
             
        </ul>
        
       

           
       












            
       

    </div>
    );
}
export default PhotoList