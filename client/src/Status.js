import React, { useEffect, useState } from 'react';

const Status = () => {
  const [backendStatus, setBackendStatus] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/status')
      .then(response => response.json())
      .then(data => setBackendStatus(data.message))
      .catch(error => setBackendStatus('Error: ' + error.message));
  }, []);

  return (
    <div>
      <h2>Backend Status</h2>
      <p>{backendStatus}</p>
    </div>
  );
};

export default Status;
