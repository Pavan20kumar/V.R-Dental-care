
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/uikit/dist/js/uikit.js';











//--------------------link-pages--------------------------------------------------//


import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from './component/Home/index.js';
import WhatsAppIcon from './component/whatsapp';
// import AutomaticPopupAd from './component/pop-up ads/index.js';
import AppointmentCancel from './component/Appointment Cancel/index.js';
import AppointmentUpdate from './component/Appointment Update/index.js';










//--------------------link-pages-End--------------------------------------------------//


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AutomaticPopupAd /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cancel" element={<AppointmentCancel />} />
          <Route exact path="/edit/:id" element={<AppointmentUpdate />} />
          
        </Routes>
        
        <WhatsAppIcon />
      </BrowserRouter>

      


    </div>
  );
}





export default App;
