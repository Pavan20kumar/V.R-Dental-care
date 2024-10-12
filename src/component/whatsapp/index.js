import React from 'react';
import 'animate.css';
const WhatsAppIcon = () => {
 
 
  const handleWhatsAppClick = () => {
    // Open WhatsApp with your desired phone number or message
    const whatsappUrl = 'https://wa.me/+918790349798?text=Hello';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
    <div
    
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        zIndex: 999,
        backgroundColor: '#25D366', // WhatsApp green color
        borderRadius: '50%',
        
      }}
      onClick={handleWhatsAppClick}
    >
      <img src='./logo/whatsapp.jpg' className='animate__animated animate__bounce  animate__infinite	infinite' alt="WhatsApp" style={{ width: '70px', height: '70px' }} />
    </div>

    



    


    
    


    








    </div>
  );
};



























export default WhatsAppIcon;
