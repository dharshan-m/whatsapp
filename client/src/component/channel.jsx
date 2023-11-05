import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faArrowLeftLong as arrow,
} from "@fortawesome/free-solid-svg-icons"
import profile from './images/profile-logo.png';
import './styles/channel.css';



function Channel({onValueChange}){

    const onclickbackhome=()=>{
        onValueChange(1);
    }

    return(
        <div className="div-channel-block">
            <div className="nav-div-channel">
                <FontAwesomeIcon icon={arrow} className='arrow-img' size='lg' onClick={onclickbackhome}/>
                <p className="nav-profile-content">Channel</p>
            </div>

            <div className="channels-div">
                <div className="find-channel">
                    <p className="para-channel">Find channel</p>
                </div>
                <div className="channels">
                    <div className="channel-1">
                        <img src={profile} alt="profile logo" className='profile-logo-channel-page'/>
                        <p className="channel-name">WhatsApp</p>
                        <p className="follow-channel">Follow</p>
                    </div>

                    <div className="channel-2">
                        <img src={profile} alt="profile logo" className='profile-logo-channel-page'/>
                        <p className="channel-name">Facbook</p>
                        <p className="follow-channel">Follow</p>
                    </div>

                    <div className="channel-3">
                        <img src={profile} alt="profile logo" className='profile-logo-channel-page'/>
                        <p className="channel-name">Movies</p>
                        <p className="follow-channel">Follow</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Channel;