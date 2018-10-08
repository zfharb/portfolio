import React from 'react';


import './right-slider.css'


const RightSlider = (props) => {

    let profileSection;

    if (props.firstTimeToPage) {
      profileSection = <div className="right-slider">
                                <ul className="list">
                                    <li >Home</li>
                                    <li>About me</li>
                                    <li>My work</li>
                                    <li>How to reach me</li>
                                </ul>
                        </div>
    } else {

        if (props.showSlider) {
            profileSection =  <div className="right-slider show">
                                <ul className="list">
                                    <li >Home</li>
                                    <li>About me</li>
                                    <li>My work</li>
                                    <li>How to reach me</li>
                                </ul>
                            </div>
            } else {
            profileSection =  <div className="right-slider hide">
                                <ul className="list">
                                    <li >Home</li>
                                    <li>About me</li>
                                    <li>My work</li>
                                    <li>How to reach me</li>
                                </ul>
                            </div>                                
        }
    }
    
  return (
    profileSection
  )
}
export default RightSlider;
