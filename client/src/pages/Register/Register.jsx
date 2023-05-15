const Register = () => {
  return (
    <>
      <h2>Register Now</h2>
      <form>
        <div className="inputField">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username (must be unique)"
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

        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
