import React from 'react';
import whatsapp  from './images/whatsapp image.png';
import qrscanner from './images/qr_scan.png';
import web from './images/whatsapp web.webp';
import '../component/styles/link.css';

function link(){
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

                        <div className='div-move-page'>
                            <button className='link-with-class'>Link with phone number</button>
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
export default link;