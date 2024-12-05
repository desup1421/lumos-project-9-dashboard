import React from "react";
import useForm from "../hooks/useForm";
import { createUser } from "../redux/slices/userUpdate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormCreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, message, isError, isSuccess } = useSelector(
    (state) => state.users
  );

  const [values, handleChange, clearForm] = useForm({
    name: "",
    title: "",
    email: "",
    username: "",
    password: "",
    linkedin_url: "",
    ig_url: "",
    photo: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    dispatch(createUser(formData));

    if (isError) {
      alert(message);
    }

    if (isSuccess) {
      clearForm();
      navigate("/user");
    }
  };

  return (
    <div className="border w-full max-w-96 rounded-lg px-5 py-10 shadow-md grid gap-7">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-primary w-1/2">
          Create Member
        </h1>
      </header>
      <form onSubmit={handleSubmit} className="grid gap-3">
        {/* Photo */}
        <div>
          <label htmlFor="photo">Photo</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="file"
            name="photo"
            id="photo"
            onChange={handleChange}
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
            value={values.name}
            onChange={handleChange}
          />
        </div>
        {/* Title */}
        <div>
          <label htmlFor="name">Title</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="title"
            id="title"
            value={values.title}
            onChange={handleChange}
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
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {/* Username */}
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        {/* Linkedin */}
        <div>
          <label htmlFor="linkedin_url">LinkedIn</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="linkedin_url"
            id="linkedin_url"
            value={values.linkedin_url}
            onChange={handleChange}
          />
        </div>
        {/* Instagram */}
        <div>
          <label htmlFor="ig_url">Instagram</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="ig_url"
            id="ig_url"
            value={values.ig_url}
            onChange={handleChange}
          />
        </div>
        {isError && (
          <p className="text-red-500 bg-red-500/10 py-2 px-5">
            {message.message}
          </p>
        )}
        <button
          disabled={isLoading}
          className="bg-primary-500 hover:scale-95 text-black disabled:bg-primary-500/50 rounded-md mt-2 p-2"
        >
          {isLoading ? "Loading..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default FormCreateUser;
