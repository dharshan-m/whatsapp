import React from 'react';
import whatsapp  from './images/whatsapp image.png';
import qrscanner from './images/qr_scan.png';
import web from './images/whatsapp web.webp';
import '../component/styles/link.css';
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Link(){

    const navigate = useNavigate();

    const [tel, settel] = useState("");

    const telphone = (e) => {
        settel(e.target.value);
    }

    const phonenoChecker =(phoneno)=>{
        return phoneno.length  <=10
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        if(phonenoChecker(tel)){
            alert("hello");
            console.log(tel);
            navigate('/home');
        }
        else{
            alert("enter valid value");
        }
    }


    return(
        <div className='main-container-app'>
            <div className='first-color'></div>
            <div className='second-color'></div>
            <div className='third-flow'>
                <div className='container'>
                    <img src={whatsapp} alt="logo" className='image-whatsapp'/>
                    <h3 className='h3-name-logo'>WHATSAPP WEB</h3>
                </div>

                <div className='box-container'>
                    <div className='main-box'>
                        <div className='download box'>
                            <div className='paragraphs'>
                                <p className='download content'>Download Whatsapp for Windows</p>
                                <p className='define aboutit'>Get calling, screen sharing and a faster experience with the new window app.</p>
                            </div>
                            <div className='button-div'>
                                <button className='button-get-download'>Get the app</button>
                            </div>
                        </div>

                        <hr />
                        
                        <div className='total-div-combain'>
                            <div className='content-div'>
                                <div className='headin-content'>
                                    <p className='paragraph-content'>Use Whatsapp on your Computer</p>
                                </div>
                                <div className='list-content'>
                                    <ol>
                                        <li>Open WhatsApp on your phone</li><br />
                                        <li>Go to settings by tapping on your profile photo, Menu, or Settings </li><br />
                                        <li>ap Linked devices and then Link a device</li><br />
                                        <li>Point your phone to this screen to capture the QR code</li>
                                    </ol>
                                </div>
                            </div>
                            <div className='div-for-qr'>
                                <img src={qrscanner} alt="qr-img" className='qr-scaner'/>
                            </div>
                        </div>

                        <hr className='hr-down'/>

                        <div className='next-page-format'>
                            <form action="" className='form-container' onSubmit={formSubmit} >
                                <div className='div-for-buttons'>
                                    <div className='div-move-page'>
                                        <p className='link-with-class'>Link with phone number</p>
                                    </div> 
                                    <div className='phone-no_button'>
                                            <input type="tel" placeholder='+91' className='input-phone-number' pattern="[0-9]{10}" onChange={telphone} required/>
                                    </div>
                                </div>
                                <div className='button-div-connect'>
                                    <input type='submit' className='button-class' value={'Next'}/>
                                </div>
                            </form>

                        </div>

                        <div className='tutorial-div'>
                            <img src={web} alt="web app imag" className='imagege-for-web-app'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Link;