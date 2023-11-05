import React from "react";
import './styles/profile.css';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faArrowLeftLong as arrow,
} from "@fortawesome/free-solid-svg-icons"

function Profile(){
    return(
        <div className="profile-div-change">
            <div className="nav-div-prfile-changes">
                <FontAwesomeIcon icon={arrow} className='arrow-img' size='lg' />
                <p className="nav-profile-content">Profile</p>
            </div>
            <div className="no-of-profile-changes">
                <label htmlFor="profile-name">Your name</label>
                <input type="text" name="profile-name" className="profile-name"/>

                <label htmlFor="profile-about">About</label>
                <input type="text" name="profile-about" className="profile-about"/>
            </div>
        </div>
    )
}
export default Profile