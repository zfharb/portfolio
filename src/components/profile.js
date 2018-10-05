import React from 'react';


import './profile.css'


const Profile = (props) => {

    let profileSection;

    if (props.firstTimeToPage) {
      profileSection = <div/>
    } else {

        if (props.showProfile) {
            profileSection =  <div className="profile-section">
                                <ul className="profile-list">
                                    <li >Home</li>
                                    <li>About me</li>
                                    <li>My work</li>
                                    <li>How to reach me</li>
                                </ul>
                            </div>
            } else {
            profileSection =  <div/>                                
        }
    }
    
  return (
    profileSection
  )
}
export default Profile;
