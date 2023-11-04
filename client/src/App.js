
import './App.css';
import imagelogo from './component/images/logo-webapp.png';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  
  const Navigate = useNavigate();

  const data= useEffect(() => {
        const timer = setTimeout(() => Navigate('/link'), 2000);
        return () => clearTimeout(timer);
  }, []);



  return (
    <div className='moving-container'>
      <div className='moving-contaier-inside'>
        {/* <h1 className='class-head-app'>WHATSAPP WEB</h1> */}
        <img src={imagelogo} alt='logo-web' className='class-head-app'/>
        <hr class="animate-hr"></hr>
      </div>
    </div>
  );  
}

export default App;
