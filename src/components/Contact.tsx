import React, { useState } from 'react';
import './Contract.css';

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false); 

  const handleEmailClick = () => {
    setShowEmail(!showEmail); 
  };

  return (
    <section className="contact">
      <h2>İletişim</h2>
      <p>Beni e-posta yoluyla veya LinkedIn üzerinden ulaşabilirsiniz.</p>
      <p>
        Email: 
        <button 
          className="email-button" 
          onClick={handleEmailClick}
        >
          {showEmail ? 'oguzapaydin96@gmail.com' : 'Mail adresim'}
        </button>
      </p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/o%C4%9Fuz-kaan-apayd%C4%B1n-b05baa348/" target="_blank" rel="noopener noreferrer">LinkedIn Profilim</a>
      </p>
    </section>
  );
};

export default Contact;
