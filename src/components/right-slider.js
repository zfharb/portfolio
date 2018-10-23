import React from 'react';


import './right-slider.css'


const RightSlider = (props) => {

    let profileSection;

    if (props.firstTimeToPage) {
      profileSection = <div className="right-slider-closed"/>

    } else {

        if (props.isOpenProfile) {
            profileSection =  <div className="hide-right-slider"/>
            } else {
            profileSection =  <div className="show-right-slider"/>                                
        }
    }
    
  return (
    profileSection
  )
}
export default RightSlider;
