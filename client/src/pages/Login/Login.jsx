const Login = () => {
  return (
    <>
    <h2>Login</h2>
      <form>
        <div className="inputField">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="inputField">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
