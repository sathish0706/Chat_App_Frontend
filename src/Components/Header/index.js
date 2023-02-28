import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["accessToken"]);

  const handleLogout = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/signout`,
      {
        userCredentials: true,
      }
    );
    if (response) {
      removeCookie("accessToken");
      navigate("/login");
    }
  };

  return (
    <div className="header">
      <div className="header-2">
        <h3>Chat App</h3>
        <button onClick={handleLogout} className="header-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
