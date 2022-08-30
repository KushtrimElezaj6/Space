import { Navigate } from "react-router-dom";
import { LoginForm } from "../../components/Login/LoginForm";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import { useLoginFormik } from "../../lib/hooks/useLoginFormik";

export const Login = () => {
  const { user, onLogin } = useAuthContext();
  const formik = useLoginFormik({
    onSubmit(values) {
      onLogin(values.username);
    },
  });

  if (user !== null) return <Navigate to="/" />;

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <LoginForm formik={formik} />
    </div>
  );
};
