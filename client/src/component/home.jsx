import './styles/home.css';
import React, { useState } from 'react';
import profile from './images/profile-logo.png';
// import status from './images/status.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faUsers as community,
    faRotate as status,
    faCommentMedical as channel,
    faFolderPlus as group,
    faEllipsisVertical as settings,
    faMagnifyingGlass as search,
    faPlus as plus,
    faMicrophone as mickrophone,
} from "@fortawesome/free-solid-svg-icons"


function Home() {
    // const [isMessageVisible, setMessageVisible] = useState(false);
  
    // const toggleMEssage = ()=>{
    //     console.log("toggle MEssage");
    // }
    const handleButtonClick = () => {
        console.log('Button clicked in ParentComponent');
      }
    
    return (
        <>
            <div className='OuterBlock rowFlex'>
                <div>
                    <Nav/>
                    <Second onClick={handleButtonClick}/>
                    <Message/>
                </div>
            </div>
        </>
    )
}





const Nav = ()=>{
    
    

    return (
        <div className='div-for-nav-main rowFlex'>
            <div className='profile-div'>
                <img src={profile} alt="profile logo" className='profile-logo'/>
            </div>
            <div className='other-updates-div'>
                <FontAwesomeIcon icon={community} className='community-img' size='lg' />
                <FontAwesomeIcon icon={status} className='status-img' size='lg'/>
                <FontAwesomeIcon icon={channel} className='channel-img' size='lg'/>
                <FontAwesomeIcon icon={group} className='group-img' size='lg'/>
                <FontAwesomeIcon icon={settings} className='settings-img' size='lg'/>
            </div>
        </div>
    )
} 

const Second =(props)=>{

    const handleClick = () => {
        props.onClick(); // Call the function received via props
      }

    

    return(
        <div className='class-main-div'>
            <div className='search-div'>
                <input type="search" placeholder='Search or start new chat' className='class-input-search'/>
            </div>
            <div className='div-friend-chats'>
                {/* <div className='profile-1' onClick={ToggleMessage}>
                 */}
                <div className='profile-1' onClick={handleClick}>
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


const Message =()=>{
    
    return(
        <>
            <div className='Message-div-container'>
                <div className='nav-div-inmessage'>
                    <div className='logo-and-name'>
                        <img src={profile} alt="profile logo" className='profile-logo'/>
                        <div className='div-contents'>
                            <p className='name-of-person-in-group'>Sri Eshwar College of engineering</p>
                            <p className='description-in-group'>HOD sir,Ashokkumar,Dharun,Phrabu,Dhanush</p>
                        </div>
                    </div>
                    <div className='icons-settings'>
                        <FontAwesomeIcon icon={search} className='search-img' size='lg'/>
                        <FontAwesomeIcon icon={settings} className='settings-img' size='lg'/>
                    </div>
                </div>

                <div className='message-making-div'>
                    <div className='nav-for-message-typing'>
                        <FontAwesomeIcon icon={plus} className='plus-img' size='lg'/>
                        <input type="text" placeholder='Type a message' className='type-it-input-class'/>
                        <FontAwesomeIcon icon={mickrophone} className='mickrophone-img' size='lg'/>
                    </div>
                </div>
            </div>
        </>
    )
}





export default Home;