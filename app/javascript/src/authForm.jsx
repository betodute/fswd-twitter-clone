import React, { useState } from 'react';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Track whether it's a login or signup form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login or signup logic here based on isLogin state
    if (isLogin) {
      // Handle login
      console.log('Logging in with:', username, password);
    } else {
      // Handle signup
      console.log('Signing up with:', username, email, password);
    }

    // Reset form fields if needed
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="front-card col-xs-10 col-xs-offset-1">
      <div className="col-xs-6 welcome">
        {/* Your welcome text and other content goes here */}
      </div>
      <div className="log-in col-xs-4 col-xs-offset-1">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input
                type="email"
                className="form-control email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div className="form-group col-xs-8">
            <input
              type="password"
              className="form-control password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-default btn-primary col-xs-3 col-xs-offset-1">
            {isLogin ? 'Log in' : 'Sign up'}
          </button>
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
            <span> · </span>
          </label>
          <a href="#">Forgot password?</a>
        </form>
      </div>
      <div className="sign-up col-xs-4 col-xs-offset-1">
        <form>
          {/* Your signup form content */}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
