import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="name"
            value={email}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
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