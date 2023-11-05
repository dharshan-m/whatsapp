import profile from './images/profile-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faArrowLeftLong as arrow,
    faUsers as community,
} from "@fortawesome/free-solid-svg-icons"
import './styles/community.css';


function Community({onValueChange}){

    const arrowclickhome=()=>{
        onValueChange(1);
    }
    return(
        <div className="community-groups-div">
            <div className="nav-div-community">
                <FontAwesomeIcon icon={arrow} className='arrow-img' size='lg' onClick={arrowclickhome}/>
                <p className="content-community">Community</p>
            </div>

            <div className="create-community-div">
                <FontAwesomeIcon icon={community} className='community-img' size='lg' />
                <p className="para-create-community">New community</p>
            </div>

            <div className='profile-2'>
                    <div className='div-profile-img'>
                        <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                    </div>
                    <div className='div-personal-details'>
                        <div className='div-details-as-name-profile-2'>
                            <p className='name-of-person'>React js</p>
                            {/* <p className='time-class'>12.46pm</p> */}
                        </div>
                        <div className='div-discription'>
                            <p className='description'>front end..</p>
                        </div>
                    </div>
                </div>

                <div className='profile-2'>
                    <div className='div-profile-img'>
                        <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                    </div>
                    <div className='div-personal-details'>
                        <div className='div-details-as-name-profile-2'>
                            <p className='name-of-person'>Node js</p>
                            {/* <p className='time-class'>12.46pm</p> */}
                        </div>
                        <div className='div-discription'>
                            <p className='description'>Back end..</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Community;