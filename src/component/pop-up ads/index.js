
import Modal from 'react-modal';

import React, { useState, useEffect } from 'react';


function AutomaticPopupAd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, ); // 5-second delay

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '300px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        },
      }}
    >
      <h2>Pop-up Ad</h2>
      <p>This is a sample pop-up ad.</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
    </div>
  );
}

export default AutomaticPopupAd;