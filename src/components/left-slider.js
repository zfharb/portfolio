import React from 'react';

import './left-slider.css'



const LeftSlider = (props) => {

 let pictureSection ;

    if (props.firstTimeToPage) {
      pictureSection = <div className="left-slider" >
                          <div className="img-box">
                            <img className="img" />
                          </div>   
                        </div>;
    } else {

      if (props.isOpenProfile) {
      pictureSection =  <div className="hide-left-slider" >
                          <div className="img-box">
                            <img className="img" />
                          </div>   
                        </div>;
      } else {
      pictureSection =  <div className="show-left-slider" >
                          <div className="img-box">
                            <img className="img" />
                          </div>   
                        </div>;
                      
      }
    }
    

  return (
  	pictureSection

  )
}
export default LeftSlider;
