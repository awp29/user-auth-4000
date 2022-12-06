import { Navigate } from "react-router-dom";
import { getToken } from "./auth/token";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = (props) => {
  const { children } = props;
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
