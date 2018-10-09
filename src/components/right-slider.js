import React from 'react';


import './right-slider.css'


const RightSlider = (props) => {

    let profileSection;

    if (props.firstTimeToPage) {
      profileSection = <div className="right-slider" >
                            <button className="slider-home-button" 
                                    onClick={props.triggerProfilePage }><p>click here to open portfolio</p>
                            </button>
                        </div>
    } else {

        if (props.showSlider) {
            profileSection =  <div className="show-right-slider">
                                <button className="slider-home-button"
                                        onClick={props.triggerProfilePage }><p>click here to open portfolio</p>
                                </button>
                              </div>
            } else {
            profileSection =  <div className="hide-right-slider">
                                <button className="slider-home-button" 
                                        onClick={props.triggerProfilePage }><p>click here to open portfolio</p>
                                </button>
                              </div>                                
        }
    }
    
  return (
    profileSection
  )
}
export default RightSlider;
