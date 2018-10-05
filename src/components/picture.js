import React from 'react';


import './picture.css'


const Picture = (props) => {

 let pictureSection;

    if (props.showProfile) {
      pictureSection = 	<div className="picture-section-background" >
      						<div className="picture-image"/>		
    					</div>;
    } else {
      pictureSection = 	<div/>
      								
    }

  return (
  	pictureSection

  )
}
export default Picture;
