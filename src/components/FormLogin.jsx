import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/authSlice";
import useForm from "../hooks/useForm";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, isSuccess } = useSelector((state) => state.auth);

  const [values, handleChange, clearForm] = useForm({
    email: "",
    password: "",
    remember_me: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
    if(isSuccess) {
      clearForm();
      navigate("/");
    }
  };


  return (
    <div className="border w-full max-w-96 rounded-lg px-5 py-10 shadow-md grid gap-5">
      <header>
        <h1 className="text-3xl font-bold text-center text-primary">Login</h1>
      </header>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1 px-3"
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="true"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1 px-3"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            className="accent-primary-500"
            type="checkbox"
            name="remember_me"
            id="remember_me"
            checked={values.remember_me}
            onChange={handleChange}
          />
          <label htmlFor="remember_me">Remember me</label>
        </div>
        {error && <p className="text-red-500 bg-red-500/10 py-2 px-5">{error?.message}</p>}
        <button disabled={isLoading} className="bg-primary-500 hover:scale-95 text-black disabled:bg-primary-500/50 rounded-md mt-2 p-2">
          {
            isLoading ? "Loading..." : "Login"
          }
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
