import React from 'react';


import './left-slider.css'



const LeftSlider = (props) => {

 let pictureSection ;

    if (props.firstTimeToPage) {
      pictureSection = <div className="left-slider" >
                          <img/>   
                        </div>;
    } else {

      if (props.openPortfolio) {
      pictureSection =  <div className="hide-left-slider" >
                          <img/>   
                        </div>;
      } else {
      pictureSection =  <div className="show-left-slider" >
                          <img/>     
                        </div>;
                      
      }
    }
    

  return (
  	pictureSection

  )
}
export default LeftSlider;
