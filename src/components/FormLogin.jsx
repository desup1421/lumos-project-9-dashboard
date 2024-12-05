import React from "react";

const FormLogin = () => {
  return (
    <div className="border w-full max-w-96 rounded-lg px-5 py-10 shadow-md grid gap-5">
      <header>
        <h1 className="text-3xl font-bold text-center text-primary">Login</h1>
      </header>
      <form className="grid gap-3">
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            className="accent-primary-500"
            type="checkbox"
            name="remember_me"
            id="remember_me"
          />
          <label htmlFor="remember_me">Remember me</label>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
