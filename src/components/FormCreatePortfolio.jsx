import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortfolio } from "../redux/slices/portfolioSlice";
import Editor from "./CKEditor";
import useForm from "../hooks/useForm";

const FormCreatePortfolio = () => {
  const dispatch = useDispatch();
  const { isLoading, message, isError, isSuccess } = useSelector(
    (state) => state.portfolio
  );
  const [values, handleChange, clearForm] = useForm({
    banner: null,
    title: "",
    content: "",
  });

  const handleEditorChange = (data) => {
    handleChange({
      target: {
        name: "content",
        value: data,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    dispatch(createPortfolio(formData));
    if (isError) {
      alert(message);
    }
    if (isSuccess) {
      alert("Success");
      clearForm();
    }
    console.log(values);
  };

  return (
    <div className="border w-full max-w-[760px] m-10 rounded-lg px-5 py-10 shadow-md grid gap-7">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-primary w-1/2">
          Create Portfolio
        </h1>
      </header>
      <form onSubmit={handleSubmit} className="grid gap-3">
        {/* Photo */}
        <div>
          <label htmlFor="banner">Banner</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="file"
            name="banner"
            id="banner"
            onChange={handleChange}
          />
        </div>
        {/* Titile */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="title"
            id="title"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        {/* CONTENT */}
        <div>
          <p>Content</p>
          <Editor id="content" value={values.content} onChange={handleEditorChange} />
        </div>
        {/* BUTTON */}
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

export default FormCreatePortfolio;
