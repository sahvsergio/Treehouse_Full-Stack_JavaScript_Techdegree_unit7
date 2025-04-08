import React from 'react'

import Photo from './Photo'
import NoPhoto from './NoPhoto'


const PhotoList = props => {
    
    const results = props.data;
   

    let photosData;
    if (results.length>0){

        photosData = results.map(photo => <Photo url={photo.previewURL} key={photo.id} />);
    }
    else{
        photosData=<NoPhoto/>;
    }
    { console.log(results) }
   





    return (<div className="photo-container">
        
        <h2>Results</h2>
        <ul>
            {photosData}
    
      
        
       
    
             
        </ul>
        
       

           
       












            
       

    </div>
    );
}
export default PhotoList