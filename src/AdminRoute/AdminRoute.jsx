import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";

export default function AdminRoute({ children }) {
  const { loggedUser } = useSelector((state) => state.user);

  console.log(loggedUser);

  const location = useLocation();
  const token = localStorage.getItem("magicalHairOil_jwt");

  if (!token) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (token && loggedUser?.success) {
    return children;
  }

  return <Spinner />;
}