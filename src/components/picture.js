import React from 'react';


import './picture.css'



const Picture = (props) => {

 let pictureSection ;

    if (props.firstTimeToPage) {
      pictureSection = <div/>
    } else {

      if (props.showProfile) {
      pictureSection =  <div className="picture-show-section-background" >
                          <img className="picture-show-image"/>   
                        </div>;
      } else {
      pictureSection =  <div className="picture-hide-section-background" >
                          <img className="picture-hide-image"/>    
                        </div>;
                      
      }
    }
    

  return (
  	pictureSection

  )
}
export default Picture;
