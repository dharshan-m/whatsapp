import './styles/home.css';
import React, { useState, useEffect } from 'react';
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
    faShare as sendbtn,
} from "@fortawesome/free-solid-svg-icons"

import Profile from './profile';
import Community from './community';
import Status from './status';
import Channel from './channel';
import Group from './group';
import Settings from './settings';

function Home() {
    const [pagestate, setPagestate] = useState(1);
  
    // const toggleMEssage = ()=>{
    //     console.log("toggle MEssage");
    // }
    const handleButtonClick = () => {
        console.log('Button clicked in ParentComponent');
      }
    
      const handleValueChange = (newValue) => {
        setPagestate(newValue);
      }

    return (
        <>
            <div className='OuterBlock rowFlex'>
                <div>
                    {pagestate===1?
                        <>
                            <Nav onValueChange={handleValueChange}/>
                            <Second onClick={handleButtonClick}/>
                        </>
                        :
                        pagestate===2?
                        <>
                            <Profile onValueChange={handleValueChange}/>
                        </>
                        :
                        pagestate===3?
                        <>
                            <Community onValueChange={handleValueChange}/>
                        </>
                        :
                        pagestate===4?
                        <>
                            <Status onValueChange={handleValueChange}/>
                        </>
                        :
                        pagestate===5?
                        <>
                            <Channel onValueChange={handleValueChange}/>
                        </>
                        :
                        pagestate===6?
                        <>
                            <Group onValueChange={handleValueChange}/>
                        </>
                        :
                        pagestate===7?
                        <>
                            <Settings onValueChange={handleValueChange}/>
                        </>:
                        <></>
                    }
                    


                    <Message/>
                </div>
            </div>
        </>
    )
}





const Nav = ({onValueChange})=>{
    
    const handleValueChange = (newValue) => {
    // setSharedValue(newValue);
  }

  const profileClick =()=>{
    onValueChange(2);
  }

  const communityClick =()=>{
    onValueChange(3);
  }

  const statusClick=()=>{
    onValueChange(4);
  }

    const channelClick=()=>{
        onValueChange(5);
    }
    const groupClick=()=>{
        onValueChange(6);
    }
    const settingsClick=()=>{
        onValueChange(7);
    }
    // const settings2=()=>{
    //     onValueChange(1);
    // }

    return (
        <div className='div-for-nav-main rowFlex'>
            <div className='profile-div'>
                <img src={profile} alt="profile logo" className='profile-logo' onClick={profileClick}/>
            </div>
            <div className='other-updates-div'>
                <FontAwesomeIcon icon={community} className='community-img' size='lg' onClick={communityClick}/>
                <FontAwesomeIcon icon={status} className='status-img' size='lg' onClick={statusClick}/>
                <FontAwesomeIcon icon={channel} className='channel-img' size='lg' onClick={channelClick}/>
                <FontAwesomeIcon icon={group} className='group-img' size='lg' onClick={groupClick}/>
                <FontAwesomeIcon icon={settings} className='settings-img' size='lg' onClick={settingsClick} />
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
                <input type="search" placeholder='Search or start new chat' className='class-input-search' />
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

    const [messages, setMessages] = useState([]); // State for storing messages
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages'));
        if (storedMessages) {
            setMessages(storedMessages);
        }
    }, []);
    
      // Update local storage whenever messages change
    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
          // Create a new message object
            const newMessage = {
            text: inputText, // Message text
            sender: 'user', // Sender (e.g., 'user' or 'bot')
        };
    
          // Add the new message to the messages state
            setMessages([...messages, newMessage]);
          // Reset the input text to an empty string after sending
            setInputText('');
        }
    };

    const handleDeleteMessage = (id) => {
        const updatedMessages = messages.filter((message) => message.id !== id);
        setMessages(updatedMessages);
    };
    
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

                <div className="chat-container">
                    {messages.map((message, index) => (
                     // Display each message in a div, using its index as the key
                        <div key={index} className={`message ${message.sender}`}>
                            {/* {message.text} Show the message text */}
                            <span onClick={() => handleDeleteMessage(message.id)} className='span-message-derrived'>{message.text}</span>
                            {/* <button onClick={() => handleDeleteMessage(message.id)}>Delete</button> */}
                        </div>
                    ))}
                </div>

                <div className='message-making-div'>
                    <div className='nav-for-message-typing'>
                        <FontAwesomeIcon icon={plus} className='plus-img' size='lg'/>
                        <input type="text" placeholder='Type a message' className='type-it-input-class' value={inputText} onChange={handleInputChange}/>
                        {/* <button onClick={handleSendMessage} className='button-send-msg'>Send</button> */}
                        <FontAwesomeIcon icon={sendbtn} className='sendbtn-img' size='lg' onClick={handleSendMessage}/>
                        <FontAwesomeIcon icon={mickrophone} className='mickrophone-img' size='lg'/>
                    </div>
                </div>
            </div>
        </>
    )
}





export default Home;