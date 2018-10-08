import React from 'react';


import './right-slider.css'


const RightSlider = (props) => {

    let profileSection;

    if (props.firstTimeToPage) {
      profileSection = <div className="right-slider">
                        <a href="">clicl here to enter portfolio</a>
                        </div>
    } else {

        if (props.showSlider) {
            profileSection =  <div className="right-slider show">
                                
                            </div>
            } else {
            profileSection =  <div className="right-slider hide">
                                
                            </div>                                
        }
    }
    
  return (
    profileSection
  )
}
export default RightSlider;
