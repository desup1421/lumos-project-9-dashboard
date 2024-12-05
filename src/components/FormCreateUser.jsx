import React from "react";

const FormCreateUser = () => {
  return (
    <div className="border w-full max-w-96 rounded-lg px-5 py-10 shadow-md grid gap-7">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-primary w-1/2">Create Member</h1>
      </header>
      <form className="grid gap-3">
        {/* Photo */}
        <div>
          <label htmlFor="photo">Photo</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="file"
            name="photo"
            id="photo"
          />
        </div>
        {/* Name */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="name"
            id="name"
          />
        </div>
        {/* Email */}
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
          <label htmlFor="username">Username</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="username"
            id="username"
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
      </form>
    </div>
  );
};

export default FormCreateUser;
