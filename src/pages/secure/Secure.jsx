/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

function Security({ children }) {
  const { user } = useGlobalContext();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
export default Security;
