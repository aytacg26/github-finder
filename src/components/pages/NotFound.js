import React from 'react';

function NotFound() {
  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        marginTop: '10%',
        fontSize: '30px',
      }}
    >
      <i
        className='fas fa-exclamation-triangle'
        style={{ color: 'red', fontSize: '65px' }}
      ></i>
      <h1>NOT FOUND</h1>
      <p className='lead'>The page you are looking for does not exist...</p>
    </div>
  );
}

export default NotFound;
