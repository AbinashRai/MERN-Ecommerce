const LoginPage = () => {
  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Enter your password" required />
        </div>

        <div className="input-box button">
          <input type="Submit" value="Register Now" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
