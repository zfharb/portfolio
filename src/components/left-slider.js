import React from 'react';


import './left-slider.css'



const LeftSlider = (props) => {

 let pictureSection ;

    if (props.firstTimeToPage) {
      pictureSection = <div className="left-slider" >
                          <img/>   
                        </div>;
    } else {

      if (props.showSlider) {
      pictureSection =  <div className="left-slider show" >
                          <img/>   
                        </div>;
      } else {
      pictureSection =  <div className="left-slider hide" >
                          <img/>     
                        </div>;
                      
      }
    }
    

  return (
  	pictureSection

  )
}
export default LeftSlider;
