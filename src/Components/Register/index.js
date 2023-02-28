import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    role: 1,
  });
  const navigate = useNavigate();

  const handleForm = (value) => {
    return setUserDetails((cred) => {
      return { ...cred, ...value };
    });
  };

  const handleRegistration = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/register`,
        userDetails,
        { withCredentials: true }
      );
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="register-container">
      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <h3>User Registration</h3>
          <label>Email address: </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={userDetails.email}
            placeholder="Enter email"
            onChange={(e) => handleForm({ email: e.target.value })}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userDetails.name}
            placeholder="Enter name"
            onChange={(e) => handleForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userDetails.password}
            placeholder="Password"
            onChange={(e) => handleForm({ password: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Mobile Number: </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            value={userDetails.mobileNumber}
            placeholder="Enter mobile number"
            onChange={(e) => handleForm({ mobileNumber: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <br />
        <Link to={"/login"}>Already have an account</Link>
      </form>
    </div>
  );
};

export default Register;
