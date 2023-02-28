import "./App.css";
import Home from "./Components/Home";
import UserContext from "./Context/UserContext";
import io from "socket.io-client";
import JoinChat from "./Components/JoinChat";
import UseFindUser from "./Hooks/UseFindUser";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ResetPassword from "./Components/ResetPassword";
// import Chat from './Components/Chat';
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";

const socket = io.connect("https://chat-app-backend-1l49.onrender.com");

function App() {
  const [user, setUser, loading] = UseFindUser();
  console.log("user:", user);

  console.log("url:", process.env.REACT_APP_API_URL);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <div>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="/passwordReset" element={<ResetPassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PrivateRoutes user={user} />}>
            <Route path="/chat" element={<JoinChat socket={socket} />} />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
