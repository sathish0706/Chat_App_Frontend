import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleCred = (value) => {
    return setUserCred((cred) => {
      return { ...cred, ...value };
    });
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/signin`,
        userCred,
        { withCredentials: true }
      );
      if (response) {
        navigate("/chat");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <h3>User Login</h3>
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={userCred.email}
            placeholder="Enter email"
            onChange={(e) => handleCred({ email: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userCred.password}
            placeholder="Password"
            onChange={(e) => handleCred({ password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <br />
        <Link to={"/forgotPassword"}>Forgot password?</Link>&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={"/register"}>Do not have an account</Link>
      </form>
      <div></div>
    </div>
  );
};

export default Login;
