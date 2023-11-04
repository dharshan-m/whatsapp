import './styles/home.css';
import profile from './images/profile-logo.png';
// import status from './images/status.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faUsers as community,
    faRotate as status,
    faCommentMedical as channel,
    faFolderPlus as group,
    faEllipsisVertical as settings,
} from "@fortawesome/free-solid-svg-icons"



const Nav = ()=>{
    return (
        <div className='div-for-nav-main rowFlex'>
            <div className='profile-div'>
                <img src={profile} alt="profile logo" className='profile-logo'/>
            </div>
            <div className='other-updates-div'>
                <FontAwesomeIcon icon={community} className='community-img' size='lg'/>
                <FontAwesomeIcon icon={status} className='status-img' size='lg'/>
                <FontAwesomeIcon icon={channel} className='channel-img' size='lg'/>
                <FontAwesomeIcon icon={group} className='group-img' size='lg'/>
                <FontAwesomeIcon icon={settings} className='settings-img' size='lg'/>
            </div>
        </div>
    )
} 

const Second =()=>{
    return(
        <div className='class-main-div'>
            <div className='search-div'>
                <input type="search" placeholder='Search or start new chat' className='class-input-search'/>
            </div>
            <div className='div-friend-chats'>
                <div className='profile-1'>
                    <div className='div-profile-img'>
                        <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                    </div>
                    <div className='div-personal-details'>
                        <div className='div-details-as-name'>
                            <p className='name-of-person'>Sri Eshwar College of engineering</p>
                            <p className='time-class'>12.46pm</p>
                        </div>
                        <div className='div-discription'>
                            <p className='description'>HOD: Dear Students as planned Semester exam..</p>
                        </div>
                    </div>
                </div>

                <div className='profile-2'>
                    <div className='div-profile-img'>
                        <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                    </div>
                    <div className='div-personal-details'>
                        <div className='div-details-as-name-profile-2'>
                            <p className='name-of-person'>Phrabu frnd SECE</p>
                            <p className='time-class'>12.46pm</p>
                        </div>
                        <div className='div-discription'>
                            <p className='description'>hi man</p>
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
                            <p className='time-class'>12.46pm</p>
                        </div>
                        <div className='div-discription'>
                            <p className='description'>hello bro</p>
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
                            <p className='time-class'>12.46pm</p>
                        </div>
                        <div className='div-discription'>
                            <p className='description'>I send the money</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}




const Home =()=>{
    return (
        <>
            <div className='OuterBlock rowFlex'>
                <div>
                    <Nav/>
                    <Second/>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Home;