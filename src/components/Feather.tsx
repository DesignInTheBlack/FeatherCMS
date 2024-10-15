import React, { useState, useEffect } from 'react';

const Feather = () => {

  const [message, setMessage] = useState('Feather CMS online!');

  const sendMessage = async () => {
    try {
      const response = await fetch('/api/log-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (data.success) {
        console.log('Message sent successfully');
        setMessage(''); // Clear the input
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
        sendMessage();
  }, []);

  return (
    <div>
      <h1> Hello React </h1>
    </div>
  );
};

export default Feather;