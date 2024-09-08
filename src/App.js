
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/uikit/dist/js/uikit.js';





//--------------------link-pages--------------------------------------------------//

import Nava from './component/Navabar/index.js'
import Part from './component/Introduction/index.js'
import Services from './component/our services/index.js'
import OurBlog from './component/Our Blog/index.js'
import About from './component/About/index.js'
import OurDoctors from './component/ourdoctor/index.js'
import Appointment from './component/Appointment/index.js'
import Footer from './component/Footer/index.js'
import WhatsAppIcon from './component/whatsapp/index.js'


//--------------------link-pages-End--------------------------------------------------//


import './App.css';

function App() {
  return (
    <div className="App">
      <Nava></Nava>
      
      <Part></Part>

      <Services></Services>

      <OurBlog></OurBlog>
      
      <About></About>

      <OurDoctors></OurDoctors>


      <Appointment></Appointment>
      



      
     
     
      <Footer></Footer>

      <WhatsAppIcon></WhatsAppIcon>

      






     


      



    

     
    



    </div>
  );
}


export default App;
