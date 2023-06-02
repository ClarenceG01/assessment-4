import React from "react";

const LoginForm = () => {
  return (
    <div className="login">
      <h1>Login Form</h1>
      <form className="login-form">
        <h4>Enter your details to login</h4>
        {/*Email*/}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        {/*Password*/}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
        {/*Submit*/}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
