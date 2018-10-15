import React from 'react';

import './left-slider.css'



const LeftSlider = (props) => {

 let pictureSection ;

    if (props.firstTimeToPage) {
      pictureSection = <div className="left-slider" >                            
                            <img className="img" />
                        </div>;
    } else {

      if (props.isOpenProfile) {
      pictureSection =  <div className="hide-left-slider" >
                            <img className="img" />
                        </div>;
      } else {
      pictureSection =  <div className="show-left-slider" >
                            <img className="img" />
                        </div>;
                      
      }
    }
    

  return (
  	pictureSection

  )
}
export default LeftSlider;
