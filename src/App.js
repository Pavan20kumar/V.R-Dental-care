
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';




//--------------------link-pages--------------------------------------------------//
import Nava from './Navabar';
import Part from './Introduction/index.js';
import Services from './our services/index.js';
import DarkVariantExample from './carouse';
import About from './About/index.js';
import OurDoctors from './ourdoctor/index.js';
import Appointment from './Appointment/index.js';


import OurBlog from './Our Blog/index.js';
import Footer from './Footer/index.js';
import WhatsAppIcon from './whatsapp/index.js';


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
