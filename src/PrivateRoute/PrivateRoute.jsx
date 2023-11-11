import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { UseContext } from "../ContextAPI/ContextAPI";

const PrivateRoute = ({ children }) => {
  const { loggedUser } = UseContext();
  const location = useLocation();
  const token = localStorage.getItem("rahimafrox-solar-jwt");

  if (!loggedUser?.uuid && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (loggedUser?.uuid && token) {
    return children;
  }

  return <Spinner></Spinner>;
};

export default PrivateRoute;
