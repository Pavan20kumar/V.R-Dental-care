
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/uikit/dist/js/uikit.js';











//--------------------link-pages--------------------------------------------------//


import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from './component/Footer/index.js';
import Home from './component/Home/index.js';
import WhatsAppIcon from './component/whatsapp';
import AboutReadMore from './component/ReadMore about/index.js';







//--------------------link-pages-End--------------------------------------------------//


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<AboutReadMore />} />

          
        
        </Routes>
        <Footer />
        <WhatsAppIcon />
      </BrowserRouter>


    </div>
  );
}


export default App;
