import React from "react";
import FormLogin from "../components/FormLogin";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="h-screen flex justify-center items-center">
        <FormLogin />
    </div>
  );
};

export default Login;
