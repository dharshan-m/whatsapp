import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from './images/profile-logo.png';
import{
    faArrowLeftLong as arrow,
} from "@fortawesome/free-solid-svg-icons"
import './styles/status.css';




function Status({onValueChange}){

    const arrowback=()=>{
        onValueChange(1);
    }
    return(
        <div className="class-status-provide">
            <div className="nav-div-for-status">
                <FontAwesomeIcon icon={arrow} className='arrow-img' size='lg' onClick={arrowback}/>
                <p className="content-community">Status</p>
            </div>

            <div className='profile-2-status'>
                <div className='div-profile-img'>
                    <img src={profile} alt="profile-imge" className='profile-for-secondary'/>
                </div>
                <div className='div-personal-details'>
                    <div className='div-details-as-name-profile-2'>
                        <p className='name-of-person'>My status</p>
                    </div>
                    <div className='div-discription'>
                        <p className='description'>Add to my status</p>
                    </div>
                </div>
            </div>

            <div className="div-for-encyruption">
                <p className="content-encryption">Uour status updates are</p>
                <p className="tag-encryption-inside">end-to-end encrypted</p>
            </div>
        </div>
    )
}
export default Status;