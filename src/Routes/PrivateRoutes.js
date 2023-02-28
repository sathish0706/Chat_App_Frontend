import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) {
    return <div> Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
