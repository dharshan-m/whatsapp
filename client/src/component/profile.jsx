import React from "react";
import profile from './images/profile-logo.png';
import './styles/profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faArrowLeftLong as arrow,
} from "@fortawesome/free-solid-svg-icons"

function Profile({onValueChange}){

    const profileBackClick=()=>{
        onValueChange(1);
    }

    return(
        <div className="profile-div-change">
            <div className="nav-div-prfile-changes">
                <FontAwesomeIcon icon={arrow} className='arrow-img' size='lg' onClick={profileBackClick} />
                <p className="nav-profile-content">Profile</p>
            </div>
            <div className="no-of-profile-changes">

                <img src={profile} alt="profile logo" className='profile-logo-profile-page'/>


                <div className="input-tags">
                    <label htmlFor="profile-name">Your name</label>
                    <input type="text" name="profile-name" className="profile-name"/>

                    <label htmlFor="profile-about">About</label>
                    <input type="text" name="profile-about" className="profile-about"/>
                </div>
            </div>
        </div>
    )
}
export default Profile