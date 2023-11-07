import React from 'react';

function Login() {
  return (
    <div style={containerStyle}>
      <div style={formGroupStyle}>
        <label htmlFor="email">Email address</label>
        <input type="text" id="text" placeholder="name" style={inputStyle} />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="password">Password.......</label>
        <input type="password" id="password" placeholder="********" style={inputStyle} />
      </div>
      <button type="submit" style={buttonStyle}>Login</button>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const formGroupStyle = {
  marginBottom: '10px',
};

const inputStyle = {
  padding: '5px',
  width: '200px',
};

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px',
  border: 'none',
  cursor: 'pointer',
};

export default Login;