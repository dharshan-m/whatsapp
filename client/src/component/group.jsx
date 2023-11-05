import './styles/group.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faArrowLeftLong as arrow,
    faUsers as community,
} from "@fortawesome/free-solid-svg-icons"
import profile from './images/profile-logo.png';

function Group({onValueChange}){

    const clickOnBack=()=>{
        onValueChange(1);
    }

    return(
        <div className='gorup-main-div'>
            <div className='nav-roup-div'>
                <FontAwesomeIcon icon={arrow} className='arrow-img' size='lg' onClick={clickOnBack}/>
                <p className="nav-profile-content">New chat</p>
            </div>

            <div className='search-div'>
                <input type="search" placeholder='Search name or number' className='class-input-search'/>
            </div>

            <div className='creating-groups'>
                <FontAwesomeIcon icon={community} className='community-img' size='lg'/>
                <p className='class-new-group'>New group</p>
            </div>

            <div className='creating-channels-ongroup'>
                <FontAwesomeIcon icon={community} className='community-img' size='lg'/>
                <p className='class-new-group'>New community</p>
            </div>

            <div className='contacts-on-app'>
                <p className='para-for-contants'>CONTACTS ON WHATSAPP</p>
            </div>

            <div className='profile-2'>
                    <div className='div-profile-img'>
                        <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                    </div>
                    <div className='div-personal-details'>
                        <div className='div-details-as-name-profile-2'>
                            <p className='name-of-person'>Phrabu frnd SECE</p>
                            {/* <p className='time-class'>12.46pm</p> */}
                        </div>
                        <div className='div-discription'>
                            <p className='description'>I'am Busy</p>
                        </div>
                    </div>
            </div>

            <div className='profile-3'>
                    <div className='div-profile-img'>
                        <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                    </div>
                    <div className='div-personal-details'>
                        <div className='div-details-as-name-profile-3'>
                            <p className='name-of-person'>Sathish frnd SECE</p>
                            {/* <p className='time-class'>12.46pm</p> */}
                        </div>
                        <div className='div-discription'>
                            <p className='description'>Urgent Calls only</p>
                        </div>
                    </div>
            </div>

            <div className='profile-4'>
                    <div className='div-profile-img'>
                        <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                    </div>
                    <div className='div-personal-details'>
                        <div className='div-details-as-name-profile-4'>
                            <p className='name-of-person'>Dhanush frnd SECE</p>
                            {/* <p className='time-class'>12.46pm</p> */}
                        </div>
                        <div className='div-discription'>
                            <p className='description'>No time</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Group;